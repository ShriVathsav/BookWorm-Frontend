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
        <!--Footer/-->
        
    </v-app>
</template>

<script>
//import Footer from './components/UI/Footer';
import Header from './components/UI/Header';
import SideDrawer from './components/UI/SideDrawer';
import {getProfile} from './graphql/queries';
import {createProfile} from './graphql/mutations';
//import { AmplifyEventBus } from 'aws-amplify-vue'
import { Auth, API, graphqlOperation } from 'aws-amplify'

import { mapGetters } from 'vuex'

export default {
    name: 'App',

    components: {
        //Footer, 
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
        async registerNewUser2(signInData){
            const getUserInput = {
                id: signInData.signInUserSession.idToken.payload.sub
            }
            console.log(getUserInput)

            const res = await API.graphql(graphqlOperation(getProfile, getUserInput))
            console.log(res)
            if(!res.data.getProfile){
                try {
                    const registerUserInput = {
                        ...getUserInput,
                        username: signInData.username,
                        email: signInData.signInUserSession.idToken.payload.email,
                        password: "password",
                        profileImage: "profile image",
                        phone: "phone",
                        address1: "address 1",
                        address2: "address 2",
                        pincode: "pincode",
                        createdAt: new Date().toISOString(),
                        updatedAt: new Date().toISOString()
                    }
                    const res = await API.graphql(graphqlOperation(createProfile, {input: registerUserInput}))
                    console.log(res)
                } catch(err) {
                    console.log(err, err.response)
                }
            }
        },
        async registerNewUser(signInData){
            const getUserInput = {
                id: signInData.signInUserSession.idToken.payload.sub
            }
            console.log(getUserInput)

            const res = await API.graphql(graphqlOperation(getProfile, getUserInput))
            console.log(res)
            if(!res.data.getProfile){
                try {
                    const registerUserInput = {
                        ...getUserInput,
                        username: signInData.username,
                        email: signInData.signInUserSession.idToken.payload.email,
                        password: "password",
                        profileImage: "profile image",
                        phone: "phone",
                        address1: "address 1",
                        address2: "address 2",
                        pincode: "pincode",
                        createdAt: new Date().toISOString(),
                        updatedAt: new Date().toISOString()
                    }
                    const res = await API.graphql(graphqlOperation(createProfile, {input: registerUserInput}))
                    console.log(res)
                } catch(err) {
                    console.log(err, err.response)
                }
            }
        }
    },
    updated(){
        console.log(this.$store.state, "FROM APP.VUE PRINTING STORE STATE")
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
            console.log(this.isAuthenticating, "IS AUTHENTICATING")
        } catch (err) {
            console.log("DISPATCHING LOGIN FAILURE")
            this.$store.dispatch("auth/loginFailure")
            this.isAuthenticating = false
            console.log(err, this.isAuthenticating, "IS AUTHENTICATING ERROR")
        }
        /*
        AmplifyEventBus.$on('authState', info => {
            console.log(info, "INFO FROM APP.VUE")
            switch(info){
                case "signIn":
                    this.registerNewUser()
                    break;
                case "signedIn":
                    this.signedIn = true
                    break;
                case "signUp":
                    break;
                case "signOut":
                    console.log("asignout manually")
            }
            if (info === 'signedIn') {
                this.signedIn = true
            } else {
                this.signedIn = false
            }
        });*/

        /*Hub.listen('auth', (info) => {
            console.log('auth event:', info)
            switch(info.payload.event){
                case "signIn":
                    console.log(this, "THIS KLEYWORD")
                    this.registerNewUser(info.payload.data)                    
                    break;
                case "signedIn":
                    this.signedIn = true
                    break;
                case "signUp":
                    this.signedIn = false
                    break;
                case "signOut":
                    this.signedIn = false
                    console.log("asignout manually")
                    break;
            }
        })*/
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