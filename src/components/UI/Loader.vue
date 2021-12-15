<template>
    <div class="my-5" style="display: flex; align-items: center; justify-content: center; flex-direction: column; height: 300px;">
        <v-progress-circular :size="70" :width="7" color="purple"
            indeterminate ></v-progress-circular>
        <div style="color: #9c27b0;" class="font-weight-bold mt-4">LOADING...</div>
    </div>
</template>

<script>

export default {
    name: "Loader",
    components: {},
    props: [],
    data() {
        return {

        }
    },
    methods: {

    },

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