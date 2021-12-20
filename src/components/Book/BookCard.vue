<template>
    <div>
        <v-card class="mx-auto" max-width="374" style="cursor: pointer;" @click="$router.push(`/book/${book._id}`)" id="book-card" >
            <v-img height="250" :src="coverImageUrl || noBookImagesIcon" @error="invokeOnError()"
                style="border-bottom: 1px solid rgba(0, 0, 0, 0.12);" ></v-img>            
            <v-card-title style="line-height: 1.4; font-size: 18px;">{{book.title}}</v-card-title>
            <v-card-text>
                <v-row align="center" class="mx-0" >
                    <v-rating :value="4.5" color="amber" dense half-increments readonly size="14"></v-rating>
                    <div class="grey--text ml-4">4.5 (413)</div>
                    <v-spacer></v-spacer>                    
                    <v-chip class="font-weight-bold text-uppercase" color="lime darken-3" outlined small >{{book.condition}}</v-chip>
                </v-row>
                <div class="mt-5 d-flex align-center">
                    <v-chip :color="book.stocksleft > 0 ? 'deep-purple accent-4' : 'brown'" 
                            label text-color="white" style="height: 35px; margin-right: 14px;" >
                        <v-img class="button-icon" :src="book.stocksLeft > 0 ? inStockIcon : outOfStockIcon" ></v-img>
                        <div class="font-weight-bold">{{book.stocksLeft > 0 ? "IN STOCK" : "OUT OF STOCK"}}</div>
                    </v-chip>
                    <div style="color: black;">{{book.stocksleft}} left</div>
                </div>
                <div style="display: flex; align-items: center; justify-content: center;" class="mt-4 mb-2">
                    <div class="book-property" style="border-right: 1px solid rgba(0, 0, 0, 0.12); width: 50%; padding: 14px 14px 14px 0px;">
                        <div class="d-flex align-center mb-1">
                            <img :src="sellingPriceIcon" id="property-icon" />
                            <div class="font-weight-bold" style="font-size: 15px;">Price</div>
                        </div>
                        <div>Rs. {{book.price || "245"}}</div>

                    </div>
                    <div class="book-property" style="width: 50%; padding: 14px 0px 14px 14px;">
                        <div class="d-flex align-center mb-1">
                            <img :src="deliveryDateIcon" id="property-icon" />
                            <div class="font-weight-bold" style="font-size: 15px;">Delivery on</div>
                        </div>
                        <div>{{formatTime(book.deliverytime)}}</div>
                    </div>
                </div>
                
                <slot />
            </v-card-text>
        </v-card>
    </div>
</template>

<script>
import sellingPriceIcon from "../../static/Icons/BookDisplayIcons/sellingPrice.svg"
import deliveryDateIcon from "../../static/Icons/BookDisplayIcons/deliveryDate.svg"
import inStockIcon from "../../static/Icons/BookDisplayIcons/inOutStock2.svg"
import outOfStockIcon from "../../static/Icons/BookDisplayIcons/outOfStock.svg"
import noBookImagesIcon from "../../static/Images/noBookImagesAlt.png"
import moment from 'moment'
import AWS from 'aws-sdk'
require("dotenv").config()

export default {
    name: "BookCard",
    components: {},
    props: ["book"],
    data() {
        return {
            s3Bucket: process.env.VUE_APP_BUCKET_NAME,
            region: process.env.VUE_APP_BUCKET_REGION,
            myBucket: new AWS.S3({
                params: { Bucket: process.env.VUE_APP_BUCKET_NAME},
                signatureVersion: 'v4',
                region: process.env.VUE_APP_BUCKET_REGION
            }),
            coverImageUrl: null,
            sellingPriceIcon,
            deliveryDateIcon,
            inStockIcon,
            outOfStockIcon,
            noBookImagesIcon,

        }
    },
    methods: {
        formatTime(deliveryTime){
            return moment(new Date()).add(deliveryTime,'d').format("Do MMM YYYY")
        },
        invokeOnError(){
            this.coverImageUrl = this.noBookImagesIcon
        }
    },
    created(){
        console.log(this.book.coverimage, "PRINTING COVER IMAGE NAME")
        if(this.book.coverimage){        
            const myBucket = this.s3Bucket
            const myKey = this.book.coverimage
            const signedUrlExpireSeconds = 60 * 5
            const params = {
                Bucket: myBucket,
                Key: myKey,
                Expires: signedUrlExpireSeconds
            }
            this.myBucket.getSignedUrl('getObject', params, (err, url) => {
                if (err) {
                    console.log(err)
                    return
                }
                console.log(url)
                this.coverImageUrl = url
            })
        }
    },
    beforeCreate(){
        AWS.config.update({
            accessKeyId: process.env.VUE_APP_ACCESS_KEY,
            secretAccessKey: process.env.VUE_APP_SECRET_ACCESS_KEY
        })
    }
}
</script>

<style scoped>
#book-card{
    width: 100%;
}
.book-property{
    display: flex;
    align-items: center;
    flex-direction: column;
    font-size: 14px;
    color: black;
    
}
.button-icon{
    width: 25px;
    height: 25px;
    margin-right: 10px;
}
#property-icon{
    width: 35px;
    height: 35px;
    margin-right: 8px;
}
</style>