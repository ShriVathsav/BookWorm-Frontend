<template>
    <div>
        <InfoPage :icon="pageNotFoundIcon" message="The Page you are looking for doesn`t exist." />
    </div>
</template>

<script>
import pageNotFoundIcon from "../../static/Icons/pageNotFoundIcon.svg"

import InfoPage from "./InfoPage"

export default {
    name: "PageNotFound",
    components: {InfoPage},
    props: [],
    data() {
        return {
            pageNotFoundIcon
        }
    },
    methods: {

    }
}
</script>

<style scoped>

</style>