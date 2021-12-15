<template>
    <div>
        <div class="font-weight-bold mb-3" style="font-size: 18px;">
            {{reviews.length}} people have reviewed this product
        </div>
        <div class="review-list-container">
            <div v-for="review in reviews" :key="review._id" class="review-outer" >
                <Review :review="review" />
            </div>        
        </div>
    </div>
</template>

<script>
import Review from "./Review"

export default {
    name: "ReviewList",
    components: {Review},
    props: ["reviews"],
    data() {
        return {

        }
    },
    methods: {

    },
    updated(){
        console.log(this.reviews, "REVIEWS FROM REVIEW LIST")
    }
}
</script>

<style scoped>
.review-list-container{
    display: flex;
    flex-flow: row wrap;

}
.review-outer{

}

/*ABOVE 990 PX*/
@media only screen and (min-width: 990px){

}

/*BELOW 990 PX*/
@media only screen and (max-width: 990px){

}

/*ABOVE 767 PX*/
@media only screen and (min-width: 767px){
    .review-outer{
        width: 50%;
    }
}

/*BELOW 767 PX*/
@media only screen and (max-width: 767px){
    .review-outer{
        width: 100%;
    }
}

/*ABOVE 510 PX*/
@media only screen and (min-width: 510px){

}


/*BELOW 510 PX*/
@media only screen and (max-width: 510px){

}
</style>