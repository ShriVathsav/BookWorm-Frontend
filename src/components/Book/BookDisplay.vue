<template>
    <div>
        <div v-if="loading">
            <FullPageLoader />
        </div>
        <div v-else>
            <div v-if="!book">
                <PageNotFound />
            </div>
            <div v-else>
                <v-card style="padding: 25px 14px; margin: 14px 0px;">
                    <div style="display: flex; align-items: center; ">
                        <div class="make-bold" style="font-size: 20px; width: 70%;">
                            {{book.title}}
                        </div>
                        <div style="font-size: 18px; width: 30%; text-align: right;" class="make-bold" >
                            &#x20B9; {{book.sellingPrice}}
                        </div>
                    </div>
                    <div style="font-size: 11px; color: gray;" class="mt-2" >
                        Posted on {{formatDate(book.deliverytime)}}
                    </div>
                    <div style="display: flex; align-items: center; justify-content: center; padding-top: 18px; width: 100%;"
                            v-if="isLoggedInUserBookOwner()" >
                        <v-btn outlined color="green" @click.native="$router.push(`/editbook/${$route.params.id}`)" id="action-button" >
                            <v-img class="button-icon" :src="editBookIcon" ></v-img>
                            <div>EDIT</div>
                        </v-btn>
                        <div><UpdateBookStatus :book="book" :alterState="alterState" /></div>
                    </div>
                </v-card>

                <v-card style="padding: 0px;">
                    <div class="main-content">
                        <div class="book-image-container">                    
                            <div style="margin: 14px;">
                                <ImageSlider :images="book.images" :coverImage="book.coverimage" />
                            </div>
                        </div>
                        <div class="first-content">
                            <div class="make-bold" style="font-size: 18px; padding: 7px 14px;">
                                {{book.title}}
                            </div>

                            <div style="display: flex; flex-direction: row; width: 100%; flex-flow: row wrap; padding: 0px 7px;">
                                <div v-for="book in prepareBookFirstContent()" :key="book[0]" class="book-property">
                                    <img :src="book[2]" style="width: 35px; height: 35px; margin-right: 10px;" />
                                    <div>
                                        <div class="make-bold" style="margin-bottom: 5px;">{{book[0]}}</div>
                                        <div>{{book[1]}}</div>
                                    </div>
                                </div>
                            </div>

                            <div style="display: flex; justify-content: center; margin-top: 14px;" >
                                <v-chip :color="book.inStock ? 'deep-purple accent-4' : 'brown'" 
                                        label text-color="white" style="height: 45px; margin-right: 14px;" >
                                    <v-img class="button-icon" :src="book.inStock ? inStockIcon : outOfStockIcon" ></v-img>
                                    <div class="make-bold">{{book.inStock ? "IN STOCK" : "OUT OF STOCK"}}</div>
                                </v-chip>
                                <v-btn outlined color="cyan" @click.native="addItemToCart" id="info-button"
                                        v-if="book.inStock && !isLoggedInUserBookOwner()" :disabled="isBookInCart()">
                                    <v-img class="button-icon" :src="cart1Icon" ></v-img>
                                    <div>{{isBookInCart() ? "ADDED TO CART" : "ADD TO CART"}}</div>
                                </v-btn>
                            </div>
                        </div>
                    </div>

                    <div style="display: flex; flex-direction: row-reverse; align-items: center; 
                            justify-content: center; flex-flow: row wrap;" class="pb-2" v-if="isLoggedInUserBookOwner()" >
                        <div class="mb-3 mt-1">
                            <UpdateBookQuantity :alterState="alterState" :book="book" />
                        </div>
                    </div>
                </v-card>

                <v-card style="padding: 14px; margin: 14px 0px;">
                    <div class="make-bold" style="font-size: 22px;" >About the Book</div>
                    <v-divider></v-divider>
                    <div style="padding: 14px 0px;">
                        {{book.description}}
                    </div>
                    <div class="d-flex align-center justify-center" >
                        <v-btn outlined color="lime darken-2" id="action-button"
                                @click="$router.push(`/profile/${book.profile}`)" >
                            <v-img class="button-icon" :src="viewBookOwnerIcon" ></v-img>
                            <div>VIEW BOOK OWNER DETAILS</div>
                        </v-btn>
                    </div>
                </v-card>

                <div class="second-content">
                    <v-card class="details-card">
                        <div style="padding: 14px;">
                            <div class="make-bold" style="font-size: 22px;" >More Details</div>
                            <v-divider></v-divider>
                        </div>
                        <div style="display: flex; flex-direction: row; width: 100%; flex-flow: row wrap; padding: 0px 7px 14px 7px;">
                            <div v-for="book in prepareBookSecondContent()" :key="book[0]" class="book-property">
                                <img :src="book[2]" style="width: 35px; height: 35px; margin-right: 10px;" />
                                <div>
                                    <div class="make-bold" style="margin-bottom: 5px;">{{book[0]}}</div>
                                    <div>{{book[1]}}</div>
                                </div>
                            </div>
                        </div>
                    </v-card>

                    <v-card class="review-card">
                        <div>
                            <div class="make-bold" style="font-size: 22px;" >Reviews</div>
                            <v-divider></v-divider>
                        </div>
                        <div style="display: flex; align-items: center; justify-content: center; padding: 7px 0px;">
                            <v-rating :value="book.averageRatingRound" background-color="orange lighten-3" color="orange"
                                readonly hover ></v-rating>
                            <div class="make-bold" style="margin-left: 10px;">{{book.averageRating}} out of 5 stars</div>
                        </div>
                        <div style="padding: 7px;">
                            <div class="review-percent" >
                                <div style="margin-right: 14px; font-size: 14px;">5 star</div>
                                <v-progress-linear style="width: 60%;" color="light-blue" :value="(book.fiveStar / book.reviewCount) * 100" 
                                    height="10" striped ></v-progress-linear>
                                <div style="font-size: 14px; margin-left: 7px;">({{book.fiveStar}})</div>
                                <div style="margin-left: 7px; font-size: 14px;" >{{calculateProperRating(book.fiveStar, book.reviewCount) * 100}}%</div>
                            </div>
                        
                            <div class="review-percent">
                                <div style="margin-right: 14px; font-size: 14px;">4 star</div>
                                <v-progress-linear style="width: 60%;" color="light-green darken-4" :value="(book.fourStar / book.reviewCount) * 100"
                                    height="10" striped ></v-progress-linear>
                                <div style="font-size: 14px; margin-left: 7px;">({{book.fourStar}})</div>
                                <div style="margin-left: 7px; font-size: 14px;">{{calculateProperRating(book.fourStar, book.reviewCount) * 100}}%</div>
                            </div>
                            
                            <div class="review-percent">
                                <div style="margin-right: 14px; font-size: 14px;">3 star</div>
                                <v-progress-linear style="width: 60%;" :value="(book.threeStar / book.reviewCount) * 100" 
                                    height="10" striped color="purple" ></v-progress-linear>
                                <div style="margin-left: 7px; font-size: 14px;">({{book.threeStar}})</div>
                                <div style="margin-left: 7px; font-size: 14px;">{{calculateProperRating(book.threeStar, book.reviewCount) * 100}}%</div>
                            </div>
                            
                            <div class="review-percent">
                                <div style="margin-right: 14px; font-size: 14px;">2 star</div>
                                <v-progress-linear style="width: 60%;" :value="(book.twoStar / book.reviewCount) * 100" 
                                    height="10" striped color="lime" ></v-progress-linear>
                                <div style="margin-left: 7px; font-size: 14px;">({{book.twoStar}})</div>
                                <div style="margin-left: 7px; font-size: 14px;">{{calculateProperRating(book.twoStar, book.reviewCount) * 100}}%</div>
                            </div>
                            
                            <div class="review-percent">
                                <div style="margin-right: 14px; font-size: 14px;">1 star</div>
                                <v-progress-linear style="width: 60%;" :value="(book.oneStar / book.reviewCount) * 100" 
                                    height="10" striped color="deep-orange" ></v-progress-linear>
                                <div style="margin-left: 7px; font-size: 14px;">({{book.oneStar}})</div>
                                <div style="margin-left: 7px; font-size: 14px;">{{calculateProperRating(book.oneStar, book.reviewCount) * 100}}%</div>
                            </div>                    
                        </div>

                        <!--div style="display: flex; justify-content: center;" >
                            <v-btn outlined color="cyan" @click.native="$router.push('/')" id="info-button">
                                <v-img class="button-icon" :src="reviewIcon" ></v-img>
                                <div>SEE ALL REVIEWS</div>
                            </v-btn>
                        </div-->
                    </v-card>
                </div>
                <v-card style="padding: 14px; margin: 14px 0px;">
                    <div style="margin-bottom: 14px;">
                        <div class="make-bold" style="font-size: 22px;" >All Reviews</div>
                        <v-divider></v-divider>
                    </div>
                    <div>
                        <v-alert outlined dense text color="blue-grey lighten-3" style="margin: 0px;" 
                                v-if="!!reviews.items && reviews.length === 0" >
                            <div style="display: flex; align-items: center; justify-content: center; flex-direction: column;">
                                <img :src="reviewIcon" style="width: 120px; height: 120px; margin-bottom: 14px;" />
                                <div style="color: black; font-size: 25px;" class="make-bold">
                                    No Reviews
                                </div>
                                <div style="color: black;">
                                    Be the first to review
                                </div>
                            </div>
                        </v-alert>

                        <div v-else>
                            <ReviewList :reviews="reviews" />
                        </div>
                    </div>
                </v-card>
            </div>
        </div>
    </div>
