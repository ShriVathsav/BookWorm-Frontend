<template>
    
</template>

<script>
import addReviewIcon from "../../../static/Icons/BookDisplayIcons/addReview.svg"
import ImageUploader from "../../UI/ImageUploader"

export default {
    name: "AddReview",
    components: {ImageUploader},
    props: ["review", "submitHandler"],
    data() {
        return {
            addReviewIcon,
            rating: this.review.stars || 5,
            content: this.review.content || "",
            images: []
        }
    },
    methods: {
        submitReview(){
            const params = {
                content: this.content,
                stars: this.rating,
                book: this.$route.params.id,
                profile: this.$store.getters['auth/getUserProfile'].id
            }
            this.submitHandler(params)
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