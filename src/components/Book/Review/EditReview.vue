<template>
    <div>
        <AddReview :review="{}" :submitHandler="editReviewHandler" :submitLoading="editReviewLoading" />
    </div>
</template>

<script>
import {updateReview} from "../../../graphql/mutations"
import { API, graphqlOperation } from 'aws-amplify'
import AddReview from "./AddReview"

export default {
    name: "EditReview",
    components: {AddReview},
    props: [],
    data() {
        return {
            editReviewLoading: false
        }
    },
    methods: {
        async editReviewHandler(input){
            try{
                const result = await API.graphql(graphqlOperation(updateReview, {input}))
                console.log(result, "RESULT EDIT REVIEW GRAPHQL")
                this.editReviewLoading = false
            } catch(err) {
                this.editReviewLoading = false
                console.log(err, err.response)
            }
        }
    }
}
</script>

<style scoped>

</style>