</template>

<script>
import moment from "moment"
import axios from "axios"

import UpdateBookStatus from "./BookActions/UpdateBookStatus"
import UpdateBookQuantity from "./BookActions/UpdateBookQuantity"
//import CreateReview from "./Review/CreateReview"
import ReviewList from "./Review/ReviewList"
import ImageSlider from "./ImageSlider"
import CartItem from "../../models/CartItem"
import Book from "../../models/Book"
import FullPageLoader from "../UI/FullPageLoader"
import PageNotFound from "../InfoPages/PageNotFound"

import emptyImage from "../../static/Images/emptyImage.png"
import viewBookOwnerIcon from "../../static/Icons/BookDisplayIcons/viewBookOwnerIcon.svg"

import sellingPriceIcon from "../../static/Icons/BookDisplayIcons/sellingPrice.svg"
import mrpIcon from "../../static/Icons/BookDisplayIcons/mrp.svg"
import authorIcon from "../../static/Icons/BookDisplayIcons/author.svg"
import publisherIcon from "../../static/Icons/BookDisplayIcons/publisher.svg"
import stocksLeftIcon from "../../static/Icons/BookDisplayIcons/stocksLeft.svg"
import yearIcon from "../../static/Icons/BookDisplayIcons/year.svg"
import dimensionsIcon from "../../static/Icons/BookDisplayIcons/dimensions.svg"
import weightIcon from "../../static/Icons/BookDisplayIcons/weight.svg"
import paperQualityIcon from "../../static/Icons/BookDisplayIcons/paperQuality.svg"
import noOfPagesIcon from "../../static/Icons/BookDisplayIcons/noOfPages.svg"
import conditionIcon from "../../static/Icons/BookDisplayIcons/condition.svg"
import languageIcon from "../../static/Icons/BookDisplayIcons/language.svg"
import deliveryDateIcon from "../../static/Icons/BookDisplayIcons/deliveryDate.svg"
import countryIcon from "../../static/Icons/BookDisplayIcons/country2.svg"

