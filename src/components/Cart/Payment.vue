<template>
    <v-row justify="center">
        <v-dialog v-model="dialog" persistent width="450px" scrollable >
            <template v-slot:activator="{ on, attrs }"> 
                <v-btn outlined color="cyan" id="info-button" v-bind="attrs" v-on="on"
                        class="my-2" style="float: right;" :disabled="$store.getters['cart/grandTotal'] <= 0" >
                    <v-img class="button-icon" :src="proceedToPayIcon" ></v-img>
                    <div>PROCEED TO PAY</div>
                </v-btn>              
            </template>
            <v-card>
                <v-card-title class="headline" >
                    <div style="display: flex; align-items: center; justify-content: center;">
                        <v-img :src="proceedToPayIcon" class="button-icon" ></v-img>
                        <div>Proceed to Pay</div>
                    </div>
                </v-card-title>
                
                <v-card-text style="padding: 14px 24px;">
                    <div v-if="!paymentSuccess">
                        <PayButton2 :bus="bus" :alterState="alterState" />
                    </div>
                    <div v-else>
                        <InfoPageButton :icon="paymentSuccessIcon" message="Payment successful" style="margin-bottom: 30px;" />
                    </div>
                </v-card-text>
                
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="red darken-1" style="color: white;" @click="dialog = false" :disabled="loading" >
                        DISCARD
                    </v-btn>
                    <v-btn color="purple" style="color: white;"  @click="submit" :loading="loading" v-if="!paymentSuccess" >
                        MAKE PAYMENT
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-row>
</template>

<script>
import Vue from 'vue'
import proceedToPayIcon from "../../static/Icons/CartIcons/proceedToPay.svg"
import paymentSuccessIcon from "../../static/Icons/CartIcons/paymentSuccess.svg"
import PayButton2 from "./PayButton2"
import InfoPageButton from "../InfoPages/InfoPageButton"
//import {removeSpacesFromTextInput, allowWholeNumbers} from "../../utility/ValidateInputs"
//import Order from "../../models/Order"
//import axios from "axios"

export default {
    name: "Payment",
    components: {PayButton2, InfoPageButton},
    props: [],
    data() {
        return {
            token: null,
            cardNumber: null,
            cardExpiry: null,
            cardCvc: null,
            dialog: false,
            addressLine1: "",
            addressLine2: "",
            pincode: "" ,
            contactNumber: "",
            loading: false,
            proceedToPayIcon,
            paymentSuccessIcon,

            paymentSuccess: false,

            bus: new Vue(),
        }
    },
    computed: {
        stripeElements () {
            return this.$stripe.elements();
        },
    },
    methods: {
        submit() {
            this.bus.$emit('submit')
        },
        alterState(state, value){
            this[state] = value
        }
    },
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
#card-error {
  color: red;
}
.card-label {
    font-size: 12px;
    color: #9C27B0;
}
.card-elements {
    padding: 8px 12px 0px 12px;
    background-color: #F3E5F5;
    border-bottom: 2px solid #9C27B0;
    margin-bottom: 16px;
}
.card-element-input {
    padding-bottom: 8px;
}
.other-elements {
    width: 50%;
}
.other-elements-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
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