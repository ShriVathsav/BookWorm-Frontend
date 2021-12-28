<template>
    <div>
        <div style="text-align: center; font-weight: bold; font-size: 16px; margin-bottom: 4px;">
            Enter Card Details</div>
        <div>
            <div id="card-error" style="text-align: center; margin-bottom: 3px;"></div>
            <div class="card-elements">
                <label class="card-label">Card Number*</label>
                <div id="card-number" class="card-element-input"></div>
            </div>
            <div class="other-elements-wrapper">
                <div class="card-elements other-elements" style="margin-right: 8px;">
                    <label class="card-label">Card Expiry*</label>
                    <div id="card-expiry" class="card-element-input"></div>
                </div>
                <div class="card-elements other-elements" style="margin-left: 8px;">
                    <label class="card-label">Card CVC*</label>
                    <div id="card-cvc" class="card-element-input"></div>
                </div>
            </div>
            <!--button id="custom-button" @click="createToken">Generate Token</button-->
        </div>
        <v-text-field filled label="Address Line 1*" placeholder="Address Line 1" v-model="addressLine1"
            ref="addressLine1" @input.native="textInputChangeOneSpace($event, 'addressLine1')"
            background-color="purple lighten-5" color="purple" hide-details="true" style="margin-bottom: 17px;">
        </v-text-field>
        <v-text-field filled label="Address Line 2*" placeholder="Address Line 2" v-model="addressLine2"
            ref="addressLine2" @input.native="textInputChangeOneSpace($event, 'addressLine2')"
            background-color="purple lighten-5" color="purple" hide-details="true" style="margin-bottom: 17px;" >
        </v-text-field>
        <v-text-field filled label="Pincode*" placeholder="Pincode" v-model="pincode"
            ref="pincode" @keypress.native="wholeNumberInputChange($event, 'pincode')" 
            background-color="purple lighten-5" color="purple" hide-details="true" style="margin-bottom: 17px;" >
        </v-text-field>
        <v-text-field filled label="Contact Number*" placeholder="Contact Number" v-model="contactNumber"
            ref="contactNumber" @keypress.native="wholeNumberInputChange($event, 'contactNumber')" 
            background-color="purple lighten-5" color="purple" hide-details="true" style="margin-bottom: 17px;" >
        </v-text-field>
        <div style="padding: 14px; margin-bottom: 18px; background-color: #FF5252; color: white;" v-if="paymentError">
            {{errorMessage}}
        </div>
    </div>
</template>

<script>
import {removeSpacesFromTextInput, allowWholeNumbers} from "../../utility/ValidateInputs"
import Order from "../../models/Order"
import axios from "axios"


export default {
    name: "PayButton2",
    components: {},
    props: ["bus", "alterState"],
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
            paymentError: false,
            errorMessage: ""
        }
    },
    computed: {
        stripeElements () {
            return this.$stripe.elements();
        },
    },
    mounted() {
        this.bus.$on('submit', this.validateAndSubmit)
    // Style Object documentation here: https://stripe.com/docs/js/appendix/style
        const style = {
            base: {
                color: 'black',
                backgroundColor: "#F3E5F",
                //fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
                fontSmoothing: 'antialiased',
                fontSize: '16px',
                '::placeholder': {
                color: '#aab7c4',
                },
            },
            invalid: {
                color: '#fa755a',
                iconColor: '#fa755a',
            },
        };
        this.cardNumber = this.stripeElements.create('cardNumber', { style });
        this.cardNumber.mount('#card-number');
        this.cardExpiry = this.stripeElements.create('cardExpiry', { style });
        this.cardExpiry.mount('#card-expiry');
        this.cardCvc = this.stripeElements.create('cardCvc', { style });
        this.cardCvc.mount('#card-cvc');
    },
    beforeDestroy () {
        this.cardNumber.destroy();
        this.cardExpiry.destroy();
        this.cardCvc.destroy();
    },
    methods: {
        validateAndSubmit(){
            const valid = this.otherDetailsValid()
            if(!valid){
                this.paymentError = true
                this.errorMessage = "Please fill all the mandatory fields"
            } else {
                this.paymentError = false
                this.errorMessage = ""
                this.createToken()
            }
        },
        otherDetailsValid(){
            return this.addressLine1 !== "" &&
                this.addressLine2 !== "" &&
                this.pincode !== "" &&
                this.contactNumber !== ""
        },
        wholeNumberInputChange(e){
            const ress = allowWholeNumbers(e)
            console.log(ress, "IS NUMBER RESULT")
        },
        textInputChangeOneSpace(e, ref){
            const val = e.target.value
            this[ref] = removeSpacesFromTextInput(val)
        },
        async createToken() {
            this.alterState("loading", true)
            const { token, error } = await this.$stripe.createToken(this.cardNumber);            
            if (error) {
                // handle error here
                document.getElementById('card-error').innerHTML = error.message;
                this.alterState("loading", false)
                console.log(error, "STRIPE ERROR")
                return;
            }
            //console.log(token);
            // handle the token
            this.makePayment(token.id)
        },
        makePayment(token) {
            const ordersArray = []
            for (let cartItem of this.$store.state.cart){
                console.log(cartItem.book.deliveryTime)
                var result = new Date();
                result.setDate(result.getDate() + cartItem.book.deliveryTime)
                console.log(result)
                ordersArray.push(new Order(
                    result.toISOString(),
                    cartItem.book.profile,
                    this.$store.getters['auth/getUserProfile'].id, 
                    cartItem.book.id,
                    cartItem.quantity, 
                    cartItem.totalAmount,
                    this.$store.getters['auth/getUserProfile'].username,
                    this.$store.getters['auth/getUserProfile'].email,
                    this.contactNumber,
                    this.addressLine1,
                    this.addressLine2,
                    this.pincode,
                    new Date().toISOString(),
                    new Date().toISOString()
                ))
            }
            console.log(ordersArray)
        
            let payment = {
                stripe_token: token,
                total_amount: this.$store.getters['cart/grandTotal'] * 100,
                description: "Product description test",
                receipt_email: this.$store.getters['auth/getUserProfile'].email,
                orders: ordersArray
            }

            axios.post("/order", payment,
            {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                }
            }).then(res => {
                console.log(res)
                this.alterState("loading", false)
                this.alterState("paymentSuccess", true)
                this.$store.dispatch("cart/clearCart")
            }).catch(err => {
                this.alterState("loading", false)
                console.log(err.response)
                document.getElementById('card-error').innerHTML = err.message;
            })
        },

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