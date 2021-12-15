<template>
    <div>
        <v-btn outlined color="lime darken-2" @click.native="wholeNumberInputChange"
                id="action-button" >
            <v-img class="button-icon" :src="updateStockIcon" ></v-img>
            <div>UPDATE STOCK</div>
        </v-btn>  
        <vue-dropzone
            :options="dropzoneOptions"
            :include-styling="false"
            v-on:vdropzone-thumbnail="thumbnail"
            id="customdropzone">
        </vue-dropzone>
    </div>
</template>

<script>
import updateStockIcon from "../../static/Icons/BookDisplayIcons/updateStock.svg"
import vue2Dropzone from 'vue2-dropzone'
import 'vue2-dropzone/dist/vue2Dropzone.min.css'

export default {
    name: "ImageUploader",
    components: {vueDropzone: vue2Dropzone},
    props: [],
    data: () => {
        return {
            hello: false,
            dropzoneOptions: {
                url: 'https://httpbin.org/post',
                thumbnailWidth: 150,
                maxFilesize: 0.5,
                headers: { "My-Awesome-Header": "header value" },
                previewTemplate: null
            },

            updateStockIcon
        }
    },
    methods: {
        template: function () {
            return `<div class="dz-preview dz-file-preview">
                    <div class="dz-image">
                        <div data-dz-thumbnail-bg></div>
                    </div>
                    <div class="dz-details">
                        <div class="dz-size"><span data-dz-size></span></div>
                        <div class="dz-filename"><span data-dz-name></span></div>
                    </div>
                    <div class="dz-progress"><span class="dz-upload" data-dz-uploadprogress></span></div>
                    <div class="dz-error-message"><span data-dz-errormessage></span></div>
                    <div class="dz-success-mark"><i class="fa fa-check"></i></div>
                    <div class="dz-error-mark"><i class="fa fa-close"></i></div>
                </div>
            `;
        },
        thumbnail: function(file, dataUrl) {
            var j, len, ref, thumbnailElement;
            if (file.previewElement) {
                file.previewElement.classList.remove("dz-file-preview");
                ref = file.previewElement.querySelectorAll("[data-dz-thumbnail-bg]");
                for (j = 0, len = ref.length; j < len; j++) {
                    thumbnailElement = ref[j];
                    thumbnailElement.alt = file.name;
                    thumbnailElement.style.backgroundImage = 'url("' + dataUrl + '")';
                }
                return setTimeout(((function() {
                    return function() {
                        return file.previewElement.classList.add("dz-image-preview");
                    };
                })(this)), 1);
            }
        },
    },
    updated(){
        console.log(this. this.hello)
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

#customdropzone {
    background-color: orange;
    font-family: 'Arial', sans-serif;
    letter-spacing: 0.2px;
    color: #777;
    transition: background-color .2s linear;
    height: 200px;
    padding: 40px;
  }

  #customdropzone .dz-preview {
    width: 160px;
    display: inline-block
  }
 #customdropzone .dz-preview .dz-image {
    width: 80px;
    height: 80px;
    margin-left: 40px;
    margin-bottom: 10px;
  }
  #customdropzone .dz-preview .dz-image > div {
    width: inherit;
    height: inherit;
    border-radius: 50%;
    background-size: contain;
  }
  #customdropzone .dz-preview .dz-image > img {
    width: 100%;
  }

   #customdropzone .dz-preview .dz-details {
    color: white;
    transition: opacity .2s linear;
    text-align: center;
  }
  #customdropzone .dz-success-mark, .dz-error-mark, .dz-remove {
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