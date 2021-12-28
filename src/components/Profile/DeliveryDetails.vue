<template>
    <v-row justify="center" >
        <v-dialog v-model="dialog" persistent width="600px" >
            <template v-slot:activator="{ on, attrs }">
                <span v-bind="attrs" v-on="on" class="order-links" style="float: right;" >
                    View Delivery Details
                </span>                
            </template>
            <v-card>
                <v-card-title class="headline" >
                    <div style="display: flex; align-items: center; justify-content: center;">
                        <v-img :src="deliveryDetails" class="button-icon" ></v-img>
                        <div>Delivery Details</div>
                    </div>
                </v-card-title>
                
                <v-card-text id="card-content">
                    <div style="display: flex; align-items: center; justify-content: center;" class="pb-3">
                        <img :src="deliveryDetails1" style="width: 100px; height: 100px;" />
                    </div>
                    <div style="display: flex; flex-flow: row wrap;">
                        <div class="detail-item pa-3" style="width: 62%;">
                            <div class="font-weight-bold delivery-title" >Name of the Buyer</div>
                            <div>{{order.buyername}}</div>
                        </div>
                        <div class="detail-item pa-3" style="width: 38%;">
                            <router-link :to="`/profile/${order.buyer}`" >View Profile</router-link>
                        </div>
                        <div class="detail-item pa-3">
                            <div class="font-weight-bold delivery-title" >Email</div>
                            <div>{{order.buyeremail}}</div>
                        </div>
                        <div class="detail-item pa-3">
                            <div class="font-weight-bold delivery-title" >Contact Number</div>
                            <div>{{order.phone}}</div>
                        </div>
                        <div style="width: 100%;" class="pa-3">
                            <div class="font-weight-bold delivery-title" >Address</div>
                            <div>{{order.address1 + ", " + order.address2}}</div>
                        </div>
                    </div>
                </v-card-text>
                
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="red darken-1" text @click="dialog = false" >
                        CLOSE
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-row>
</template>

<script>
import deliveryDetails from "../../static/Icons/ProfileIcons/OrderIcons/deliveryDetails.svg"
import deliveryDetails1 from "../../static/Icons/ProfileIcons/OrderIcons/deliveryDetails1.svg"

export default {
    name: "DeliveryDetails",
    components: {},
    props: ["order"],
    data() {
        return {
            dialog: false,

            deliveryDetails1,
            deliveryDetails
        }
    },
    methods: {

    },
    created(){
        console.log(this.order)
    }
}
</script>

<style scoped>
.button-icon{
    width: 25px;
    height: 25px;
    margin-right: 10px;
}
.delivery-title{
    margin-bottom: 5px;
    color: black;
}
.detail-item{
    width: 50%;
}
.order-links{
    font-size: 14px;
    color: gray;
    cursor: pointer;
}
#card-content{
    padding: 14px;
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
    #card-content{
        padding: 14px 0px;
    }
}
</style>