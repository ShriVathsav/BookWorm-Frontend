<template>
    <div>
        <InfoPage message="Uh Oh! It seems you are lost." :icon="error404Icon" />  
    </div>
</template>

<script>
import InfoPage from "./InfoPage"
import error404Icon from "../../static/Icons/error404Icon.svg"

export default {
    name: "Error404Page",
    components: {InfoPage},
    props: [],
    data: () => {
        return {
            error404Icon
        }
    },
    methods: {

    }
}
</script>

<style scoped>

</style>