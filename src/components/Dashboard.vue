<template>
    <div>
        <SearchBook :alterState="alterState" :searchLoading="loading" :searchBookHandler="searchBookHandler" />
        <div v-if="loading" >
            <Loader />
        </div>
        <div v-else >
            <div v-if="$store.state.search.searchTerm !== ''" >
                <div style="margin: 40px 0px; font-weight: 700; font-size: 25px;">
                    Showing Results for "{{$store.state.search.searchTerm}}"
                </div>
                <Filters :searchBookHandler="searchBookHandler" :searchBookLoading="loading" />
                <div v-if="books.length !== 0">
                    <div style="display: flex; flex-flow: row wrap;" >
                        <div class="book-card" v-for="book in books" :key="book._id">
                            <BookCard :book="book" />
                        </div>
                    </div>
                </div>
                <div v-else >
                    <InfoPageButton :icon="searchBook" message="No results found. Please refine your search query." />
                </div>
            </div>
            <div v-else >
                <InfoPageButton :icon="searchBook" message="No results found. Please refine your search query." />
            </div>
        </div>
    </div>
</template>

<script>
import SearchBook from './SearchBook'
import BookCard from './Book/BookCard'
import Filters from './Book/Filters'
import Loader from './UI/Loader'
import InfoPageButton from './InfoPages/InfoPageButton'
import axios from "axios"
//const API_URL1 = "https://4j5jc4gcn7.execute-api.ap-south-1.amazonaws.com/dev"
//const API_URL2 = "http://localhost:8080"

import searchBook from "../static/Icons/OtherIcons/searchBook2.svg"
import viewIcon from "../static/Icons/BookDisplayIcons/viewIcon.svg"

export default {
    name: "Dashboard",
    components: {SearchBook, BookCard, Filters, Loader, InfoPageButton},
    props: [],
    data(){
        return {
            viewIcon,
            searchBook,
            books: this.$store.state.search.books,
            loading: false
        }
    },
    methods: {
        alterState(state, value){
            this[state] = value
        },
        searchBookHandler(){
            this.loading = true
            const params = {
                searchTerm: this.$store.state.search.searchTerm,
                category: this.$store.state.search.searchCategories.join(","),
                inStock: this.$store.state.search.inStockFilter,
                deliveryTime: this.$store.state.search.deliveryTimeFilter,
                condition: this.$store.state.search.conditionFilter,
                rating: this.$store.state.search.ratingFilter,
                minPrice: this.$store.state.search.minPriceFilter,
                maxPrice: this.$store.state.search.maxPriceFilter,
                bookType: this.$store.state.search.bookTypeFilter,
            }
            console.log(params, "PARAMS FILTERS")
            axios.get(`/book/search`, {
                params
            }, {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                }
            }).then(res => {
                const books = res.data ? res.data : []
                this.books = books
                this.$store.dispatch("search/setBooks", books)
                console.log(res.data, "LIST BOOKS")
                this.loading = false
            }).catch(err => {
                this.loading = false
                console.log(err.response)
            })
        }
    },
}
</script>

<style scoped>
.book-card{
    padding: 14px 7px;
}
.button-icon{
    width: 25px;
    height: 25px;
    margin-right: 10px;
}
#info-button{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 8px 30px;
    font-size: 14px;
    height: 35px;
    color: white;
    /*border-radius: 0px;
    background-color: #54c8ff;
    color: white;*/
}

/*ABOVE 990 PX*/
@media only screen and (min-width: 990px){
.book-card{
        width: 33.33%;
    }
}

/*BELOW 990 PX*/
@media only screen and (max-width: 990px){
.book-card{
        width: 50%;
    }
}

/*ABOVE 767 PX*/
@media only screen and (min-width: 767px){

}

/*BELOW 767 PX*/
@media only screen and (max-width: 767px){
.book-card{
        width: 100%;
    }
}

/*ABOVE 510 PX*/
@media only screen and (min-width: 510px){

}


/*BELOW 510 PX*/
@media only screen and (max-width: 510px){

}


/*ABOVE 900 PX*/
@media only screen and (min-width: 900px){
    
}

/*BELOW 900 PX*/
@media only screen and (max-width: 900px){
    
}

/*BELOW 600 PX*/
@media only screen and (max-width: 600px){
    
}
</style>