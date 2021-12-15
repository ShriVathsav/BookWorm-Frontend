<template>
    <div>
        <div>
            <v-card class="pa-3">
                <div class="py-3 order">
                    <div style="display: flex; width: 100%; flex-flow: row wrap;">
                        <div class="order-image">
                            <img :src="emptyImage" class="order-image-main" />
                        </div>

                        <div class="order-buttons" >
                            <img class="mb-2 increment-button" :src="plusIcon" />
                            <div class="my-2">0</div>
                            <img class="mt-2 increment-button" :src="minusIcon" />
                        </div>

                        <div class="order-content" >
                            <div class="font-weight-bold mb-2" style="font-size: 19px; line-height: normal;">
                                Boom Title Boom Title Boom Title Boom Title Boom Title </div>
                            <div class="mb-2" style="font-size: 14px;" >
                                By Author
                            </div>
                            <div style="font-size: 17px; color: gray;">Rs. 254</div>

                            <v-chip color="deep-purple accent-4" outlined class="mt-2"
                                    label style="height: 55px;" >
                                <v-img class="button-icon" :src="deliveryIcon" ></v-img>
                                <div class="font-weight-bold">DELIVERY ON 26th June 2021</div>
                            </v-chip>
                        </div>
                    </div>
                </div>
            </v-card>
        </div>
    </div>
</template>

<script>
import unknownUser1 from "../../static/Icons/ProfileIcons/unknownUser1.svg"
import unknownUser2 from "../../static/Icons/ProfileIcons/unknownUser2.svg"
import yourOrders1 from "../../static/Icons/ProfileIcons/yourOrders1.svg"
import yourOrders2 from "../../static/Icons/ProfileIcons/yourOrders2.svg"
import booksPosted1 from "../../static/Icons/ProfileIcons/booksPosted1.svg"
import booksPosted2 from "../../static/Icons/ProfileIcons/booksPosted2.svg"
import plusIcon from "../../static/Icons/ProfileIcons/OrderIcons/plus.svg"
import minusIcon from "../../static/Icons/ProfileIcons/OrderIcons/minus.svg"
import deliveryIcon from "../../static/Icons/BookDisplayIcons/deliveryDate.svg"

import emptyImage from "../../static/Images/emptyImage.png"

export default {
    name: "Cart",
    components: {},
    props: [],
    data: () => {
        return {
            unknownUser1,
            unknownUser2,
            yourOrders1,
            yourOrders2,
            booksPosted1,
            booksPosted2,
            plusIcon,
            minusIcon,
            deliveryIcon,

            emptyImage,
        }
    },
    methods: {

    }
}
</script>

<style scoped>
.order{
    border-bottom: 1px solid gray;
}
.order:last-of-type{
    border-bottom: none;
}
.order-buttons{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 80px;
}
.order-content{

}
.order-image{
    width: 250px;
    display: flex;
    justify-content: center;
}
.button-icon{
    width: 30px;
    height: 30px;
    margin-right: 10px;
}
.increment-button{
    width: 35px;
    height: 35px;
    cursor: pointer;
}
.order-image-main{
    width: 100%;
    max-width: 250px;
    height: 150px;
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

}


/*BELOW 510 PX*/
@media only screen and (max-width: 510px){
    .order-buttons{
        width: 30%;
    }
    .order-content{
        width: 100%;
    }
    .order-image{
        width: 70%;
    }
}

</style>