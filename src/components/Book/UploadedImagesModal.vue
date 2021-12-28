<template>
    <v-row justify="center">
        <v-dialog v-model="dialog" persistent width="950px" scrollable >
            <template v-slot:activator="{ on, attrs }">
                <div class="my-4">
                    <v-btn outlined color="cyan" v-bind="attrs" v-on="on" id="info-button">
                        <v-img class="button-icon" :src="uploadImageIcon" ></v-img>
                        <div>VIEW UPLOADED IMAGES</div>
                    </v-btn>
                </div>
            </template>
            <v-card>
                <v-card-title class="headline" >
                    <div style="display: flex; align-items: center; justify-content: center;">
                        <v-img :src="uploadImageIcon" class="button-icon" ></v-img>
                        <div>View Images ({{displayImagesList.length + inMemoryImages.length}})</div>
                    </div>
                </v-card-title>
                
                <v-card-text style="padding: 14px 24px;">
                    <div>
                        <div v-if="displayImagesList.length === 0 && inMemoryImages.length === 0">
                            <InfoPageButton message="No Images Uploaded" :icon="uploadImageIcon" />
                        </div>
                        <div v-else id="image-container-wrapper" >
                            <div v-for="(images, index) in displayImagesList" :key="images" >
                                <div class="image-container" >
                                    <img :src="images" style="height: 130px; width: 130px;" />
                                    <img :src="deleteBookImageIcon" @click="deleteBookImage(index, 'uploadedImages')"
                                        style="height: 35px; width: 35px; cursor: pointer; margin-top: 14px;" />
                                </div>
                            </div>

                            <div v-for="(images, index) in inMemoryImages" :key="images" >
                                <div class="image-container" >
                                    <img :src="images" style="height: 130px; width: 130px;" />
                                    <img :src="deleteBookImageIcon" @click="deleteBookImage(index, 'inMemoryImages')"
                                        style="height: 35px; width: 35px; cursor: pointer; margin-top: 14px;" />
                                </div>
                            </div>
                        </div>
                    </div>
                </v-card-text>
                
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="red darken-1" text @click="dialog = false" >
                        CLOSE
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-row>
</template>

<script>
import uploadImageIcon from "../../static/Icons/SellBookIcons/upload-image.svg"
import deleteBookImageIcon from "../../static/Icons/SellBookIcons/deleteBookImageIcon.svg"
import InfoPageButton from "../InfoPages/InfoPageButton"

export default {
    name: "UploadedImagesModal",
    components: {InfoPageButton},
    props: ["uploadedImages", "inMemoryImages", "deleteBookImage", "displayImagesList"],
    data() {
        return {
            dialog: false,
            uploadImageIcon,
            deleteBookImageIcon,
        }
    },
    created(){
        console.log(this.uploadedImages, this.inMemoryImages)
    },
    methods: {

    }
}
</script>

<style scoped>
#info-button{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 10px 30px;
    font-size: 14px;
    height: 45px;
    color: white;
    margin: 16px;
    /*border-radius: 0px;
    background-color: #54c8ff;*/
}
.button-icon{
    width: 25px;
    height: 25px;
    margin-right: 10px;
}
#image-container-wrapper{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: row wrap;
}
.image-container{
    border: 1px solid gray;
    border-radius: 3px;
    padding: 12px;
    margin: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
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