<template>
    <div>
        <div class="book-card-outer">
            <BookCard :book="cartItem.book" />
        </div>
        <div style="width: 100%; max-width: 400px;" class="mb-4">
            <v-card style="width: 100%;">
                <div style="display: flex; align-items: center; justify-content: center; width: 100%;">
                    <div class="cart-metadata" >
                        <div class="cart-metadata-2" >
                            <img :src="quantityIcon" style="width: 35px; height: 35px; margin-bottom: 6px;" />
                            <div class="font-weight-bold" style="margin-bottom: 3px; font-size: 15px;">Quantity</div>                                
                        </div>
                        <div class="order-buttons mt-2" >
                            <img class="increment-button" :src="plusIcon" @click="increaseQuantity" />
                            <div class="mx-4">{{cartItem.quantity}}</div>
                            <img class="increment-button" :src="minusIcon" @click="decreaseQuantity" />
                        </div>
                    </div>
                    <div class="cart-metadata">
                        <div class="cart-metadata-2">
                            <img :src="grossAmountIcon" style="width: 35px; height: 35px; margin-bottom: 6px;" />
                            <div class="font-weight-bold" style="margin-bottom: 3px; font-size: 15px;">Amount</div>                                
                        </div>
                        <div>{{cartItem.quantity * cartItem.book.sellingPrice}}</div>
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

import BookCard from "../Book/BookCard"
//import axios from "axios"

export default {
    name: "CartItem",
    components: {BookCard},
    props: ["cartItem", "index"],
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

            cartItems: this.$store.state.cart
        }
    },
    methods: {
        increaseQuantity(){
            this.$store.dispatch("cart/increaseItemQuantity", {index: this.index, maxStocks: this.cartItem.book.stocksLeft})
        },
        decreaseQuantity(){
            if(this.cartItem.book.stocksLeft >= this.cartItem.quantity){
                this.$store.dispatch("cart/decreaseItemQuantity", this.index)
            }
        }
    },
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