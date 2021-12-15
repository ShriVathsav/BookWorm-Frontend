<template>
    <div>
        <div style="font-size: 35px; font-weight: 700; text-align: center;">
            Sell a Book
        </div>
        <div class="mb-6 ma-2" style="text-align: center;" v-if="mode === 'create'">
            <div style="font-size: 12px;" class="mb-2" >
                Testing out this app? Click the below button to fill the form for you.
            </div>
            <v-btn rounded color="cyan lighten-1" dark @click="fillFormWithSampleData" >
                CLICK TO FILL THE FORM
            </v-btn>
        </div>
        <div class="outer">
            <div class="step-outer">
                <div class="step-container" @click="step = '1'" 
                    :style="`background-color: ${step === '1' ? '#9C27B0' : ''}; color: ${step === '1' ? 'white' : ''};`" >
                    <img :src="basicDetailsIcon" class="step-icon" />
                    <div class="step-text" >
                        Basic Details
                    </div>
                </div>
                <v-divider vertical></v-divider>
                <div class="step-container" @click="step = '2'"
                    :style="`background-color: ${step === '2' ? '#9C27B0' : ''}; color: ${step === '2' ? 'white' : ''};`" >
                    <img :src="publisherIcon" class="step-icon" />
                    <div class="step-text" >
                        Publisher Details
                    </div>
                </div>
                <v-divider vertical></v-divider>
                <div class="step-container" @click="step = '3'" 
                    :style="`background-color: ${step === '3' ? '#9C27B0' : ''}; color: ${step === '3' ? 'white' : ''};`" >
                    <img :src="priceDetailsIcon" class="step-icon" />
                    <div class="step-text" >
                        Price Details
                    </div>
                </div>
                <v-divider vertical></v-divider>
                <div class="step-container" @click="step = '4'"
                    :style="`background-color: ${step === '4' ? '#9C27B0' : ''}; color: ${step === '4' ? 'white' : ''};`" >
                    <img :src="uploadImageIcon" class="step-icon" />
                    <div class="step-text" >
                        Upload Images
                    </div>
                </div>                
            </div>
            <v-card style="padding: 24px; margin: 14px 0px; width: 100%; max-width: 600px;">

                <div v-if="step === '1'">
                    <div style="font-weight: 700; text-align: center; margin-bottom: 10px;">Basic Details</div>
                    <v-text-field filled label="Title of the Book*" placeholder="Enter title of the book" v-model="title"
                        ref="title" @input.native="textInputChangeOneSpace($event, 'title')" hint="hint" 
                        color="purple" background-color="purple lighten-5" persistent-hint  >
                    </v-text-field>
                    <v-textarea v-model="description" auto-grow filled color="purple" label="Description*"
                        rows="1" placeholder="Write something about the book" background-color="purple lighten-5"
                        ref="description" @input.native="textInputChangeOneSpace($event, 'description')" >
                    </v-textarea>
                    <v-select :items="categoriesList" filled label="Book Category*" placeholder="Book Category"
                        v-model="category" color="purple" background-color="purple lighten-5" item-color="purple">
                    </v-select>
                    <v-text-field filled label="Language*" placeholder="Language" v-model="language"
                        ref="language" @input.native="textInputChangeOneSpace($event, 'language')"
                        background-color="purple lighten-5" color="purple" >
                    </v-text-field>
                    <v-text-field filled label="Country of Origin*" placeholder="Country of Origin" v-model="countryOfOrigin"
                        ref="countryOfOrigin" @input.native="textInputChangeOneSpace($event, 'countryOfOrigin')" 
                        background-color="purple lighten-5" color="purple" >
                    </v-text-field>
                    <v-select :items="conditionList" filled label="Condition*" placeholder="Condition"
                        v-model="condition" background-color="purple lighten-5" color="purple" item-color="purple">
                    </v-select>
                    <v-text-field filled label="Dimensions" placeholder="Dimensions" v-model="dimensions"
                        ref="dimensions" @input.native="textInputChangeOneSpace($event, 'dimensions')"
                        background-color="purple lighten-5" color="purple" >
                    </v-text-field>

                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn tile color="cyan lighten-1" @click.native="alterStep('2')" >
                            <div class="mr-3" style="color: white;">CONTINUE</div>
                            <img :src="rightArrow" style="width: 20px; height: 20px;" />
                        </v-btn>
                    </v-card-actions>
                </div>
                <div v-if="step === '2'">
                    <div style="font-weight: 700; text-align: center; margin-bottom: 10px;">Publisher Details</div>
                    <v-text-field filled label="Author*" placeholder="Author" v-model="author"
                        ref="author" @input.native="textInputChangeOneSpace($event, 'author')" 
                        background-color="purple lighten-5" color="purple" >
                    </v-text-field>
                    <v-text-field filled label="Publisher*" placeholder="Publisher" v-model='publisher'
                        ref="publisher" @input.native="textInputChangeOneSpace($event, 'publisher')" 
                        background-color="purple lighten-5" color="purple" >
                    </v-text-field>
                    <v-text-field filled label="Number of Pages*" placeholder="Number of Pages" v-model="numberOfPages"
                        ref="numberOfPages" @keypress.native="wholeNumberInputChange($event, 'numberOfPages')" 
                        background-color="purple lighten-5" color="purple" >
                    </v-text-field>
                    <v-select :items="bookTypeList" filled label="Book Type*" placeholder="Book Type"
                        v-model="bookType" background-color="purple lighten-5" color="purple" item-color="purple" >
                    </v-select>
                    <v-text-field filled label="Year*" placeholder="Year" v-model="year" background-color="purple lighten-5"
                        ref="year" @input.native="textInputChangeOneSpace($event, 'year')" color="purple" >
                    </v-text-field>
                    <v-text-field filled label="Weight (in grams)*" placeholder="Weight in grams" v-model="weight"
                        ref="weight" @keypress.native="integerInputChange($event, 'weight')" 
                        background-color="purple lighten-5" color="purple" >
                    </v-text-field>
                    
                    <v-card-actions>
                        <v-btn tile color="cyan lighten-1" @click.native="alterStep('1')" >
                            <img :src="leftArrow" style="width: 20px; height: 20px;" />
                            <div class="ml-3" style="color: white;">BACK</div>
                        </v-btn>
                        <v-spacer></v-spacer>
                        <v-btn tile color="cyan lighten-1" @click.native="alterStep('3')" >
                            <div class="mr-3" style="color: white;">CONTINUE</div>
                            <img :src="rightArrow" style="width: 20px; height: 20px;" />
                        </v-btn>
                    </v-card-actions>
                </div>

                <div v-if="step === '3'">
                    <div style="font-weight: 700; text-align: center; margin-bottom: 10px;">Price Details</div>
                    <v-text-field filled label="Quantity*" placeholder="Quantity of Books you are planning to sell" 
                        ref="stocksLeft" @input.native="wholeNumberInputChange($event)" v-model="stocksLeft" 
                        background-color="purple lighten-5" color="purple" >
                    </v-text-field>
                    <v-text-field filled label="Estimated Delivery Time (In Days)*" placeholder="Estimated Delivery Time (In Days)" 
                        ref="deliveryTime" @keypress.native="wholeNumberInputChange($event)" v-model="deliveryTime" 
                        background-color="purple lighten-5" color="purple" >
                    </v-text-field>
                    <v-text-field filled label="Label Price of the book*" placeholder="Price in book" 
                        ref="price" @keypress.native="integerInputChange($event, 'price')" v-model="price" 
                        background-color="purple lighten-5" color="purple" >
                    </v-text-field>
                    <v-text-field filled label="Selling Price*" placeholder="Price which you are selling the book" v-model="sellingPrice"
                        ref="sellingPrice" @keypress.native="integerInputChange($event, 'sellingPrice')" 
                        background-color="purple lighten-5" color="purple" >
                    </v-text-field>
                    <v-text-field filled label="Is this a one time sale transaction*" placeholder="Selling Price" 
                        ref="sellingPrice" @input.native="numericInputChange($event, 'sellingPrice')" 
                        background-color="purple lighten-5" color="purple" >
                    </v-text-field>
                    <v-card-actions>
                        <v-btn tile color="cyan lighten-1" @click.native="alterStep('2')" >
                            <img :src="leftArrow" style="width: 20px; height: 20px;" />
                            <div class="ml-3" style="color: white;">BACK</div>
                        </v-btn>
                        <v-spacer></v-spacer>
                        <v-btn tile color="cyan lighten-1" @click.native="alterStep('4')" >
                            <div class="mr-3" style="color: white;">CONTINUE</div>
                            <img :src="rightArrow" style="width: 20px; height: 20px;" />
                        </v-btn>
                    </v-card-actions>                    
                </div>

                <div v-if="step === '4'">
                    <div style="font-weight: 700; text-align: center;" class="mb-3">Image Upload</div>
                    <div class="font-weight-bold" style="font-size: 14px;" >Upload Images</div>
                    <UploadedImagesModal :inMemoryImages="inMemoryImages" :uploadedImages="uploadedImages"
                        :deleteBookImage="deleteBookImage" />
                    <div style="font-size: 12px; color: gray;" class="mb-6" >
                        {{uploadedImages.length + inMemoryImages.length}} photos uploaded
                    </div>                    
                    <ImageUploader :inMemoryImages="inMemoryImages" :imageBlobList="imageBlobList" 
                        :alterState="alterState" />

                    <v-card-actions>
                        <v-btn tile color="cyan lighten-1" @click.native="alterStep('2')" >
                            <img :src="leftArrow" style="width: 20px; height: 20px;" />
                            <div class="ml-3" style="color: white;">BACK</div>
                        </v-btn>
                    </v-card-actions>
                    <div style="padding: 14px; margin-top: 10px; background-color: #FF5252; color: white;" v-if="error">
                        Please fill all the mandatory fields
                    </div>
                    <v-btn x-large block color="purple" style="margin-top: 14px;" 
                        @click.native="getPreSignedUrl" >
                        <img :src="sellBookIcon" style="width: 35px; height: 35px;" />
                        <div style="color: white" class="ml-4">POST BOOK FOR SALE</div>
                    </v-btn>
                    <v-btn x-large block color="purple" style="margin-top: 14px;" 
                        @click.native="validateBookAndSubmit" :loading="submitLoading" >
                        <img :src="sellBookIcon" style="width: 35px; height: 35px;" />
                        <div style="color: white" class="ml-4">POST BOOK FOR SALE</div>
                    </v-btn>
                </div>              
            </v-card>
        </div>
    </div>
