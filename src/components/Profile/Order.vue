<template>
    <div>
        <div class="font-weight-bold d-flex justify-center align-center flex-column" >
            <div style="font-size: 14px;">FILTER BY ORDER STATUS</div>
            <v-chip-group v-model="orderFilters" @change="valueChanged"
                    column multiple active-class="cyan white--text text--accent-4" >
                <v-chip filter :disabled="loading" v-for="orderStatus in orderStatusList"
                        :key="orderStatus" :value="orderStatus" >
                    {{orderStatus}}
                </v-chip>
            </v-chip-group>
        </div>
        <div v-if="loading">
            <Loader />
        </div>
        <div v-else>
            <div v-if="orders.length === 0">
                <InfoPageButton :icon="yourOrdersInfo" message="It seems you have not bought any books" />
            </div>
            <div style="" v-else >
                <div class="font-weight-bold my-4" style="text-align: center; font-size: 20px;">
                    {{orders.length}} items ordered by you
                </div>
                <div class="cart-item-container" v-for="order in orders" :key="order.id" >
                    <div class="book-card-outer">
                        <BookCard :book="order.book" />
                    </div>
                    <div style="width: 100%; max-width: 400px;" class="mb-4">
                        <v-card style="width: 100%;">
                            <div style="font-weight: bold; text-align: center; padding-top: 12px;">Order Details</div>
                            <div style="display: flex; align-items: center; justify-content: center; width: 100%;">
                                <div class="cart-metadata">
                                    <div class="cart-metadata-2">
                                        <img :src="orderedOn" style="width: 35px; height: 35px; margin-bottom: 6px;" />
                                        <div class="font-weight-bold" style="margin-bottom: 3px; font-size: 15px;">Ordered On</div>                                
                                    </div>
                                    <div>{{formatDate(order.created_at)}}</div>
                                </div>
                                <div class="cart-metadata">
                                    <div class="cart-metadata-2">
                                        <img :src="deliveryTime" style="width: 35px; height: 35px; margin-bottom: 6px;" />
                                        <div class="font-weight-bold" style="margin-bottom: 3px; font-size: 15px;">Delivery On</div>                                
                                    </div>
                                    <div>{{formatDate(order.delivery_date)}}</div>
                                </div>
                            </div>
                            <div style="display: flex; align-items: center; justify-content: center; width: 100%;">
                                <div class="cart-metadata">
                                    <div class="cart-metadata-2">
                                        <img :src="quantityIcon" style="width: 35px; height: 35px; margin-bottom: 6px;" />
                                        <div class="font-weight-bold" style="margin-bottom: 3px; font-size: 15px;">Quantity</div>                                
                                    </div>
                                    <div>{{order.quantity}}</div>
                                </div>
                                <div class="cart-metadata">
                                    <div class="cart-metadata-2">
                                        <img :src="grossAmountIcon" style="width: 35px; height: 35px; margin-bottom: 6px;" />
                                        <div class="font-weight-bold" style="margin-bottom: 3px; font-size: 15px;">Total Amount</div>                                
                                    </div>
                                    <div>Rs. {{order.amount}}</div>
                                </div>
                            </div>
                            <div style="text-align: center;" class="pb-3">
                                <v-chip color="deep-purple accent-4 font-weight-bold"
                                        label text-color="white" style="height: 45px; margin-right: 14px;" >
                                    <v-img class="button-icon" :src="getOrderStatus(order.status)" ></v-img>
                                    <div class="make-bold">{{order.status}}</div>
                                </v-chip>
                            </div>
                            <div style="display: flex; justify-content: center;" class="pt-4 pb-6"
                                    v-if="order.status === 'DELIVERED'" >
                                <div class="my-3">
                                    <CreateReview :book="order.book" />
                                </div>
                            </div>
                        </v-card>
                    </div>
                </div>
            </div>
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
import updateStockIcon from "../../static/Icons/BookDisplayIcons/updateStock.svg"
import hideIcon from "../../static/Icons/BookDisplayIcons/hideBook.svg"
import quantityIcon from "../../static/Icons/CartIcons/quantity1.svg"
import grossAmountIcon from "../../static/Icons/CartIcons/grossAmount.svg"
import yourOrdersInfo from "../../static/Icons/ProfileIcons/yourOrdersInfo.svg"
import inProgressStatus from "../../static/Icons/ProfileIcons/OrderIcons/inProgressStatus.svg"
import inTransitStatus from "../../static/Icons/ProfileIcons/OrderIcons/inTransitStatus.svg"
import deliveredStatus from "../../static/Icons/ProfileIcons/OrderIcons/deliveredStatus.svg"
import collectedStatus from "../../static/Icons/ProfileIcons/OrderIcons/collectedStatus.svg"
import deliveryTime from "../../static/Icons/ProfileIcons/OrderIcons/deliveryTime.svg"
import orderedOn from "../../static/Icons/ProfileIcons/OrderIcons/orderedOnIcon.svg"

