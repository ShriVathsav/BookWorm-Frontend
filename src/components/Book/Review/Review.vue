<template>
    <div>
        <div class="review-container pa-3 ma-3">
            <div class="py-1" style="display: flex; align-items: center;">
                <img :src="unknownUser2" style="width: 35px; height: 35px; border: 50%;" class="mr-3" />
                <div class="font-weight-bold review-profile" style="font-size: 14px;"
                    @click="$router.push(`/profile/${review.profile._id}`)">{{review.profile.username}}</div>
            </div>
            <div style="padding: 8px; display: flex;" v-if="isLoggedInUserReviewOwner" >
                <EditReview :review="review" />
                <v-btn @click="deleteReview" style="height: 30px; padding: 7px 10px;" class="mr-4" 
                        color="red" >
                    <img class="mr-2" :src="deleteReviewIcon" style="width: 20px; height: 20px;" />
                    <div style="color: white;" >DELETE</div>
                </v-btn>
            </div>
            <div>
                <div style="display: flex; align-items: center; ">
                    <v-rating v-model="review.stars" background-color="orange lighten-3" color="orange" small
                        readonly hover ></v-rating>
                    <div style="margin-left: 10px; font-size: 15px;">{{review.stars}} out of 5</div>
                </div>
            </div>
            <div class="py-1">
                {{review.content}}
            </div>
            <div class="py-1">
                
            </div>
        </div>
    </div>
</template>

<script>
import unknownUser2 from "../../../static/Icons/ProfileIcons/unknownUser2.svg"
import deleteReviewIcon from "../../../static/Icons/BookDisplayIcons/deleteReview.svg"

import EditReview from "./EditReview"
import axios from "axios"

export default {
    name: "Review",
    components: {EditReview},
    props: ["review"],
    data(){
        return {
            unknownUser2,
            deleteReviewIcon,        
        }
    },
    methods: {
        deleteReview(){
            axios.delete(`/review/${this.review._id}`,
            {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                }
            }).then(res => {
                console.log(res, "REVIEW POST RESPONSE")
                this.editReviewLoading = false
                this.dialog = false
            }).catch(err => {
                this.editReviewLoading = false
                console.log(err.response)
            })
        },
        isLoggedInUserReviewOwner(){
            return this.review.profile === this.$store.getters['auth/getUserProfile'].id
        }
    },
    created(){
        console.log(this.review)
    },
    updated(){
        console.log(this.review)
    }
}
</script>

<style scoped>
.review-profile{
    cursor: pointer;
}
.review-container{
    background-color: white;
    border: 1px solid rgba(0, 0, 0, 0.12);
    border-radius: 5px;
}
</style>