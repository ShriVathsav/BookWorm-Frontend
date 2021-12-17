<template>
    <div>
        <SellBook :book="{}" :submitHandler="createBookHandler" :submitLoading="createBookLoading"
            :createBookErrorMessage="errorMessage" mode="create" />
    </div>
</template>

<script>
import SellBook from "./SellBook"
import axios from "axios"
//const API_URL1 = "https://4j5jc4gcn7.execute-api.ap-south-1.amazonaws.com/dev"
//const API_URL2 = "http://localhost:8080"

export default {
    name: "CreateBook",
    components: {SellBook},
    props: [],
    data() {
        return {
            createBookLoading: false,
            createSuccess: false,
            errorMessage: "",
            createBookError: false
        }
    },
    methods: {
        createBookHandler(input){
            input.profile = this.$store.getters['auth/getUserProfile'].id
            input.in_stock = true
            input.status = "ACTIVE"
            this.createBookLoading = true
            console.log("FROM CREATE BOOK COMPONENT")
            axios.post(`/book`, JSON.stringify(input)).then(res => {
                console.log(res)
                this.createBookLoading = false
                this.createSuccess = true
                this.createBookError = false
                this.errorMessage = ""
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