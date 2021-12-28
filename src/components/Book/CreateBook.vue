<template>
    <div>
        <div v-if="!createSuccess">
            <SellBook :book="{}" :submitHandler="createBookHandler" :submitLoading="createBookLoading"
                :createBookErrorMessage="errorMessage" mode="create" />
        </div>
        <div v-else >
            <InfoPage :icon="postSuccessIcon" message="Your book has been posted successfully!"
                :buttonLink="`book/${createdBookId}`"  buttonMessage="VIEW BOOK" :buttonIcon="viewIcon" />
        </div>
    </div>
</template>

<script>
import SellBook from "./SellBook"
import axios from "axios"
import InfoPage from "../InfoPages/InfoPage"
import postSuccessIcon from "../../static/Icons/BookDisplayIcons/postSuccessIcon.svg"
import viewIcon from "../../static/Icons/BookDisplayIcons/viewIcon.svg"

export default {
    name: "CreateBook",
    components: {SellBook, InfoPage},
    props: [],
    data() {
        return {
            postSuccessIcon,
            viewIcon,
            createBookLoading: false,
            createSuccess: false,
            errorMessage: "",
            createBookError: false,
            createdBookId: ""
        }
    },
    methods: {
        createBookHandler(input){
            input.profile = this.$store.getters['auth/getUserProfile'].id
            input.in_stock = true
            input.status = "ACTIVE"
            this.createBookLoading = true
            console.log(input)
            axios.post(`/book`, JSON.stringify(input)).then(res => {
                console.log(res)
                this.createBookLoading = false
                this.createSuccess = true
                this.createBookError = false
                this.errorMessage = ""
                this.createdBookId = res.data._id
            }).catch(err => {
                this.createBookLoading = false
                this.editSuccess = false
                this.editBookError = true
                this.errorMessage = err.message || "An error occured"
                console.log(err.response)
            })
        },  
    }
}
</script>

<style scoped>

</style>