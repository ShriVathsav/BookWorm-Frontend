<template>
    <v-footer dark padless color="purple" style="color: #9c27b0" >
        <v-card flat tile dark class="purple white--text text-center" style="width: 100%;" >
            <v-card-text >
                <div style="cursor: pointer; display: flex; justify-content: center; align-items: center;" 
                        class="mt-3" @click="$router.push('/')">
                    <img class="shrink mr-4" :src="headerIcon"
                        contain transition="scale-transition" width="40"  />
                    <div class="font-weight-bold main-header" style="color: white;">Book Worm</div>
                </div>
            </v-card-text>

            <v-card-text class="white--text pt-0">
                <div style="display: flex; justify-content: center; align-items: center; font-size: 16px;" >
                    Made with <img :src="footerIcon" style="height: 25px; width: 25px;" /> by Shrivaathsav S
                </div>
            </v-card-text>

            <v-divider></v-divider>

            <v-card-text class="white--text">                
                Copyrights {{ new Date().getFullYear() }} — <strong>Book Worm. All Rights are Reserved.</strong>
            </v-card-text>
        </v-card>
    </v-footer>
</template>

<script>
import headerIcon from "../../static/Icons/AuthIcons/headerIcon.svg"
import footerIcon from "../../static/Icons/footerIcon.svg"

export default {
    name: "Footer",
    components: {},
    props: [],
    data() {
        return {
            headerIcon,
            footerIcon
        }
    },
    methods: {

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