<template>
    <div class="cart-item-container">
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
                            <div class="font-weight-bold" style="margin-bottom: 3px; font-size: 15px;">{{order.status === "DELIVERED" ? "Delivered" : "Delivery"}} On</div>
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
                <div style="display: flex; align-items: center; width: 100%;" class="pa-4 pb-6">
                    <div style="width: 50%; text-align: center;">
                        <span class="order-links" @click="toggleOrderStatusShow" v-if="order.status !== 'DELIVERED'" >
                            Change Order Status</span>
                    </div>
                    <div style="width: 50%;">
                        <DeliveryDetails :order="order" />
                    </div>
                </div>
                <div v-if="orderStatusChangeShow" class="px-4 pb-4" style="display: flex; align-items: center; justify-content: center;">
                    <div style="width: 70%">
                        <v-select :items="orderStatusList" filled outlined label="Status of Order" placeholder="Order Status"
                            v-model="orderStatus" dense hide-details class="pr-3" color="purple" 
                            item-color="purple" background-color="purple lighten-5">
                        </v-select>
                    </div>
                    <div style="width: 30%">
                        <v-btn depressed color="cyan lighten-1" style="width: 100%; color: white;" :loading="statusUpdateLoading"
                            @click="changeOrderStatus" >UPDATE</v-btn>
                    </div>
                </div>
                <div style="text-align: center;" class="pb-4">
                    <v-chip color="deep-purple accent-4 font-weight-bold"
                            label text-color="white" style="height: 45px; margin-right: 14px;" >
                        <v-img class="button-icon" :src="getOrderStatus()" ></v-img>
                        <div class="make-bold">{{this.order.status}}</div>
                    </v-chip>
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
import updateStockIcon from "../../static/Icons/BookDisplayIcons/updateStock.svg"
import hideIcon from "../../static/Icons/BookDisplayIcons/hideBook.svg"
import quantityIcon from "../../static/Icons/CartIcons/quantity1.svg"
import grossAmountIcon from "../../static/Icons/CartIcons/grossAmount.svg"
import ordersWaitingInfo from "../../static/Icons/ProfileIcons/ordersWaitingInfo.svg"
import yourOrdersInfo from "../../static/Icons/ProfileIcons/yourOrdersInfo.svg"
import inProgressStatus from "../../static/Icons/ProfileIcons/OrderIcons/inProgressStatus.svg"
import inTransitStatus from "../../static/Icons/ProfileIcons/OrderIcons/inTransitStatus.svg"
import deliveredStatus from "../../static/Icons/ProfileIcons/OrderIcons/deliveredStatus.svg"
//import collectedStatus from "../../static/Icons/ProfileIcons/OrderIcons/collectedStatus.svg"
import deliveryTime from "../../static/Icons/ProfileIcons/OrderIcons/deliveryTime.svg"
import orderedOn from "../../static/Icons/ProfileIcons/OrderIcons/orderedOnIcon.svg"

import emptyImage from "../../static/Images/emptyImage.png"
import BookCard from "../Book/BookCard"
import DeliveryDetails from "./DeliveryDetails"
import moment from 'moment'

import axios from "axios"

export default {
    name: "OrdersWaiting",
    components: {BookCard, DeliveryDetails},
    props: ["order"],
    data(){
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
            ordersWaitingInfo,
            yourOrdersInfo,
            inProgressStatus,
            inTransitStatus,
            deliveredStatus,
            //collectedStatus,
            deliveryTime,
            orderedOn,

            emptyImage,

            orderStatusChangeShow: false,
            orderStatus: this.order.status,
            orderStatusList: ["IN PROGRESS", "IN TRANSIT", "DELIVERED"],
            statusUpdateLoading: false
        }
    },
    methods: {
        formatDate(date){            
            return moment(new Date(date)).format("Do MMM YYYY")
        },
        getOrderStatus(){
            if(this.order.status === "IN PROGRESS"){
                return inProgressStatus
            } else if(this.order.status === "IN TRANSIT"){
                return inTransitStatus
            } else if(this.order.status === "DELIVERED"){
                return deliveredStatus
            }
        },
        toggleOrderStatusShow(){
            if(this.orderStatusChangeShow === true){
                this.orderStatus = this.order.status
            }
            this.orderStatusChangeShow = !this.orderStatusChangeShow
        },
        changeOrderStatus(){
            this.statusUpdateLoading = true
            const params = {
                _id: this.order._id,
                status: this.orderStatus,
                delivery_date: this.orderStatus === "DELIVERED" ? new Date().toISOString() : this.order.deliverydate
            }
            axios.put(`/order/${this.order._id}/updateStatus`, params,
            {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                }
            }).then(res => {
                console.log(res)
                this.order.status = this.orderStatus
                this.order.deliverydate = new Date().toISOString()
                this.statusUpdateLoading = false
            }).catch(err => {
                console.log(err.response)
                this.statusUpdateLoading = false
            })
        }
    },
    created(){

    }
}
</script>

<style scoped>
.order-links{
    font-size: 14px;
    color: gray;
    cursor: pointer;
}
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