</template>

<script>
import {validateNumeric, removeSpacesFromTextInput, 
        removeSpacesFromPasswordInput, allowWholeNumbers, allowIntegers} from "../../utility/ValidateInputs"

//import axios from "axios"
import ImageUploader from "../UI/ImageUploader2"
import UploadedImagesModal from "./UploadedImagesModal"
import basicDetailsIcon from "../../static/Icons/SellBookIcons/basic-details.svg"
import publisherIcon from "../../static/Icons/SellBookIcons/publish-details.svg"
import priceDetailsIcon from "../../static/Icons/SellBookIcons/price-details.svg"
import uploadImageIcon from "../../static/Icons/SellBookIcons/upload-image.svg"

import imageUpload1Icon from "../../static/Icons/OtherIcons/imageUpload1.svg"
import imageUpload2Icon from "../../static/Icons/OtherIcons/imageUpload2.svg"

import leftArrow from "../../static/Icons/OtherIcons/leftArrow2.svg"
import rightArrow from "../../static/Icons/OtherIcons/rightArrow2.svg"
import sellBookIcon from "../../static/Icons/AuthIcons/sellBookIcon.svg"
import { v4 as uuidv4 } from 'uuid';
import AWS from 'aws-sdk'
import dotenv from "dotenv"
dotenv.config()

