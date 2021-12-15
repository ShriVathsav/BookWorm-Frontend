<template>
    <div><!--style="position: fixed; z-index: 200; top: 0; left: 0; bottom: 0; right: 0;"-->
        <!--v-app-bar-nav-icon @click.stop="$store.dispatch('view/toggleSideDrawer', true)"></v-app-bar-nav-icon-->
        <v-navigation-drawer v-model="drawer" absolute temporary width="270" >
            <v-list>
                <v-list-item>
                    <v-list-item-avatar>
                        <v-img src="https://cdn.vuetifyjs.com/images/john.png"></v-img>
                    </v-list-item-avatar>
                </v-list-item>

                <v-list-item link>
                    <v-list-item-content>
                        <v-list-item-title class="title">
                            John Leider
                        </v-list-item-title>
                        <v-list-item-subtitle>john@vuetifyjs.com</v-list-item-subtitle>
                    </v-list-item-content>

                    <v-list-item-action>
                        <v-icon>mdi-menu-down</v-icon>
                    </v-list-item-action>
                </v-list-item>
            </v-list>

            <v-divider></v-divider>

            <v-list nav>
                <v-list-item-group active-class="deep-purple--text text--accent-4" >
                    <v-list-item @click="handleClick('/')">
                        <img :src="dashboardIcon" style="width: 30px; height: 30px;" class="mr-5" />
                        <v-list-item-title style="font-size: 15px;">Dashboard</v-list-item-title>
                    </v-list-item>

                    <v-list-item @click="handleClick('/sellbook')">
                        <img :src="sellBookIcon" style="width: 30px; height: 30px;" class="mr-5" />
                        <v-list-item-title style="font-size: 15px;">Post Book for Sale</v-list-item-title>
                    </v-list-item>

                    <v-list-item @click="handleClick('/profile/6056398392d4647c1bc056f7')">
                        <img :src="viewProfile" style="width: 30px; height: 30px;" class="mr-5" />
                        <v-list-item-title style="font-size: 15px;">My Profile</v-list-item-title>
                    </v-list-item>

                    <v-list-item @click="handleClick(`/profile/6056398392d4647c1bc056f7/cart`)">
                        <img :src="cart1Icon" style="width: 30px; height: 30px;" class="mr-5" />
                        <v-list-item-title style="font-size: 15px;">Cart</v-list-item-title>
                    </v-list-item>

                    <v-list-item>
                        <img :src="signOut1" style="width: 30px; height: 30px;" class="mr-5" />
                        <v-list-item-title style="font-size: 15px;">Sign Out</v-list-item-title>
                    </v-list-item>

                    <v-list-item @click="handleClick('/signin')">
                        <img :src="loginIcon" style="width: 30px; height: 30px;" class="mr-5" />
                        <v-list-item-title style="font-size: 15px;">Login</v-list-item-title>
                    </v-list-item>

                    <v-list-item @click="handleClick('/signup')">
                        <img :src="registerIcon" style="width: 30px; height: 30px;" class="mr-5" />
                        <v-list-item-title style="font-size: 15px;">Register</v-list-item-title>
                    </v-list-item>
                </v-list-item-group>
            </v-list>
        </v-navigation-drawer>
    </div>
</template>

<script>
import sellBookIcon from "../../static/Icons/AuthIcons/sellBookIcon.svg"
import dashboardIcon from "../../static/Icons/AuthIcons/dashboardIcon.svg"
import headerIcon from "../../static/Icons/AuthIcons/headerIcon.svg"
import signOut1 from "../../static/Icons/AuthIcons/signOut1.svg"
import signOut2 from "../../static/Icons/AuthIcons/signOut2.svg"
import viewProfile from "../../static/Icons/AuthIcons/viewProfile.svg"
import cart1Icon from "../../static/Icons/BookDisplayIcons/cart1.svg"
import cart2Icon from "../../static/Icons/BookDisplayIcons/cart2.svg"
import unknownUser2 from "../../static/Icons/ProfileIcons/unknownUser2.svg"
import loginIcon from "../../static/Icons/AuthIcons/loginIcon.svg"
import registerIcon from "../../static/Icons/AuthIcons/registerIcon.svg"
import hamburgerMenu1 from "../../static/Icons/AuthIcons/hamburgerMenu1.svg"
import hamburgerMenu2 from "../../static/Icons/AuthIcons/hamburgerMenu2.svg"

export default {
    name: "Header",
    components: {},
    props: [],
    data() {
        return {
            sellBookIcon,
            hamburgerMenu1,
            hamburgerMenu2,
            dashboardIcon,
            headerIcon,
            cart1Icon,
            cart2Icon,
            unknownUser2,
            signOut1,
            signOut2,
            viewProfile,
            loginIcon,
            registerIcon,

            selectedItem: 1,
            items: [
                { text: 'View Profile', icon: viewProfile },
                { text: 'Sign Out', icon: signOut1 },
                //{ text: 'Sign Out', icon: signOut2 },
            ],
            //drawer: false,
            group: null,
        }
    },
    watch: {
        group () {
            //this.drawer = false
        },
    },
    methods: {
        handleClick(route){
            this.$router.push(route)
        }
    },
    computed: {
        drawer: {
            get () {
                console.log(this.$store.state)
                return this.$store.state.view.sideDrawerOpen
            },
            set (value) {
                this.$store.dispatch('view/toggleSideDrawer', value)
            }
        }
    }
}
</script>

<style scoped>

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