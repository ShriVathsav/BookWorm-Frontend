<template>
    <div>
        <div class="wrapper">
            <v-img :src="icon" id="image" style="width: 150px;" ></v-img>
            <div class="message">
                {{message}}
            </div>
        </div>
    </div>
</template>

<script>
import homePage from "../../static/Icons/goToHomePage.svg"

export default {
    name: "InfoPageButton",
    components: {},
    props: ["icon", "message"],
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
    padding: 14px 30px;
    font-size: 19px;
    height: 65px;
    color: white;
    /*border-radius: 0px;
    background-color: #54c8ff;
    color: white;*/
}

.image{
    width: 150px;
    height: 150px;
}

.home-icon{
    width: 45px;
    height: 45px;
    margin-right: 16px;
}

.message{
    margin: 26px 0px;
    text-align: center;
    font-weight: 700;
    font-size: 24px;
}
</style>