<template>
    <div>
        <v-dialog v-model="dialog" persistent width="600px" scrollable >
            <template v-slot:activator="{ on, attrs }">  
                <v-btn  v-bind="attrs" v-on="on" style="height: 30px; padding: 7px 10px;" class="mr-4" 
                        color="light-green" >
                    <img class="mr-2" :src="editReviewIcon" style="width: 20px; height: 20px;" />
                    <div style="color: white;" >EDIT</div>
                </v-btn>  
            </template>
            <v-card>
                <v-card-title class="headline" >
                    <div style="display: flex; align-items: center; justify-content: center;">
                        <v-img :src="addReviewIcon" class="button-icon" ></v-img>
                        <div>Edit Review</div>
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
                    <v-btn color="red darken-1" text @click="dialog = false" :disabled="editReviewLoading" >
                        DISCARD
                    </v-btn>
                    <v-btn color="purple" text @click="editReview" :loading="editReviewLoading" >
                        EDIT REVIEW
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
import axios from "axios"
import editReviewIcon from "../../../static/Icons/BookDisplayIcons/editReviewIcon.svg"
import addReviewIcon from "../../../static/Icons/BookDisplayIcons/addReview.svg"

export default {
    name: "EditReview",
    components: {},
    props: ["review"],
    data() {
        return {
            addReviewIcon,
            editReviewIcon,
            editReviewLoading: false,
            dialog: false,
            stars: this.review.stars || 5,
            content: this.review.content || "",
        }
    },
    methods: {
        editReview(){
            const params = {
                content: this.content,
                stars: this.stars,
                book: this.$route.params.id,
                profile: this.$store.getters['auth/getUserProfile'].id
            }
            this.editReviewLoading = true
            axios.put(`/review/${this.review._id}`, JSON.stringify(params),
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
    }
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