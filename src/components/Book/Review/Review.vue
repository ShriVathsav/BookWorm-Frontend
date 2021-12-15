<template>
    <div>
        <div class="review-container pa-3 ma-3">
            <div class="py-1" style="display: flex; align-items: center;">
                <img :src="unknownUser2" style="width: 35px; height: 35px; border: 50%;" class="mr-3" />
                <div class="font-weight-bold review-profile" style="font-size: 14px;"
                    @click="$router.push(`/profile/${review.profile._id}`)">{{review.profile.username}}</div>
            </div>
            <div >
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

export default {
    name: "Review",
    components: {},
    props: ["review"],
    data(){
        return {
            unknownUser2
        }
    },
    methods: {

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