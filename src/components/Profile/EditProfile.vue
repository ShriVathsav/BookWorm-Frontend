<template>
    <v-row justify="center">
        <v-dialog v-model="dialog" persistent width="600px" scrollable >
            <template v-slot:activator="{ on, attrs }">                
                <v-btn color="purple" v-bind="attrs" v-on="on"
                        id="action-button" >
                    <v-img class="button-icon" :src="editUserIcon" ></v-img>
                    <div>EDIT PROFILE</div>
                </v-btn> 
            </template>
            <v-card>
                <v-card-title class="headline" >
                    <div style="display: flex; align-items: center; justify-content: center;">
                        <v-img :src="editUserIcon" class="button-icon" ></v-img>
                        <div>Edit Profile</div>
                    </div>
                </v-card-title>
                
                <v-card-text style="padding: 14px 24px;">
                    <div style="text-align: center;" >
                        <div class="font-weight-bold pb-1" style="font-size: 18px;">{{this.profile.username}}</div>
                        <div style="font-size: 12px;" class="pb-4">Last Updated on {{formatTime(this.profile.updatedAt)}}</div>
                    </div>
                    <div>
                        <v-text-field filled label="Username" placeholder="Username" v-model="username"
                            ref="username" @input.native="textInputChangeOneSpace($event, 'username')"
                            color="purple" background-color="purple lighten-5" >
                        </v-text-field>
                        <v-text-field filled label="Contact Number" placeholder="Contact Number" v-model="phone"
                            ref="phone" @keypress.native="wholeNumberInputChange($event)"
                            color="purple" background-color="purple lighten-5" >
                        </v-text-field>
                        <v-text-field filled label="Address Line 1" placeholder="Address Line 1" v-model="addressLine1"
                            ref="addressLine1" @input.native="textInputChangeOneSpace($event, 'addressLine1')"
                            color="purple" background-color="purple lighten-5" >
                        </v-text-field>
                        <v-text-field filled label="Address Line 2" placeholder="Address Line 2" v-model="addressLine2"
                            ref="addressLine2" @input.native="textInputChangeOneSpace($event, 'addressLine2')"
                            color="purple" background-color="purple lighten-5" >
                        </v-text-field>
                        <v-text-field filled label="Pincode" placeholder="Pincode" v-model="pincode"
                            ref="pincode" @keypress.native="wholeNumberInputChange($event, 'pincode')"
                            color="purple" background-color="purple lighten-5" >
                        </v-text-field>
                        <div style="padding: 14px; margin-bottom: 18px; background-color: #FF5252; color: white;" 
                                v-if="profileError">
                            {{errorMessage}}
                        </div>
                    </div>
                </v-card-text>
                
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="red darken-1" text @click="discardChanges" >
                        DISCARD
                    </v-btn>
                    <v-btn color="purple" text @click="validateAndSubmit" :loading="editProfileLoading" >
                        UPDATE PROFILE
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-row>
</template>

<script>
import editUserIcon from "../../static/Icons/ProfileIcons/editProfile.svg"
import unknownUser2 from "../../static/Icons/ProfileIcons/unknownUser2.svg"
const API_URL1 = "https://4j5jc4gcn7.execute-api.ap-south-1.amazonaws.com/dev"

import axios from "axios"
import Profile from "../../models/Profile"
import {formatTime} from "../../utility/Helpers"

import {removeSpacesFromTextInput, allowWholeNumbers} from "../../utility/ValidateInputs"

export default {
    name: "EditProfile",
    components: {},
    props: ["profile", "alterState"],
    data(){
        return {
            dialog: false,

            editUserIcon,
            unknownUser2,
            formatTime,

            username: this.profile.username,
            phone: this.profile.phone,
            addressLine1: this.profile.address1,
            addressLine2: this.profile.address2,
            pincode: this.profile.pincode,
            editProfileLoading: false,
            profileError: false,
            errorMessage: ""
        }
    },
    methods: {
        validateAndSubmit(){
            const valid = this.editProfileValid()
            if(!valid){
                this.profileError = true
                this.errorMessage = "Please fill all the mandatory fields"
            } else {
                this.profileError = false
                this.errorMessage = ""
                this.updateProfile()
            }
        },
        editProfileValid(){
            return this.username !== "" &&
                this.phone !== "" &&
                this.addressLine1 !== "" &&
                this.addressLine2 !== "" &&
                this.pincode !== ""
        },
        wholeNumberInputChange(e){
            //console.log(e, "KEYPRESS EVENT")
            //const res = isNumber(e)
            const ress = allowWholeNumbers(e)
            console.log(ress, "IS NUMBER RESULT")
        },
        textInputChangeOneSpace(e, ref){
            const val = e.target.value
            this[ref] = removeSpacesFromTextInput(val)
        },
        discardChanges(){
            this.username = this.profile.username
            this.phone = this.profile.phone
            this.addressLine1 = this.profile.address1
            this.addressLine2 = this.profile.address2
            this.pincode = this.profile.pincode
            this.profileError = false
            this.errorMessage = ""

            this.dialog = false
        },
        /*async updateProfile2(){
            this.editProfileLoading = true
            try {
                const editProfileInput = {
                    id: this.$route.params.id,
                    phone: this.phone,
                    address1: this.addressLine1,
                    address2: this.addressLine2,
                    pincode: this.phone,
                    updatedAt: new Date().toISOString()
                }
                const res = await API.graphql(graphqlOperation(updateProfile, {input: editProfileInput}))
                console.log(res)
                this.profile.address1 = res.data.updateProfile.address1
                this.profile.address2 = res.data.updateProfile.address2
                this.profile.pincode = res.data.updateProfile.pincode
                this.profile.phone = res.data.updateProfile.phone
                this.profile.updatedAt = res.data.updateProfile.updatedAt
                this.editProfileLoading = false
                this.dialog = false
            } catch(err) {
                this.editProfileLoading = false
                console.log(err, err.response)
            }
        },*/
        updateProfile(){
            this.editProfileLoading = true
            const params = {
                username: this.username,
                phone: this.phone.toString(),
                address1: this.addressLine1,
                address2: this.addressLine2,
                pincode: this.pincode.toString(),
                updatedAt: new Date().toISOString()
            }
            console.log(params)
            axios.put(`${API_URL1}/profile/${this.$route.params.id}`, JSON.stringify(params)).then(res => {
                console.log(res)
                const profile = new Profile(res.data._id, res.data.cognitoid, res.data.username, res.data.email, 
                    res.data.password, res.data.profile_image, res.data.phone, res.data.address1, res.data.address2, 
                    res.data.pincode, res.data.created_at, res.data.updated_at)
                this.alterState("profile", profile)
                this.editProfileLoading = false
                this.dialog = false
            }).catch(err => {
                this.editProfileLoading = false
                this.profileError = true
                this.errorMessage = err.message || "An error occured"
                console.log(err.response)
            })
        }
    },
    created(){
        console.log(this.profile, "PROFILE PROPS")
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
    width: 35px;
    height: 35px;
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