export default {
    name: "SellBook",
    components: {ImageUploader, UploadedImagesModal},
    props: ["submitHandler", "book", "submitLoading", "mode"],
    data() {
        return {
            s3Bucket: process.env.VUE_APP_BUCKET_NAME,
            region: process.env.VUE_APP_BUCKET_REGION,
            myBucket: new AWS.S3({
                params: { Bucket: this.s3Bucket},
                signatureVersion: 'v4',
                region: this.region
            }),
            basicDetailsIcon,
            publisherIcon,
            priceDetailsIcon,
            uploadImageIcon,
            imageUpload1Icon,
            imageUpload2Icon,
            sellBookIcon,
            leftArrow,
            rightArrow,

            step: "1",

            id: this.book.id,
            title: this.book.title || "",
            price: this.book.price || "",
            sellingPrice: this.book.sellingPrice || "",
            description: this.book.description || "",
            language: this.book.language || "",
            category: this.book.category || "",
            countryOfOrigin: this.book.countryOfOrigin || "",
            condition: this.book.condition || "",
            dimensions: this.book.dimensions || "",
            author: this.book.author || "",
            publisher: this.book.publisher || "",
            numberOfPages: this.book.numberOfPages || "",
            bookType: this.book.bookType || "",
            year: this.book.year || "",
            weight: this.book.weight || "",
            stocksLeft: this.book.stocksLeft || "",
            deliveryTime: this.book.deliveryTime || "",

            conditionList: ['New Book', 'Old Book'],
            categoriesList: ['School', 'Engineering', 'Competitive', 
                'Arts & Science', 'Medicine', 'Children Stories'],
            bookTypeList: ['Hardcover', 'Paperback'],
            error: false,
            uploadedImages: [],
            inMemoryImages: [],
            deletedImages: [],
            imageBlobList: [],
            finalImagesList: []
        }
    },
    methods: {
        getPreSignedUrl(){
            //const s3 = new AWS.S3()
            const myBucket = this.s3Bucket
            const myKey = '0280bf3c-d532-4182-9e6a-38aedbc53196 - 3.png'
            const signedUrlExpireSeconds = 60 * 5
            const url = this.myBucket.getSignedUrl('getObject', {
                Bucket: myBucket,
                Key: myKey,
                Expires: signedUrlExpireSeconds
            })
            console.log(url, "PRINTING SIGNED URL")
        },
        async uploadImageToS3() {
            console.log("UPLOADING IMAGE")  
            const objectKeysArray = []     
            for(const file of this.imageBlobList){
                const objectKey = uuidv4() + " - " + file.name
                const params = {                    
                    Body: file,
                    Bucket: this.s3Bucket,
                    Key: objectKey,
                    ContentType: file.type
                }                
                console.log("UPLOADING IMAGE 2")
                try{
                    const res = await this.myBucket.putObject(params).promise()
                    console.log(objectKey, res, "OBJECT KEY")
                    objectKeysArray.push(objectKey)
                } catch(err){
                    console.log(err, err.response)
                }
                //let imagesList = this.uploadImageToS3()
            }
            const imagesList = [...this.prepareImagesList(), ...objectKeysArray]
            this.submitBook(imagesList)
        },
        /*uploadImageToBackend(){
            console.log(this.imageBlobList[0])

            let data = new FormData()
            this.imageBlobList.map(imageBlob => {
                data.append(uuidv4(), imageBlob)
            })
            //uuidv4()
            //data.append("file", this.imageBlobList[0])
            console.log("FROM CREATE BOOK COMPONENT")
            axios.post(`/book/uploadimage`, data, 
            {
                headers: {
                    "Content-Type": "multipart/form-data; charset=utf-8; boundary=" + Math.random().toString().substr(2)
                }
            }).then(res => {
                console.log(res)
                this.createBookLoading = false
            }).catch(err => {
                this.createBookLoading = false
                console.log(err.response)
            })
        },*/
        alterState(state, value){
            this[state] = value
        },
        alterStep(step){
            this.step = step
            this.scrollToTop()
        },
        deleteBookImage(index, list){
            if(list === "uploadedImages"){
                this.deletedImages.push(this.uploadedImages[index])
                this.uploadedImages.splice(index, 1)
            } else if(list === "inMemoryImages"){
                this.inMemoryImages.splice(index, 1)
                this.imageBlobList.splice(index, 1)
            }
        },
        // FUNCTION TO SCROLL TO TOP WHEN STEP CHANGES
        scrollToTop(){
            document.body.scrollTop = 0; // For Safari
            document.documentElement.scrollTop = 0;
        },
        formValid(){
            const isFormValid = this.title !== "" &&
                this.price !== "" &&
                this.sellingPrice !== "" &&
                this.description !== "" &&
                this.language !== "" &&
                this.category !== "" &&
                this.countryOfOrigin !== "" &&
                this.condition !== "" &&
                this.dimensions !== "" &&
                this.author !== "" &&
                this.publisher !== "" &&
                this.numberOfPages !== "" &&
                this.bookType !== "" &&
                this.year !== "" &&
                this.weight !== "" &&
                this.stocksLeft !== "" &&
                this.deliveryTime !== ""
            return !isFormValid
        },
        validateBookAndSubmit(){
            const error = this.formValid()
            if(error){
                this.error = true
            } else {
                this.error = false
                this.uploadImageToS3()
            }
        },
        prepareImagesList() {
            const uploadedImagesCopy = [...this.uploadedImages]
            this.deletedImages.map(image => {
                const index = this.uploadedImagesCopy.indexOf(image);
                if (index > -1) {
                    uploadedImagesCopy.splice(index, 1);
                }
            })
            return uploadedImagesCopy
        },
        submitBook(imagesList){
            console.log(this.finalImagesList, "IMAGES LIST PRINT")
            const params = {
                title: this.title,
                description: this.description,
                price: Number(this.price),
                selling_price: Number(this.sellingPrice),
                category: this.category,
                language: this.language,
                country_of_origin: this.countryOfOrigin,
                condition: this.condition,
                dimensions: this.dimensions,
                author: this.author,
                publisher: this.publisher,
                number_of_pages: Number(this.numberOfPages),
                book_type: this.bookType,
                year: this.year,
                weight: Number(this.weight),
                stocks_left: Number(this.stocksLeft),
                delivery_time: this.deliveryTime,
                images: imagesList,
                coverImage: imagesList[0]
            }
            this.submitHandler(params)
        },
        numericInputChange(e, ref){
            const val = e.target.value
            const prevVal = this[ref]
            console.log(this[ref], val, this.$refs[ref].value, validateNumeric(val, 0, 10**9))
            if(validateNumeric(val, 0, 10**9)){
                this[ref] = val
                console.log("true block", val)
            }else{
                this[ref] = prevVal
                console.log("false block", prevVal)
            }
        },
        handleInput(e, ref) {
            let val = e.target.value
            let stringValue = val.toString()
            let regex = /^\d*(\.\d{1,2})?$/
            if(!stringValue.match(regex) && this[ref]!== '') {
                this[ref] = val.replace(regex, "")
            }
            this.previousPrice = this.price
        },
        integerInputChange(e, ref){
            const ress = allowIntegers(e, this[ref])
            console.log(ress, "IS NUMBER RESULT")
        },
        wholeNumberInputChange(e){
            const ress = allowWholeNumbers(e)
            console.log(ress, "IS NUMBER RESULT")
        },
        textInputChangeNoSpaces(e, ref){
            const val = e.target.value
            this[ref] = removeSpacesFromPasswordInput(val)
            //this.$refs[ref].value = this[ref]
        },
        textInputChangeOneSpace(e, ref){
            const val = e.target.value
            this[ref] = removeSpacesFromTextInput(val)
        },
        fillFormWithSampleData(){
            this.title = "Sample Book Title"
            this.price = 235.5
            this.sellingPrice = 200.75
            this.description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            this.language = "English"
            this.category = this.categoriesList[3]
            this.countryOfOrigin = "India"
            this.condition = this.conditionList[0]
            this.dimensions = 256
            this.author = "Unknown Author"
            this.publisher = "Unknown Publisher"
            this.numberOfPages = 500
            this.bookType = this.bookTypeList[1]
            this.year = 2022
            this.weight = 466.7
            this.stocksLeft = 1
            this.deliveryTime = 7
            this.step = "4"
        }
    },
    created(){
        console.log(process.env, process.env.VUE_APP_BUCKET_NAME, process.env.VUE_APP_BUCKET_REGION, "PRINTING CONFIG VARS HEROKU")
    },
    updated() {
        console.log(this.inMemoryImages, this.imageBlobList, "SELL BOOK UPDATED")
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
.outer{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}
.step-outer{
    border: 1px solid rgba(0, 0, 0, 0.12);
    border-radius: 7px;
    display: flex;
    align-items: stretch;
    justify-content: stretch;
    width: 100%;
    max-width: 600px;
}
.step-container{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 14px;
    width: 33.33%;
    cursor: pointer;
    background-color: white;
}
.step-container:hover{
    background-color: #26C6DA;
    color: white;
}
.step-icon{
    width: 35px;
    height: 35px;
    margin-bottom: 7px;
}
.step-text{
    font-weight: 700;
    text-align: center;
    line-height: normal;
}

#info-button{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 10px 30px;
    font-size: 14px;
    height: 45px;
    color: white;
    /*border-radius: 0px;
    background-color: #54c8ff;*/
}
.button-icon{
    width: 25px;
    height: 25px;
    margin-right: 10px;
}

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
    .step-text{
        font-size: 14px;
    }
}
</style>