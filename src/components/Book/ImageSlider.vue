<template>
    <v-row justify="center" style="height: 100%">
        <v-dialog v-model="dialog" persistent scrollable >
            <template v-slot:activator="{ on, attrs }" class="ma-4">   
                <img :src="coverImage || emptyImage" @error="$event.target.src=emptyImage" v-bind="attrs" v-on="on" class="book-image pa-1" /> 
            </template>
            <v-card>
                <v-card-title class="headline" >
                    <div style="display: flex; align-items: center; justify-content: center;">
                        <v-img :src="uploadImageIcon" class="button-icon" ></v-img>
                        <div>View Images</div>
                    </div>
                </v-card-title>
                
                <v-card-text style="padding: 24px 14px 0px 14px;">
                    <div v-if="!!images && images.length === 0">
                        <InfoPageButton message="No Images Found" :icon="uploadImageIcon" />
                    </div>
                    <div>
                        <v-expand-transition>
                            <v-sheet v-if="model != null" height="330" tile >
                                <v-row class="fill-height" align="center" justify="center">
                                    <div style="height: 320px; width: 90%;
                                            display: flex; align-items: center; justify-content: center;">
                                        <img :src="images[model]" @error="$event.target.src=emptyImage" style="height: 100%; max-width: 100%; border: 2px solid #9C27B0;
                                            display: inline-block; margin: auto; text-align: center;" class="ma-2" />
                                    </div>
                                </v-row>
                            </v-sheet>
                        </v-expand-transition>
                        <v-slide-group v-model="model" class="pa-4" show-arrows >
                            <v-slide-item v-for="image in images" :key="image" v-slot="{ active, toggle }" >
                                <v-card :color="active ? 'purple' : 'cyan lighten-1'" class="ma-4 pa-1"
                                    height="100" width="100" @click="toggle" >
                                    
                                        <v-scale-transition>
                                            <img :src="image" @error="$event.target.src=emptyImage" style="height: 100%; width: 100%;" />
                                        </v-scale-transition>
                                    
                                </v-card>
                            </v-slide-item>
                        </v-slide-group>
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
import InfoPageButton from "../InfoPages/InfoPageButton"
import emptyImage from "../../static/Images/emptyImage.png"

export default {
    name: "ImageSlider",
    components: {InfoPageButton},
    props: ["images", "coverImage"],
    data() {
        return {
            dialog: false,
            model: null,

            uploadImageIcon,
            emptyImage
        }
    },
    methods: {
        invokeOnError(e){
            console.log(e, "PRINTING ERROR")
        }
    },
    created(){
        console.log(this.coverImage, this.images, "COVERIMAGE")
    },
    updated(){
        console.log(this.coverImage, this.images, "COVERIMAGE")
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
    /*border-radius: 0px;
    background-color: #54c8ff;
    color: white;*/
}
.button-icon{
    width: 25px;
    height: 25px;
    margin-right: 10px;
}
.book-image{
    width: 100%;
    height: 100%;
    display: inline-flex;
    max-height: 250px;
    max-width: 470px;
    border: 2px solid #9C27B0;
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

}
</style>