<template>
    <v-app-bar app color="purple" dark style="" height="70" >
        <!--div style="display: flex; align-items: center; justify-content: center;"-->
            <div class="d-flex align-center" style="cursor: pointer;" @click="$router.push('/')">
                <img class="shrink mr-4" :src="headerIcon"
                    contain transition="scale-transition" width="40"  />

                <div class="font-weight-bold main-header">Book Worm</div>
            </div>

            <v-spacer></v-spacer>

            <div style="display: flex; align-items: center; justify-content: center;">
                <img :src="hamburgerMenu2" style="" 
                    @click="$store.dispatch('view/toggleSideDrawer', true)" id="hamburger-menu" />

                <div style="" v-if="$store.state.auth.loggedIn" id="header-items">
                    <v-btn @click="$router.push('/sellbook')" style="height: 50px;" class="mr-4" color="cyan lighten-1" >
                        <img class="mr-2" :src="sellBookIcon" style="width: 35px; height: 35px;" />
                        <div>SELL A BOOK</div>
                    </v-btn>
                    <v-btn @click="$router.push(`/profile/${$store.getters['auth/getUserProfile'].id}/cart`)" style="height: 50px;" class="mr-4" color="cyan lighten-1" >
                        <img class="mr-2" :src="cart2Icon" style="width: 35px; height: 35px;" />
                        <div>CART</div>
                    </v-btn>

                    <div class="" style="display: flex; align-items: center; justify-content: center;" >
                        <v-menu bottom left offset-y >
                            <template v-slot:activator="{ on, attrs }">
                                <img :src="unknownUser3" style="width: 50px; height: 50px; border-radius: 50%; cursor: pointer;"
                                    v-bind="attrs" v-on="on" />
                            </template>

                            <v-list>
                                <v-list-item link @click="$router.push(`/profile/${$store.getters['auth/getUserProfile'].id}`)" >
                                    <div style="display: flex; align-items: center; justify-content: center;">
                                        <img :src="viewProfile" style="width: 30px; height: 30px; margin-right: 12px;" />
                                        <div style="font-size: 15px;" class="font-weight-bold">
                                            View Profile
                                        </div>
                                    </div>
                                </v-list-item>
                                <v-list-item link @click="signOut()" >
                                    <div style="display: flex; align-items: center; justify-content: center;">
                                        <img :src="signOut1" style="width: 30px; height: 30px; margin-right: 12px;" />
                                        <div style="font-size: 15px;" class="font-weight-bold">
                                            Sign Out
                                        </div>
                                    </div>
                                </v-list-item>
                            </v-list>
                        </v-menu>
                    </div>
                </div>
                <div v-else id="header-items">
                    <v-btn @click="$router.push('/signin')" style="height: 50px;" class="mr-4" color="cyan lighten-1" >
                        <img class="mr-2" :src="loginIcon" style="width: 35px; height: 35px;" />
                        <div>LOGIN</div>
                    </v-btn>
                    <v-btn @click="$router.push('/signup')" style="height: 50px;" class="mr-4" color="cyan lighten-1" >
                        <img class="mr-2" :src="registerIcon" style="width: 35px; height: 35px;" />
                        <div>REGISTER</div>
                    </v-btn>
                </div>
            </div>
        <!--/div-->
    </v-app-bar>
</template>

<script>
import sellBookIcon from "../../static/Icons/AuthIcons/sellBookIcon.svg"
import hamburgerMenu1 from "../../static/Icons/AuthIcons/hamburgerMenu1.svg"
import hamburgerMenu2 from "../../static/Icons/AuthIcons/hamburgerMenu2.svg"
import unknownUser3 from "../../static/Icons/AuthIcons/unknownUser3.svg"
import loginIcon from "../../static/Icons/AuthIcons/loginIcon.svg"
import registerIcon from "../../static/Icons/AuthIcons/registerIcon.svg"
import headerIcon from "../../static/Icons/AuthIcons/headerIcon.svg"
import signOut1 from "../../static/Icons/AuthIcons/signOut1.svg"
import signOut2 from "../../static/Icons/AuthIcons/signOut2.svg"
import viewProfile from "../../static/Icons/AuthIcons/viewProfile.svg"
import cart1Icon from "../../static/Icons/BookDisplayIcons/cart1.svg"
import cart2Icon from "../../static/Icons/BookDisplayIcons/cart2.svg"
import unknownUser2 from "../../static/Icons/ProfileIcons/unknownUser2.svg"

import {Auth} from 'aws-amplify'

//import SideDrawer from "./SideDrawer"

export default {
    name: "Header",
    components: {},
    props: [],
    data() {
        return {
            sellBookIcon,
            loginIcon,
            registerIcon,
            headerIcon,
            hamburgerMenu1,
            hamburgerMenu2,
            cart1Icon,
            cart2Icon,
            unknownUser2,
            unknownUser3,
            signOut1,
            signOut2,
            viewProfile,

            selectedItem: 1,
            items: [
                { text: 'View Profile', icon: viewProfile },
                { text: 'Sign Out', icon: signOut1 },
                //{ text: 'Sign Out', icon: signOut2 },
            ],

        }
    },
    methods: {
        async signOut(){
            try{
                await Auth.signOut()
                this.$store.dispatch("auth/logout")
                localStorage.removeItem("bookStoreUser")
                this.$router.push("/signin")
            } catch(err){
                console.error(err.message)
            }
        }
    }
}
</script>

<style scoped>
#hamburger-menu{
    width: 25px;
    height: 25px;
    cursor: pointer;
}
#header-items{
    display: flex;
}
.main-header{
    font-size: 35px;
}

/*ABOVE 990 PX*/
@media only screen and (min-width: 990px){

}

/*BELOW 990 PX*/
@media only screen and (max-width: 990px){

}

/*ABOVE 767 PX*/
@media only screen and (min-width: 767px){
    #hamburger-menu{
        display: none;
    }
}

/*BELOW 767 PX*/
@media only screen and (max-width: 767px){
    #header-items{
        display: none;
    }
}

/*ABOVE 510 PX*/
@media only screen and (min-width: 510px){
    
}


/*BELOW 510 PX*/
@media only screen and (max-width: 510px){
    .main-header{
        font-size: 25px;
    }
}
</style>