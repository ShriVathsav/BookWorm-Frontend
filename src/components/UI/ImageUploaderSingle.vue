<template>
    <div style="margin-bottom: 20px;">
        <div id="uploader-div">
            <input type="file" ref="imageInput" id="uploader-input" accept="image/*"
                @change="generateUrlAndBlob($event.target.files)" />
            <div style="display: flex; align-items: center; justify-content: center; flex-direction: column;">
                <img :src="imageUpload2Icon" style="height: 35px; width: 35px; margin-bottom: 10px;" />
                <h3 style="margin: 0px 0px 5px 0px; color: #00b782; font-size: 20px;">Drag and drop to upload image!</h3>
                <div class="color: gray; font-size: 14px;">...or click to select a file from your computer</div>
            </div>
        </div>
    </div>
</template>

<script>
import imageUpload2Icon from "../../static/Icons/OtherIcons/imageUpload2.svg"
import uploadImageIcon from "../../static/Icons/SellBookIcons/upload-image.svg"
//import vue2Dropzone from 'vue2-dropzone'
import 'vue2-dropzone/dist/vue2Dropzone.min.css'

export default {
    name: "ImageUploaderSingle",
    components: {},
    props: ["alterState", "inMemoryImage", "imageBlob"],
    data() {
        return {
            uploadImageIcon,
            imageUpload2Icon,
        }
    },
    methods: {
        generateUrlAndBlob(files) {
            console.log(files, 'FILES')
            const imageUrl = URL.createObjectURL(files[0])
            this.alterState("inMemoryImage", imageUrl)
            this.generateBlob(files[0])            
        },
        generateBlob(file){
            var reader = new FileReader()
            reader.onload = () => {
                var img = new Image;
                img.onload = () => {
                    console.log("The dimensions of the image is " + img.width + "px. "+ img.height + "px.")
                    this.alterState("uploadError", false)
                    this.alterState("errorMessage", "")
                    this.alterState("imageBlob", img)
                }
                img.onerror = () => {
                    this.alterState("uploadError", true)
                    this.alterState("errorMessage", "Invalid File Uploaded")
                };
                img.src = reader.result
            }
            reader.readAsDataURL(file);
            console.log(reader, "READER")
        }
    },
    created(){

    },
    updated(){
        console.log(this.imageBlobList, this.inMemoryImages, "IMAGE UPLOADER UPDATED")
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

#uploader-div{
    height: 150px;
    border: 2px dashed gray;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}
#uploader-div:hover{
    background-color: #eee;
}
#uploader-input{
    position: absolute;
    height: 100%;
    width: 100%;
    opacity: 0;
    cursor: pointer;
}
#uploader-text{
    color: gray;
    font-size: 16px;
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