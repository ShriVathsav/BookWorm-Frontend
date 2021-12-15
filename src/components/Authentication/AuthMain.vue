<template>
    <div>
        <div>
            <v-card style="padding: 20px;">
                <v-tabs v-model="tab" centered style="padding: 10px;" >
                    <v-tabs-slider></v-tabs-slider>
                    <v-tab href="#tab-1" style="padding: 10px;">
                        <v-img :src="basic" style="width: 40px; height: 40px; margin-right: 10px;"></v-img>
                        <div style='font-size: 18px;'>LOGIN</div>
                    </v-tab>
                    <v-tab href="#tab-2">
                        <v-img :src="basic" style="width: 40px; height: 40px; margin: 10px;"></v-img>
                        <div style='font-size: 18px;'>REGISTER</div>
                    </v-tab>
                </v-tabs>
            </v-card>
        </div>
    </div>
</template>

<script>
//import Login from "./Login"
//import Register from "./Register"

import basic from "../../static/Icons/SellBookIcons/basic-details.svg"

export default {
    name: "AuthMain",
    //components: {Register, Login},
    props: [],
    data: () => {
        return {
            basic
        }
    },
    methods: {

    }
}
</script>

<style scoped>

</style>