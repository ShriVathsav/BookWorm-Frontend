<template>
    <div>
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
</template>

<script>

export default {
    name: "PayButton",
    data () {
        return {
            token: null,
            cardNumber: null,
            cardExpiry: null,
            cardCvc: null,
        };
    },
    props: ["createToken"],
    computed: {
        stripeElements () {
            return this.$stripe.elements();
        },
    },
    mounted () {
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
        
    }
};
</script>

<style scoped>
#custom-button {
  height: 30px;
  outline: 1px solid grey;
  background-color: green;
  padding: 5px;
  color: white;
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
</style>