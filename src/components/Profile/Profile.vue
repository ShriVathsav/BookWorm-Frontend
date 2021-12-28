<template>
    <div>
        <div v-if="loading">
            <FullPageLoader />
        </div>
        <div v-else>
            <div v-if="!profile">
                <PageNotFound />
            </div>
            <div v-else>
                <v-card style="padding: 20px;">
                    <div class="profile-header">
                        <div class="profile-image-container">
                            <div class="pb-3">
                                <EditProfileImage :profileImage="profile.profileImage" :alterState="alterState" />
                            </div>
                            <div class="mt-3" style="font-size: 14px;">
                                Joined {{formatTime()}}
                            </div>
                        </div>
                        <div class="profile-information-container">
                            <div class="make-bold" style="font-size: 22px;" >
                                Profile Information
                            </div>
                            <v-divider></v-divider>
                            <div style="" class="profile-info">
                                <div class="profile-info-row">
                                    <div style="margin-top: 16px;">
                                        <div class="make-bold">Username</div>
                                        <div>{{profile.username}}</div>
                                    </div>
                                    <div style="margin-top: 16px;">
                                        <div class="make-bold">Email</div>
                                        <div>{{profile.email}}</div>
                                    </div>
                                </div>
                                <div class="profile-info-row">
                                    <div style="margin-top: 16px;">
                                        <div class="make-bold">Contact Number</div>
                                        <div>{{profile.phone}}</div>
                                    </div>
                                    <div style="margin-top: 16px;">
                                        <div class="make-bold">Address</div>
                                        <div>{{profile.address1 + ", " + profile.address2 + ", " + profile.pincode}}</div>
                                    </div>
                                    <!--v-btn color="success" small dark style="margin-top: 14px;">
                                        <v-icon left>mdi-pencil</v-icon>
                                        <span style="word-break: break-all;" >EDIT CONTACT INFORMATION</span>
                                    </v-btn-->
                                </div>
                            </div>
                            <div style="margin-top: 14px; float: right;" v-if="isCurrentUser" >
                                <div style="display: inline-block;">
                                    <EditProfile :profile="profile" :alterState="alterState" />
                                </div>
                            </div>
                        </div>
                    </div>
                </v-card>

                <div class="activity-heading">
                    <div class="make-bold" >{{profile.username}}`s Activity</div>
                    <v-divider></v-divider>
                </div>
                
                <div class="tab-outer" style="margin: 20px 0px;" >
                    <div class="tab" >
                        <div class="tab-item" @click="profileBooks = '1'"
                            :style="`background-color: ${profileBooks === '1' ? '#9C27B0' : ''}; color: ${profileBooks === '1' ? 'white' : ''};`" >
                            <img :src="booksPosted1" max-width="50" max-height="50" class="tab-image" />
                            <div class="tab-text">BOOKS POSTED</div>
                        </div>

                        <v-divider vertical></v-divider>

                        <div class="tab-item" @click="profileBooks = '2'" v-if="true"
                            :style="`background-color: ${profileBooks === '2' ? '#9C27B0' : ''}; color: ${profileBooks === '2' ? 'white' : ''};`" >
                            <img :src="yourOrders2" max-width="50" max-height="50" class="tab-image" />
                            <div class="tab-text">YOUR ORDERS</div>
                        </div>                    

                        <v-divider vertical></v-divider>

                        <div class="tab-item" @click="profileBooks = '3'" v-if="true"
                            :style="`background-color: ${profileBooks === '3' ? '#9C27B0' : ''}; color: ${profileBooks === '3' ? 'white' : ''};`" >
                            <img :src="ordersWaiting" max-width="50" max-height="50" class="tab-image" />
                            <div class="tab-text">ORDERS WAITING</div>
                        </div>
                    </div>
                </div>
                <div v-if="profileBooks === '1'" >
                    <BooksPosted :booksPosted="profile.booksPosted" :profileUsername="profile.username" />
                </div>
                <div v-if="profileBooks === '2'" >
                    <Order :orders="profile.orders" />
                </div>
                <div v-if="profileBooks === '3'" >
                    <OrdersWaiting :ordersWaiting="profile.ordersWaiting" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Order from "./Order"
import OrdersWaiting from "./OrdersWaiting"
import BooksPosted from "./BooksPosted"
import EditProfileImage from "./EditProfileImage"
import EditProfile from "./EditProfile"
import FullPageLoader from "../UI/FullPageLoader"
import PageNotFound from "../InfoPages/PageNotFound"
import axios from "axios"

import unknownUser1 from "../../static/Icons/ProfileIcons/unknownUser1.svg"
import unknownUser2 from "../../static/Icons/ProfileIcons/unknownUser2.svg"
import yourOrders1 from "../../static/Icons/ProfileIcons/yourOrders1.svg"
import yourOrders2 from "../../static/Icons/ProfileIcons/yourOrders2.svg"
import booksPosted1 from "../../static/Icons/ProfileIcons/booksPosted1.svg"
import booksPosted2 from "../../static/Icons/ProfileIcons/booksPosted2.svg"
import plusIcon from "../../static/Icons/ProfileIcons/OrderIcons/plus.svg"
import minusIcon from "../../static/Icons/ProfileIcons/OrderIcons/minus.svg"
import noBooksSale from "../../static/Icons/ProfileIcons/booksPostedInfo.svg"
import ordersWaiting from "../../static/Icons/ProfileIcons/ordersWaiting.svg"

import emptyImage from "../../static/Images/emptyImage.png"
import Profile from "../../models/Profile"
import {formatTime} from "../../utility/Helpers"

export default {
    name: "Profile",
    components: {Order, BooksPosted, EditProfileImage, EditProfile, OrdersWaiting, FullPageLoader, PageNotFound},
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
            ordersWaiting,
            noBooksSale,

            emptyImage,
            //isCurrentUser: this.$store.getters['auth/getUserProfile'].id === this.$route.params.id,

            profileBooks: "1",
            profile: null,
            loading: false,
            formatTime,
            /*
            profile: {
                username: "My Username",
                email: "email@email.com",
                addressLine1: "Address Line 1",
                addressLine2: "Address Line 2",
                pincode: "585436",
                contactNumber: "+41 584 555 77 88"
            }
            */
        }
    },
    methods: {
        alterState(state, obj){
            this[state] = obj
        }
    },
    computed: {
        isCurrentUser(){
            return this.$store.getters['auth/getUserProfile'].id === this.$route.params.id
        }        
    },
    updated() {

    },
    /*async beforeCreate(){
        this.loading = true  
        try{
            const res = await API.graphql(graphqlOperation(GetProfile, {id: this.$route.params.id}))
            console.log(res)
            this.profile = res.data.getProfile  
            this.loading = false
        } catch(err) {
            this.loading = false
            console.log(err, err.response)
        }
    },*/
    created(){
        this.loading = true
        axios.get(`/profile/${this.$route.params.id}`, {}, {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            }
        }).then(res => {
            console.log(res)
            this.profile = new Profile(res.data._id, res.data.cognito_id, res.data.username, res.data.email, 
                    res.data.password, res.data.profile_image, res.data.phone, res.data.address1, res.data.address2, 
                    res.data.pincode, res.data.created_at, res.data.updated_at)
            console.log(this.profile)
            this.loading = false
        }).catch(err => {
            console.log(err, err.response)
            this.loading = false
        })
    }
}
</script>

<style scoped>
.profile-info{
    display: flex;
    margin-top: 7px;
}
.profile-info-row{
    width: 50%;
}
.make-bold{
    font-weight: 700;
}
.profile-image-container{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.profile-image{
    width: 150px;
    height: 150px;
}
.activity-heading{
    font-size: 25px;
    margin: 25px 0px;
}

.tab-outer{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
}
.tab{
    border: 1px solid rgba(0, 0, 0, 0.12);
    display: flex;
    align-items: stretch;
    justify-content: center;
    width: 100%;
    max-width: 800px;
    margin: 0px;
    background-color: white;
}
.tab-item{
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 16px;
    width: 100%;
    cursor: pointer;
}
.tab-image{
    width: 50px;
    height: 50px;
    margin-right: 10px;
}
.tab-text{
    font-weight: 700;
    text-align: center;
    line-height: normal;
}
.tab-item:hover{
    background-color: #26C6DA;
    color: white;
}
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
    .profile-header{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: row;
    }
    .profile-image-container{
        width: 30%;
    }
    .profile-information-container{
        width: 70%;
    }
}

/*BELOW 767 PX*/
@media only screen and (max-width: 767px){
    .profile-header{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }
    .profile-image-container{
        width: 100%;
        margin-bottom: 14px;
    }
    .profile-information-container{
        width: 100%;
    }
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
    .tab-item{
        flex-direction: column;
    }
    .tab-image{
        margin-right: 0px;
        margin-bottom: 10px;
    }
    #action-button{
        padding: 7px 10px;
        margin: 4px;   
    }
    .button-icon{
        margin-right: 7px;
    }
    .profile-info{
        flex-direction: column;
    }
    .profile-info-row{
        width: 100%;
    }
}

</style>