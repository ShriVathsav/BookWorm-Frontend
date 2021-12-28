<template>
    <v-row justify="center">
        <v-dialog v-model="dialog" persistent width="600px" scrollable >
            <template v-slot:activator="{ on, attrs }">
                <v-btn outlined color="cyan" v-bind="attrs" v-on="on"
                        :disabled="isLoggedInUserBookOwner()" id="info-button" >
                    <v-img class="button-icon" :src="addReviewIcon" ></v-img>
                    <div>REVIEW THIS PRODUCT</div>
                </v-btn>
            </template>
            <v-card>
                <v-card-title class="headline" >
                    <div style="display: flex; align-items: center; justify-content: center;">
                        <v-img :src="addReviewIcon" class="button-icon" ></v-img>
                        <div>Add a Review</div>
                    </div>
                </v-card-title>
                
                <v-card-text style="padding: 0px 14px 24px;">
                    <div>
                        <div id="rating">
                            <v-rating v-model="stars" background-color="orange lighten-3" color="orange"
                                large hover ></v-rating>
                            <div class="font-weight-bold" style="margin-left: 10px; font-size: 16px;">{{stars}} out of 5 stars</div>
                        </div>
                        <v-textarea auto-grow outlined color="deep-purple" label="Write a Review"
                            rows="3" placeholder="Add your Review here" v-model="content" >
                        </v-textarea>
                        <!--div class="font-weight-bold mb-4" style="font-size: 19px; color: black;">
                            Add Image to Review (0)</div>
                        <div>
                            <ImageUploader />
                        </div-->
                    </div>
                </v-card-text>
                
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="red darken-1" text @click="dialog = false" :disabled="createReviewLoading" >
                        DISCARD
                    </v-btn>
                    <v-btn color="purple" text @click="createReview" :loading="createReviewLoading" >
                        SUBMIT REVIEW
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-row>
</template>

<script>
import addReviewIcon from "../../../static/Icons/BookDisplayIcons/addReview.svg"
import axios from "axios"

export default {
    name: "CreateReview",
    components: {},
    props: ["book"],
    data() {
        return {
            addReviewIcon,
            createReviewLoading: false,
            dialog: false,
            stars: 5,
            content: "",
        }
    },
    methods: {
        isLoggedInUserBookOwner(){
            return this.book.profile === this.$store.getters['auth/getUserProfile'].id
        },
        createReview(){
            console.log(this.book)
            const params = {
                content: this.content,
                stars: this.stars,
                book: this.book._id,
                profile: this.$route.params.id
            }
            this.createReviewLoading = true
            axios.post(`/review`, params,
            {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                }
            }).then(res => {
                console.log(res, "REVIEW POST RESPONSE")
                this.createReviewLoading = false
                this.dialog = false
            }).catch(err => {
                this.createReviewLoading = false
                console.log(err.response)
            })
        },
    },
}
</script>

<style scoped>
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
.button-icon{
    width: 25px;
    height: 25px;
    margin-right: 10px;
}
#rating{
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0px 0px 14px 0px;
}

/*ABOVE 990 PX*/
@media only screen and (min-width: 990px){

}

/*BELOW 990 PX*/
@media only screen and (max-width: 990px){

}

/*ABOVE 767 PX*/
@media only screen and (min-width: 767px){

}

/*BELOW 767 PX*/
@media only screen and (max-width: 767px){

}

/*ABOVE 510 PX*/
@media only screen and (min-width: 510px){
    #info-button{
        padding: 10px 30px;
    }
}

/*BELOW 510 PX*/
@media only screen and (max-width: 510px){
    .button-icon{
        margin-right: 7px;
    }
    #rating{
        flex-direction: column;
    }
}
</style>