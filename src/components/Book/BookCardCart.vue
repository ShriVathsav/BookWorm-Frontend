<template>
    <div>
        <v-card class="mx-auto book-card-cart" >
            <v-img height="250" max-width="374" :src="noBookImagesIcon" style="border-bottom: 1px solid rgba(0, 0, 0, 0.12); width: 374px;" ></v-img>
            <div class="book-card-content">
            <v-card-title>{{book.title}}</v-card-title>
            <v-card-text>
                <v-row align="center" class="mx-0" >
                    <v-rating :value="4.5" color="amber" dense half-increments readonly size="14"></v-rating>
                    <div class="grey--text ml-4">4.5 (413)</div>
                </v-row>
                <div class="mt-5">
                    <v-chip :color="book.inStock ? 'deep-purple accent-4' : 'brown'" 
                            label text-color="white" style="height: 35px; margin-right: 14px;" >
                        <v-img class="button-icon" :src="book.inStock ? inStockIcon : outOfStockIcon" ></v-img>
                        <div class="font-weight-bold">{{book.inStock ? "IN STOCK" : "OUT OF STOCK"}}</div>
                    </v-chip>
                </div>
                <div style="display: flex; align-items: center; justify-content: center;" class="mt-4">
                    <div class="cart-metadata" style="border: 1px solid rgba(0, 0, 0, 0.12);">                        
                        <div class="cart-metadata-2">
                            <img :src="sellingPriceIcon" style="width: 35px; height: 35px; margin-right: 6px;" />
                            <div class="font-weight-bold" style="margin-bottom: 3px; font-size: 15px;">Price</div>
                        </div>
                        <div>Rs. {{book.price || "245"}}</div>
                    </div>
                    <div class="cart-metadata">                        
                        <div class="cart-metadata-2">
                            <img :src="deliveryDateIcon" style="width: 35px; height: 35px; margin-right: 6px;" />
                            <div class="font-weight-bold" style="margin-bottom: 3px; font-size: 15px;">Delivery on</div>
                        </div>
                        <div>1st Feb 2021</div>
                    </div>
                </div>
                <div style="display: flex; justify-content: center; width: 100%;">
                    <div class="cart-metadata" >
                        <div class="cart-metadata-2" >
                            <img :src="quantityIcon" style="width: 35px; height: 35px; margin-right: 6px;" />
                            <div class="font-weight-bold" style="margin-bottom: 3px; font-size: 15px;">Quantity</div>                                
                        </div>
                        <div class="order-buttons mt-2" >
                            <img class="increment-button" :src="plusIcon" />
                            <div class="mx-4">0</div>
                            <img class="increment-button" :src="minusIcon" />
                        </div>
                    </div>
                    <div class="cart-metadata">
                        <div class="cart-metadata-2">
                            <img :src="grossAmountIcon" style="width: 35px; height: 35px; margin-right: 6px;" />
                            <div class="font-weight-bold" style="margin-bottom: 3px; font-size: 15px;">Amount</div>                                
                        </div>
                        <div>245</div>
                    </div>
                </div>
                
                <slot />
            </v-card-text>
            </div>
        </v-card>
    </div>
</template>

<script>
import sellingPriceIcon from "../../static/Icons/BookDisplayIcons/sellingPrice.svg"
import deliveryDateIcon from "../../static/Icons/BookDisplayIcons/deliveryDate.svg"
import inStockIcon from "../../static/Icons/BookDisplayIcons/inOutStock2.svg"
import outOfStockIcon from "../../static/Icons/BookDisplayIcons/outOfStock.svg"
import noBookImagesIcon from "../../static/Images/noBookImagesAlt.png"
import plusIcon from "../../static/Icons/ProfileIcons/OrderIcons/plus.svg"
import minusIcon from "../../static/Icons/ProfileIcons/OrderIcons/minus.svg"
import quantityIcon from "../../static/Icons/CartIcons/quantity1.svg"
import grossAmountIcon from "../../static/Icons/CartIcons/grossAmount.svg"

export default {
    name: "BookCard",
    components: {},
    props: ["book"],
    data: () => {
        return {
            sellingPriceIcon,
            deliveryDateIcon,
            inStockIcon,
            outOfStockIcon,
            noBookImagesIcon,
            plusIcon,
            minusIcon,
            quantityIcon,
            grossAmountIcon
        }
    },
    methods: {

    }
}
</script>

<style scoped>
.book-property{
    padding: 14px;
    display: flex;
    align-items: center;
    font-size: 14px;
    color: black;
    
}
.button-icon{
    width: 25px;
    height: 25px;
    margin-right: 10px;
}
.cart-metadata{
    margin: 7px;
    padding: 7px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f5f5f5;
    flex-direction: column;
    font-size: 14px;
    color: black;
    width: 50%;
}
.cart-metadata-2{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    font-size: 14px;
    color: black;
    margin-bottom: 3px;
}
.order-buttons{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 80px;
}
.increment-button{
    width: 35px;
    height: 35px;
    cursor: pointer;
}
.book-card-cart{
    display: flex;
    flex-direction: row;
    width: 100%;
}
/*ABOVE 990 PX*/
@media only screen and (min-width: 990px){

}

/*BELOW 990 PX*/
@media only screen and (max-width: 990px){

}

/*ABOVE 767 PX*/
@media only screen and (min-width: 767px){
    .book-card-content{
        width: 60%;
    }
}

/*BELOW 767 PX*/
@media only screen and (max-width: 767px){
    .book-card-cart{
        flex-direction: column;
        max-width: 374px;
    }
    .book-card-content{
        width: 100%;
    }
}

/*ABOVE 510 PX*/
@media only screen and (min-width: 510px){

}


/*BELOW 510 PX*/
@media only screen and (max-width: 510px){
    .cart-metadata{
        margin: 3.5px;
        padding: 3.5px
    }
}
</style>