import reviewIcon from "../../static/Icons/BookDisplayIcons/review2.svg"
import cart1Icon from "../../static/Icons/BookDisplayIcons/cart1.svg"
import cart2Icon from "../../static/Icons/BookDisplayIcons/cart2.svg"
import inStockIcon from "../../static/Icons/BookDisplayIcons/inOutStock2.svg"
import outOfStockIcon from "../../static/Icons/BookDisplayIcons/outOfStock.svg"
import updateStockIcon from "../../static/Icons/BookDisplayIcons/updateStock.svg"
import hideIcon from "../../static/Icons/BookDisplayIcons/hideBook.svg"
import addReviewIcon from "../../static/Icons/BookDisplayIcons/addReview.svg"

import editBookIcon from "../../static/Icons/BookDisplayIcons/editBook.svg"
import deleteBookIcon from "../../static/Icons/BookDisplayIcons/deleteBook2.svg"
import AWS from 'aws-sdk'
require("dotenv").config()
//import { API, graphqlOperation } from 'aws-amplify'
//import {getBook as GetBook} from "../../graphql/queries"

export default {
    name: "BookDisplay",
    components: {UpdateBookQuantity, UpdateBookStatus, ImageSlider, 
        ReviewList, FullPageLoader, PageNotFound},
    props: [],
    data() {
        return {
            s3Bucket: process.env.VUE_APP_BUCKET_NAME,
            region: process.env.VUE_APP_BUCKET_REGION,
            myBucket: new AWS.S3({
                params: { Bucket: process.env.VUE_APP_BUCKET_NAME},
                signatureVersion: 'v4',
                region: process.env.VUE_APP_BUCKET_REGION
            }),
            emptyImage,
            bookId: this.$route.params.id,
            book: null,
            reviews: [],
            bookInfoContent: [],            
            loading: false,
            viewBookOwnerIcon,

            sellingPriceIcon,
            mrpIcon,
            authorIcon,
            publisherIcon,
            stocksLeftIcon,
            yearIcon,
            paperQualityIcon,
            noOfPagesIcon,
            dimensionsIcon,
            weightIcon,
            conditionIcon,
            languageIcon,
            countryIcon,
            updateStockIcon,
            hideIcon,

            reviewIcon,
            cart1Icon,
            cart2Icon,
            outOfStockIcon,
            inStockIcon,
            editBookIcon,
            deleteBookIcon,
            addReviewIcon
        }
    },
    methods: {
        alterState(state, obj){
            this[state] = obj
        },
        calculateProperRating(nume, deno){
            return (!!nume && !!deno) ? nume/deno : 0
        },
        getAverageRating(){
            const totalRating = ((this.book.oneStar * 1) + (this.book.twoStar * 2) + (this.book.threeStar * 3) 
                + (this.book.fourStar * 4) + (this.book.fiveStar * 5))         
            return this.book.reviewCount === 0 ? 0 : (totalRating / this.book.reviewCount).toFixed(1)
        },
        getAverageRatingRound(){
            const averageRating = this.getAverageRating()
            if(averageRating % 1 >= 5){
                return Math.trunc(averageRating) + 0.5
            } else if(averageRating % 1 < 5){
                return Math.trunc(averageRating)
            }
        },
        prepareBookFirstContent() {
            return [
                ["Price", "Rs. " + this.book.sellingPrice, sellingPriceIcon],
                ["Max Retail Price", "Rs. " + this.book.price, mrpIcon],
                ["Author", this.book.author, authorIcon],
                ["Publisher", this.book.publisher, publisherIcon],
                ["Stocks Left", this.book.stocksLeft, stocksLeftIcon],
                ["Delivery By", this.formatDeliveryTime(this.book.deliveryTime), deliveryDateIcon],
            ]
        },
        prepareBookSecondContent() {
            return [
                ["Country of Origin", this.book.countryOfOrigin, countryIcon],
                ["Language", this.book.language, languageIcon],
                ["Book Type", this.book.bookType, paperQualityIcon],
                ["No. of Pages", this.book.numberOfPages, noOfPagesIcon],
                ["Year", this.book.year, yearIcon],
                ["Dimensions", this.book.dimensions, dimensionsIcon],
                ["Weight", this.book.weight + " g", weightIcon],
                ["Condition", this.book.condition, conditionIcon],
            ]
        },
        formatDate(){
            return moment(new Date()).format("Do MMM YYYY")
        },
        formatDeliveryTime(deliveryTime){
            return moment(new Date()).add(deliveryTime,'d').format("Do MMM YYYY")
        },
        async getPresignedUrls(image){
            //const s3 = new AWS.S3()
            return new Promise((resolve,reject) => {
                const myBucket = this.s3Bucket
                const myKey = image
                const signedUrlExpireSeconds = 60 * 5
                const params = {
                    Bucket: myBucket,
                    Key: myKey,
                    Expires: signedUrlExpireSeconds
                }
                this.myBucket.getSignedUrl('getObject', params, (err, url) => {
                    if (err) {
                        console.log(err, "ERROR GEN PRESIGNED URLS")
                        reject(err)
                    }
                    resolve(url);
                });
            })
        },
        async setBookState(book){
            const imagesList = []
            if(book.images){
                for (let image of book.images) {
                    const signedUrl = await this.getPresignedUrls(image)
                    imagesList.push(signedUrl)
                }   
            }
            const newBook = new Book(                
                book.title,
                book.price,
                book.selling_price,
                book.category,
                book.stocks_left > 0,
                book.description,
                book.dimensions,
                book.number_of_pages,
                book.book_type,
                book.sold,
                book.author,
                book.year,
                book.weight,
                book.condition,
                book.publisher,
                book.stocks_left,
                book.delivery_time,
                book.country_of_origin,
                book.language,
                imagesList[0],
                imagesList,
                book.status,
                book.created_at,
                book.updated_at,
                book._id,
                book.profile,
                book.review_count,
                book.five_star,
                book.four_star,
                book.three_star,
                book.two_star,
                book.one_star
            )
            this.book = newBook
            this.loading = false
        },
        isBookInCart(){
            const isBook = this.$store.state.cart.findIndex(item => {
                return item.book.id === this.bookId
            }) === -1 ? false : true
            return isBook
        },
        addItemToCart(){
            this.$store.dispatch("cart/addItem", new CartItem(this.book, 1, this.book.sellingPrice))
        },
        isLoggedInUserBookOwner(){
            return this.book.profile === this.$store.getters['auth/getUserProfile'].id
        }
    },
    created(){
        this.loading = true
        axios.get(`/book/${this.$route.params.id}`, {}, {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                }
        }).then(res => {
            console.log(res)
            this.setBookState(res.data)
        }).catch(err => {
            this.loading = false
            console.log(err, err.response)
        })

        axios.get(`/review/getAllByBook/${this.$route.params.id}`, {}, {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                }
        }).then(res => {
            this.reviews = res.data ? res.data : []
            //this.loading = false
            console.log(res, "REVIEWS DATA")
            
        }).catch(err => {
            //this.loading = false
            console.log(err, err.response)
        })
        
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
.make-bold{
    font-weight: 700;
}

