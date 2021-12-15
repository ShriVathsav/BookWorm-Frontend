<template>
    <div>
        <div v-if="loading" >
            <FullPageLoader />
        </div>
        <div v-else >
            <SellBook :book="book" :submitHandler="editBookHandler" :submitLoading="editBookLoading" mode="edit" />
        </div>
    </div>
</template>

<script>
import axios from "axios"
import SellBook from "./SellBook"
import FullPageLoader from "../UI/FullPageLoader"
import Book from "../../models/Book"

export default {
    name: "EditBook",
    components: {SellBook, FullPageLoader},
    props: [],
    data() {
        return {
            bookId: this.$route.params.id,
            book: {},
            loading: true,
            editBookLoading: false,
            editSuccess: false
        }
    },
    methods: {
        editBookHandler(input){
            this.editBookLoading = true
            input._id = this.book.id
            axios.put(`/book/${this.bookId}`, input,
            {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                }
            }).then(res => {
                this.editBookLoading = false
                console.log(res)
            }).catch(err => {
                this.editBookLoading = false
                console.log(err.response)
            })
        },
        setBookState(book){
            const newBook = new Book(                
                book.title,
                book.price,
                book.selling_price,
                book.category,
                book.stocks_left > 0,
                book.description,
                book.dimensions,
                book.number_of_pages,
                book.book_type,
                book.sold,
                book.author,
                book.year,
                book.weight,
                book.condition,
                book.publisher,
                book.stocks_left,
                book.delivery_date,
                book.country_of_origin,
                book.language,
                book.created_at,
                book.updated_at,
                book._id,
                book.profile,
                book.review_count,
                book.five_star,
                book.four_star,
                book.three_star,
                book.two_star,
                book.one_star
            )
            this.book = newBook
        },
    },
    created() {
        axios.get(`/book/${this.$route.params.id}`, {}, {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                }
        }).then(res => {
            console.log(res)
            this.setBookState(res.data)            
            this.loading = false
        }).catch(err => {
            this.loading = false
            console.log(err, err.response)
        })
    }
}
</script>

<style scoped>

</style>