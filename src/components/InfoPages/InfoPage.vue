<template>
    <div>
        <div class="wrapper">
            <v-img :src="icon" id="image" ></v-img>
            <div class="message">
                {{message}}
            </div>
            <v-btn outlined color="cyan" @click.native="$router.push(buttonLink || '/')" id="info-button">
                <v-img class="home-icon" :src="buttonIcon || homePage" ></v-img>
                <div>{{buttonMessage || "GO TO HOMEPAGE"}}</div>
            </v-btn>
        </div>
    </div>
</template>

<script>
import homePage from "../../static/Icons/goToHomePage.svg"

export default {
    name: "InfoPage",
    components: {},
    props: ["icon", "message", "buttonIcon", "buttonMessage", "buttonLink"],
    data() {
        return {
            homePage
        }
    },
    methods: {

    }
}
</script>

<style scoped>
.wrapper{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 70px;
}

#info-button{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 12px 30px;
    font-size: 16px;
    height: 65px;
    color: white;
    /*border-radius: 0px;
    background-color: #54c8ff;
    color: white;*/
}

#image{
    width: 150px;
    height: 150px;
}

.home-icon{
    width: 35px;
    height: 35px;
    margin-right: 16px;
}

.message{
    margin: 26px 0px;
    text-align: center;
    font-weight: 700;
    font-size: 24px;
}
</style>