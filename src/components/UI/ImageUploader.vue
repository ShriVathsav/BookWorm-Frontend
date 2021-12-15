<template>
    <div>        
        <vue-dropzone ref="myVueDropzone" id="dropzone" :options="dropzoneOptions" 
            v-on:vdropzone-sending="sendingEvent"></vue-dropzone>

        <div id="hello" class="dropzone-previews"></div>
    </div>
</template>

<script>
import updateStockIcon from "../../static/Icons/BookDisplayIcons/updateStock.svg"
import vue2Dropzone from 'vue2-dropzone'
import 'vue2-dropzone/dist/vue2Dropzone.min.css'

export default {
    name: "ImageUploader",
    components: {vueDropzone: vue2Dropzone},
    props: ["maxFiles"],
    data: () => {
        return {
            hello: false,
            dropzoneOptions: {
                url: 'https://httpbin.org/post',
                thumbnailWidth: 150,
                thumbnailHeight: 100,
                dictDefaultMessage: "",
                addRemoveLinks: true,
                createImageThumbnails: true,
                acceptedFiles: "image/*",
                //previewsContainer: document.getElementById("hello"),
                //dictMaxFilesExceeded: "Shriv files Exceeded",
                dictInvalidFileType: "Invalid File Type. Upload an Image",
                maxFiles: 10,
                maxFileSize: 5
            },

            updateStockIcon
        }
    },
    methods: {
        sendingEvent (file, xhr, formData) {
            console.log(this.dropzoneOptions)
            console.log(file, xhr, formData)
            formData.append('paramName', file);
            for (var pair of formData.entries()) {
                console.log(pair[0]+ ', ' + pair[1]); 
            }
        },
        wholeNumberInputChange(){
            console.log("from image uploader", "IS NUMBER RESULT")
            this.hello = !this.hello
        },
        readURL(files) {
            if (files && files[0]) {
                this.image = files[0]
                this.imageUrl = URL.createObjectURL(files[0])
                var reader = new FileReader();
                const that = this
                reader.onload = function (e, that1=that) {
                    var img = new Image;
                    img.onload = function(e, that2=that1) {
                        console.log("The dimensions of the image is " + img.width + "px. "+ img.height + "px.")
                        //that2.imageHeight = img.height
                        that2.imageWidth = img.width
                        that2.uploadSuccess = 1
                        that2.uploadError = false
                    }
                    img.onerror = function() {
                        // doesn't exist or error loading
                        console.log("doesnt support")
                        that1.errorMessage = "Invalid File Uploaded"
                        that1.uploadSuccess = 0
                    };
                    img.src = reader.result;
                }
                reader.readAsDataURL(files[0]);
            }
        },
    },
    created(){
        this.dropzoneOptions.dictDefaultMessage = `
            <div class="dropzone-custom-content">
                <h3 style="margin: 0px 0px 5px 0px; color: #00b782; font-size: 20px;">Drag and drop to upload image!</h3>
                <div class="color: #314b5f;">...or click to select a file from your computer</div>
            </div>
        `
    },
    updated(){
        console.log(this.dropzoneOptions)
    },
    mounted(){
        console.log(document.getElementById("hello"))
        //this.dropzoneOptions.previewsContainer = document.getElementById("hello")
        this.dropzoneOptions.maxFiles = this.maxFiles || 10
    }
}
</script>

<style scoped>
#action-button{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    height: 45px;
    color: white;
}
.button-icon{
    width: 25px;
    height: 25px;
    margin-right: 10px;
}
.dz-preview, .dz-file-preview {
    display: none;
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
    #action-button{
        padding: 10px 30px;
        margin: 12px;
    }
}


/*BELOW 510 PX*/
@media only screen and (max-width: 510px){
    #action-button{
        padding: 7px 10px;
        margin: 4px;   
    }
    .button-icon{
        margin-right: 7px;
    }
}
</style>