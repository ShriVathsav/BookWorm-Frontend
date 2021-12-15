<template>
    <div>
        <div style="text-align: center;" >
            <div style="font-size: 29px;" class="font-weight-bold mb-1" >
                <img :src="cart2Icon" style="width: 70px; height: 70px; margin-right: 7px;" />
                <div>{{$store.getters['auth/getUserProfile'].username}}`s Cart</div>
            </div>
            <div style="color: gray;">
                You have {{$store.state.cart.length}} items in your cart
            </div>
        </div>
        
        <div class="cart-item-container" v-for="(cartItem, index) in $store.state.cart" :key="cartItem.book._id" >
            <CartItem :cartItem="cartItem" :index="index" />
        </div>

        <div class="mb-4" v-if="$store.state.cart.length === 0">
            <InfoPageButton :icon="cart1Icon" message="Your cart is empty. Please add items to cart." />
        </div>
        <div style="display: flex; align-items: center;  flex-direction: row-reverse; width: 100%;">
            <v-card class="pa-5" style="width: 100%; max-width: 400px;">
                <div style="display: flex; justify-content: center; align-items: center; flex-direction: column;">
                    <div style="display: flex; align-items: center;" class="mb-4">
                        <img :src="grandTotalIcon" style="width: 35px; height: 35px;" />
                        <div class="font-weight-bold mx-4">Grand Total</div>
                        <div>Rs. {{$store.getters['cart/grandTotal']}}</div>
                    </div>
                    <div style="display: flex; align-items: center;">
                        <!--v-btn outlined color="cyan" @click="createOrder" id="info-button" 
                                class="my-2" style="float: right;" :disabled="$store.getters['cart/grandTotal'] <= 0" >
                            <v-img class="button-icon" :src="proceedToPayIcon" ></v-img>
                            <div>PROCEED TO PAY</div>
                        </v-btn-->
                        <Payment />
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
import quantityIcon from "../../static/Icons/CartIcons/quantity1.svg"
import grossAmountIcon from "../../static/Icons/CartIcons/grossAmount.svg"
import grandTotalIcon from "../../static/Icons/CartIcons/grandTotal.svg"
import proceedToPayIcon from "../../static/Icons/CartIcons/proceedToPay.svg"
import cart1Icon from "../../static/Icons/BookDisplayIcons/cart1.svg"
import cart2Icon from "../../static/Icons/BookDisplayIcons/cart2.svg"

import emptyImage from "../../static/Images/emptyImage.png"

import CartItem from "./CartItem"
//import PayButton from "./PayButton"
import Payment from "./Payment"
import InfoPageButton from "../InfoPages/InfoPageButton"
import Order from "../../models/Order"
import axios from "axios"

export default {
    name: "Cart",
    components: {InfoPageButton, CartItem, Payment},
    props: [],
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
            quantityIcon,
            grossAmountIcon,
            cart1Icon,
            cart2Icon,
            grandTotalIcon,
            proceedToPayIcon,

            emptyImage,
        }
    },
    methods: {
        createOrder(){
            const order = new Order(
                this.$store.state.cart[0].book.deliveryDate, 
                this.$store.state.cart[0].book.profile,
                "6056398392d4647c1bc056f7", 
                this.$store.state.cart[0].book.id,
                this.$store.state.cart[0].quantity, 
                this.$store.state.cart[0].totalAmount
            )

            console.log(order, "PRINTING ORDER PAYMENT")
            axios.post("http://localhost:8080/order", order,
            {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                }
            }).then(res => {
                console.log(res)
            }).catch(err => {
                console.log(err.response)
            })
        }
    },
    updated(){
        console.log(this.$store.state.cart, "CART UPDATED")
    },
    created(){
        console.log(this.$store.state.cart, "CART")
        /*
        axios.get("http://localhost:8080/books").then(res => {
            console.log(res)
            this.books = res.data
        }).catch(err => {
            console.log(err.response)
        })*/
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