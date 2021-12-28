<template>
    <v-app>  
        <Header />
        <SideDrawer />
        <v-main class="bodyClass">
            <v-container>
                 <!--div v-if="!signedIn">
                    <amplify-authenticator></amplify-authenticator>
                </div-->
                <div>
                    <!--amplify-sign-out class="signout"></amplify-sign-out-->
                    <router-view :key="$route.fullPath" />
                </div>
            </v-container>
        </v-main>
        <Footer />
        
    </v-app>
</template>

<script>
//import Footer from './components/UI/Footer';
import Header from './components/UI/Header';
import Footer from './components/UI/Footer';
import SideDrawer from './components/UI/SideDrawer';
import {Auth} from 'aws-amplify'

import { mapGetters } from 'vuex'

export default {
    name: 'App',

    components: {
        Footer, 
        SideDrawer,
        Header,
    },

    data() {
        return {
            signedIn: false,
            user: null,
            isAuthenticating: false
        }
    },
    computed: {
        ...mapGetters({
            myState: 'isAuthenticated'
        })
    },
    methods:{
        
    },
    async beforeCreate() {
        try {
            this.isAuthenticating = true
            const user = await Auth.currentAuthenticatedUser()
            this.$store.dispatch("auth/loginSuccess", user)
            this.isAuthenticating = false
            /*const unProtectedRoutesList = ["/signin", "/signup", "/confirmsignup", "/resetPassword"]
            if(unProtectedRoutesList.includes(this.$router.history.current.path)){
                console.log("HELLO I`M INSIDE ROUTER APP VUE")
                this.$router.replace("/")
            }*/
        } catch (err) {
            this.$store.dispatch("auth/loginFailure")
            this.isAuthenticating = false
        }
    },
};
</script>

<style scoped>
.body {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
}

.bodyClass{
    background-color: #F8F8F8;
}

.main {
   flex: 1 0 auto;
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

}


/*BELOW 510 PX*/
@media only screen and (max-width: 510px){

}
</style>