<template>
    <v-row justify="center">
        <v-dialog v-model="dialog" persistent width="600px" scrollable >
            <template v-slot:activator="{ on, attrs }">
                <v-img :src="unknownUser2" max-width="150" v-bind="attrs" v-on="on" class="profile-image" ></v-img>    
            </template>
            <v-card>
                <v-card-title class="headline" >
                    <div style="display: flex; align-items: center; justify-content: center;">
                        <v-img :src="uploadImageIcon" class="button-icon" ></v-img>
                        <div>Upload Profile Image</div>
                    </div>
                </v-card-title>
                
                <v-card-text style="padding: 14px 24px;">
                    <div id="upload-image-container">
                        <div style="width: 100%;" class="mb-4">
                            <ImageUploaderSingle :imageBlob="imageBlob" :inMemoryImage="inMemoryImage"
                                :alterState="alterStateProfileImage" />
                        </div>
                        <div v-if="inMemoryImage">
                            <img :src="getProfileImage()" id="display-image" />
                        </div>
                        <div v-else>
                            <img :src="uploadImageIcon" id="display-image" />
                        </div>
                    </div>
                    <div style="padding: 14px; margin-top: 10px; background-color: #FF5252; color: white;"
                            v-if="uploadError">{{errorMessage}}
                    </div>
                </v-card-text>
                
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="red darken-1" text @click="discardChanges" >
                        DISCARD
                    </v-btn>
                    <v-btn color="purple" text @click="validateAndSubmit" :loading="loading"
                            :disabled="!imageBlob && !inMemoryImage" >
                        UPDATE
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-row>
</template>

<script>
import ImageUploaderSingle from "../UI/ImageUploaderSingle"
import uploadImageIcon from "../../static/Icons/SellBookIcons/upload-image.svg"
import unknownUser2 from "../../static/Icons/ProfileIcons/unknownUser2.svg"
import axios from "axios"

export default {
    name: "EditProfileImage",
    components: {ImageUploaderSingle},
    props: ["profileImage", "alterState", "profile"],
    data() {
        return {
            dialog: false,

            uploadImageIcon,
            unknownUser2,

            errorMessage: "",
            uploadError: false,
            imageBlob: null,
            inMemoryImage: "",
            loading: false
        }
    },
    methods: {
        getProfileImage(){
            if(this.inMemoryImage){
                return this.inMemoryImage
            }
            return this.profileImage
        },
        alterStateProfileImage(state, value){
            this[state] = value
        },
        discardChanges(){
            this.imageBlob = null
            this.inMemoryImage = ""
            this.dialog = false
        },
        validateAndSubmit(){
            if(this.imageBlob && this.inMemoryImage && !this.uploadError){
                this.errorMessage = ""
                this.uploadError = false
                this.updateProfileImage()
            } else {
                this.errorMessage = "Please Upload an image"
                this.uploadError = true
            }
        },
        updateProfileImage(){
            this.loading = true
            let data = new FormData()
            data.append('profileImage', this.image)
            data.append('profileId', this.$route.params.id)
            axios.put(`/profile/${this.$route.params.id}`, data,
            {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                }
            }).then(res => {
                console.log(res)                
                this.loading = false
                this.$store.dispatch("auth/changeProfileImage", res.data)
                const profile = {...this.profile}
                profile.profileImage = res.data
                this.alterState("profile", profile)
                this.dialog = false
            }).catch(err => {
                this.loading = false
                this.errorMessage = err.message || "An error occured"
                this.uploadError = true
                console.log(err.response)
            })
        },
    }
}
</script>

<style scoped>
#display-image{
    width: 150px;
    height: 150px;

}
.profile-image{
    width: 150px;
    height: 150px;
    cursor: pointer;
}
#upload-image-container{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center; 
    width: 100%;
}
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