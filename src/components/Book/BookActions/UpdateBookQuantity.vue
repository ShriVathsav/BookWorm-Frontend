<template>
    <v-row justify="center">
        <v-dialog v-model="dialog" persistent max-width="500" >
            <template v-slot:activator="{ on, attrs }">
                <v-btn outlined color="lime darken-2" v-bind="attrs" v-on="on"
                        id="action-button" >
                    <v-img class="button-icon" :src="updateStockIcon" ></v-img>
                    <div>UPDATE STOCK</div>
                </v-btn>            
            </template>
            <v-card>
                <v-card-title class="headline">
                    <div style="display: flex; align-items: center; justify-content: center;">
                        <v-img :src="updateStockIcon" class="button-icon" ></v-img>
                        <div>Update Stock</div>
                    </div>
                </v-card-title>
                <v-card-text style="padding: 14px 24px;">
                    <div>
                        <v-text-field filled label="Update Book Quantity*" placeholder="Update Book Quantity" 
                            v-model="quantity" color="purple" background-color="purple lighten-5"
                            ref="quantity" @input.native="wholeNumberInputChange($event, 'quantity')" >
                        </v-text-field>
                        <v-text-field filled label="Change Delivery Time*" placeholder="Estimated Delivery Time (In Days)" 
                            color="purple" background-color="purple lighten-5"
                            ref="deliveryTime" @keypress.native="wholeNumberInputChange($event)" v-model="deliveryTime" >
                        </v-text-field>
                    </div>
                    <div style="padding: 14px; margin-top: 10px; background-color: #FF5252; color: white;" 
                            v-if="bookQuantityError">
                        {{errorMessage}}
                    </div>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="red darken-1" text @click="discardChanges" :diasbled="updateBookQuantityLoading" >
                        DISCARD
                    </v-btn>
                    <v-btn color="purple" text @click="validateAndSubmit" :loading="updateBookQuantityLoading" >
                        UPDATE
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-row>
</template>

<script>
import updateStockIcon from "../../../static/Icons/BookDisplayIcons/updateStock.svg"
import axios from "axios"
import { allowWholeNumbers } from "../../../utility/ValidateInputs"

export default {
    name: "UpdateBookQuantity",
    components: {},
    props: ["book", "alterState"],
    data() {
        return {
            dialog: false,
            quantity: this.book.stocksLeft,
            deliveryTime: this.book.deliveryTime,
            updateBookQuantityLoading: false,
            bookQuantityError: false,
            errorMessage: "",

            updateStockIcon
        }
    },
    methods: {
        discardChanges(){
            this.quantity = this.book.stocksLeft
            this.deliveryTime = this.book.deliveryTime
            this.bookQuantityError = false
            this.errorMessage = ""
            this.dialog = false
        },
        wholeNumberInputChange(e){
            allowWholeNumbers(e)            
        },
        validateAndSubmit(){
            if(!!this.quantity && !!this.deliveryTime && this.deliveryTime == 0 && this.quantity == 0){
                this.bookQuantityError = false
                this.errorMessage = ""
                this.updateBookQuantity()
            } else {
                this.bookQuantityError = true
                this.errorMessage = "Please fill all the madatory fields"
            }
        },
        updateBookQuantity(){
            this.updateBookQuantityLoading = true
            const params = {
                quantity: this.quantity,
                delivery_time: this.deliveryTime
            }
            axios.put(`/book/${this.$route.params.id}/editQuantity`, params,
            {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                }
            }).then(res => {
                console.log(res)
                const book = {...this.book}
                book.stocksLeft = res.data.stocksleft
                book.deliveryTime = res.data.delivery_time
                this.alterState("book", book)
                this.updateBookQuantityLoading = false
                this.dialog = false
            }).catch(err => {
                this.updateBookQuantityLoading = false
                this.bookQuantityError = true
                this.errorMessage = err.message || "An error occured"
                console.log(err.response)
            })
        }
    }
}
</script>

<style scoped>
#action-button{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    height: 45px;
    color: white;
}
.button-icon{
    width: 25px;
    height: 25px;
    margin-right: 10px;
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
    #action-button{
        padding: 10px 30px;
        margin: 12px;
    }
}


/*BELOW 510 PX*/
@media only screen and (max-width: 510px){
    #action-button{
        padding: 7px 10px;
        margin: 4px;   
    }
    .button-icon{
        margin-right: 7px;
    }
}
</style>