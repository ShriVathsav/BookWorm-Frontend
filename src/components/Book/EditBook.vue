<template>
    <div>
        <div v-if="loading" >
            <FullPageLoader />
        </div>
        <div v-else >
            <div v-if="!editSuccess" >
                <SellBook :book="book" :submitHandler="editBookHandler" :submitLoading="editBookLoading" 
                    :editBookErrorMessage="errorMessage" mode="edit" :displayImages="displayImages" />
            </div>
            <div v-else >
                <InfoPage :icon="postSuccessIcon" message="Your book has been edited successfully!"
                    :buttonLink="`/book/${$route.params.id}`"  buttonMessage="VIEW BOOK" :buttonIcon="viewIcon" />
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios"
import SellBook from "./SellBook"
import FullPageLoader from "../UI/FullPageLoader"
import Book from "../../models/Book"
import AWS from 'aws-sdk'
import InfoPage from "../InfoPages/InfoPage"
import postSuccessIcon from "../../static/Icons/BookDisplayIcons/postSuccessIcon.svg"
import viewIcon from "../../static/Icons/BookDisplayIcons/viewIcon.svg"
require("dotenv").config()

export default {
    name: "EditBook",
    components: {SellBook, FullPageLoader, InfoPage},
    props: [],
    data() {
        return {
            s3Bucket: process.env.VUE_APP_BUCKET_NAME,
            region: process.env.VUE_APP_BUCKET_REGION,
            myBucket: new AWS.S3({
                params: { Bucket: process.env.VUE_APP_BUCKET_NAME},
                signatureVersion: 'v4',
                region: process.env.VUE_APP_BUCKET_REGION
            }),

            postSuccessIcon,
            viewIcon,

            bookId: this.$route.params.id,
            book: {},
            loading: true,
            editBookLoading: false,
            editSuccess: false,
            errorMessage: "",
            editBookError: false,
            displayImages: []
        }
    },
    methods: {
        editBookHandler(input){
            this.editBookLoading = true
            input._id = this.book.id
            axios.put(`/book/${this.bookId}`, input,
            ).then(res => {
                this.editBookLoading = false
                console.log(res)
                this.editSuccess = true
                this.editBookError = false
                this.errorMessage = ""
            }).catch(err => {
                this.editBookLoading = false
                this.editSuccess = false
                this.editBookError = true
                this.errorMessage = err.message || "An error occured"
                console.log(err.response)
            })
        },
        async getPresignedUrls(image){
            return new Promise((resolve,reject) => {
                const myBucket = this.s3Bucket
                const myKey = image
                const signedUrlExpireSeconds = 60 * 5
                const params = {
                    Bucket: myBucket,
                    Key: myKey,
                    Expires: signedUrlExpireSeconds
                }
                this.myBucket.getSignedUrl('getObject', params, (err, url) => {
                    if (err) reject(err);
                    resolve(url);
                });
            })
        },
        async setBookState(book){
            const imagesList = []
            if(book.images){
                for (let image of book.images) {
                    const signedUrl = await this.getPresignedUrls(image)
                    imagesList.push(signedUrl)
                }   
            }
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
                book.delivery_time,
                book.country_of_origin,
                book.language,
                book.coverimage,
                book.images,
                book.status,
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
            this.displayImages = imagesList
            this.book = newBook
            this.loading = false
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
        }).catch(err => {
            this.loading = false
            console.log(err, err.response)
        })
    },
    beforeCreate(){
        AWS.config.update({
            accessKeyId: process.env.VUE_APP_ACCESS_KEY,
            secretAccessKey: process.env.VUE_APP_SECRET_ACCESS_KEY
        })
    }
}
</script>

<style scoped>

</style>