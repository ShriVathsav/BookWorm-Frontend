<template>
    <div>
        <AddReview :review="{}" :submitHandler="createReviewHandler" :submitLoading="createReviewLoading" />
    </div>
</template>

<script>
import {createReview} from "../../../graphql/mutations"
import { API, graphqlOperation } from 'aws-amplify'
import AddReview from "./AddReview"

export default {
    name: "CreateReview",
    components: {AddReview},
    props: [],
    data() {
        return {
            createReviewLoading: false
        }
    },
    methods: {
        async createReviewHandler(input){
            try{
                const result = await API.graphql(graphqlOperation(createReview, {input}))
                console.log(result, "RESULT CREATE REVIEW GRAPHQL")
                this.createReviewLoading = false
            } catch(err) {
                this.createReviewLoading = false
                console.log(err, err.response)
            }
        }
    }
}
</script>

<style scoped>

</style>