import emptyImage from "../../static/Images/emptyImage.png"
import BookCard from "../Book/BookCard"
import InfoPageButton from "../InfoPages/InfoPageButton"
import Loader from "../UI/Loader"
import moment from 'moment'

import axios from "axios"
import CreateReview from "../Book/Review/CreateReview"

export default {
    name: "Order",
    components: {BookCard, InfoPageButton, Loader, CreateReview},
    //props: ["orders"],
    data() {
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
            updateStockIcon,
            hideIcon,
            quantityIcon,
            grossAmountIcon,
            yourOrdersInfo,
            inProgressStatus,
            inTransitStatus,
            deliveredStatus,
            collectedStatus,
            deliveryTime,
            orderedOn,

            emptyImage,            
            orderFilters: ["IN PROGRESS", "IN TRANSIT", "DELIVERED"],
            filterLoading: false,
            orders: [],
            loading: false,
            orderStatusList: ["IN PROGRESS", "IN TRANSIT", "DELIVERED"],
        }
    },
    methods: {
        formatDate(date){
            return moment(new Date(date)).format("Do MMM YYYY")
        },
        getOrderStatus(status){
            if(status === "IN PROGRESS"){
                return inProgressStatus
            } else if(status === "IN TRANSIT"){
                return inTransitStatus
            } else if(status === "DELIVERED"){
                return deliveredStatus
            }
        },
        valueChanged() {
            this.loading = true
            this.getOrders()
        },
        getOrders() {
            axios.get(`/order/getAllByProfile/${this.$route.params.id}`,
                { params: { 
                    statusValues: this.orderFilters.length === 0 ? this.orderStatusList.toString() : this.orderFilters.toString(),
                }}
            ).then(res => {
                console.log(res, "ORDERS")
                this.orders = res.data ? res.data : []
                this.filterLoading = false
                this.loading = false
            }).catch(err => {
                this.filterLoading = false
                this.loading = false
                console.log(err.response)
            })
        }
    },
    created(){
        this.loading = true
        this.getOrders()       
    }
}
</script>

<style scoped>
.cart-item-container{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
}
.cart-metadata{
    padding: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    font-size: 14px;
    color: black;
    width: 50%;
}
.cart-metadata-2{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    font-size: 14px;
    color: black;
}
.order{
    border-bottom: 1px solid gray;
}
.order:last-of-type{
    border-bottom: none;
}
.order-buttons{
    display: flex;
    flex-direction: row;
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
.book-card-outer{
    padding: 14px 14px 14px 0px;
    width: 100%;
}
#info-button{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 10px 30px;
    font-size: 15px;
    height: 55px;
    color: white;
    /*border-radius: 0px;
    background-color: #54c8ff;*/
}
.button-icon{
    width: 35px;
    height: 35px;
    margin-right: 13px;
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
    .cart-item-container{
        flex-direction: column;
    }
    .book-card-outer{
        padding: 14px 0px;
    }
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