.main-content{
    display: flex;
}
.book-image-container{
    display: flex;
    justify-content: center;
    padding: 14px;
}
.book-image{
    width: 100%;
    display: inline-flex;
    max-height: 250px;
    max-width: 470px;
}
.first-content{
    margin: 14px 0px;
}
.book-property{
    padding: 14px;
    display: flex;
    align-items: center;
    width: 50%;
    border-right: 1px solid rgba(34,36,38,.15);
    border-bottom: 1px solid rgba(34,36,38,.15);
    font-size: 14px;
}
.second-content{
    display: flex;
    align-items: stretch;
    justify-content: stretch;
}
.review-card{
    padding: 14px;
}
.review-percent{
    display: flex;
    align-items: center;
    margin-bottom: 12px;
}
#info-button{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 10px 30px;
    font-size: 14px;
    height: 45px;
    color: white;
    /*border-radius: 0px;
    background-color: #54c8ff;
    color: white;*/
}
#action-button{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    height: 45px;
    color: white;
}
.button-icon{
    width: 25px;
    height: 25px;
    margin-right: 10px;
}

.book-property:nth-child(4n + 4){
    border-right: none;
}

.book-propertys{
    border-right: 1px solid rgba(34,36,38,.15);
    border-bottom: 1px solid rgba(34,36,38,.15);
}
.book-propertys:nth-child(3n + 3){
    border-right: 1px solid rgba(34,36,38,.15);
    border-bottom: 1px solid rgba(34,36,38,.15);
}
.book-property:nth-child(2n + 2){
    border-bottom: 1px solid rgba(34,36,38,.15);
    border-right: none;
}
.book-property:nth-last-child(-n+2) {
    border-bottom: none;
}


/*ABOVE 990 PX*/
@media only screen and (min-width: 990px){

}

/*BELOW 990 PX*/
@media only screen and (max-width: 990px){

}

/*ABOVE 767 PX*/
@media only screen and (min-width: 767px){
    .book-image-container{
        width: 40%;
    }
    .first-content{
        width: 60%;
    }
    .details-card{
        width: 50%;
        margin-right: 7px;
    }
    .review-card{
        width: 50%;
        margin-left: 7px;
    }
}

/*BELOW 767 PX*/
@media only screen and (max-width: 767px){
    .main-content{
        flex-direction: column;
    }
    .book-image-container{
        width: 100%;
    }
    .first-content{
        width: 100%;
    }
    .details-card{
        width: 100%;
        margin-bottom: 7px;
    }
    .review-card{
        width: 100%;
        margin-top: 7px;
    }
    .second-content{
        flex-direction: column;
    }
}

/*ABOVE 510 PX*/
@media only screen and (min-width: 510px){
    #action-button{
        padding: 10px 30px;
        margin: 12px;
    }
    #info-button{
        padding: 10px 30px;
    }
}


/*BELOW 510 PX*/
@media only screen and (max-width: 510px){
    .book-property{
        padding: 7px;
    }
    #action-button{
        padding: 7px 10px;
        margin-right: 15px !important;   
    }
    #info-button{
        padding: 7px 10px;
    }
    .button-icon{
        margin-right: 7px;
    }
}

</style>