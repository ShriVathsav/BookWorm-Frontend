<template>
    <div>
        <div style="display: flex; flex-direction: row-reverse;">
            <v-card style="width: 100%; max-width: 600px; padding: 20px;">
                <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; margin-bottom: 20px;">
                    <v-img :src="resetPasswordIcon" style="width: 60px; height: 60px; margin-bottom: 7px;" ></v-img>
                    <div style="font-weight: 700; font-size: 18px;">RESET PASSWORD</div>
                </div>
                <div style="margin-bottom: 16px; font-size: 14px;">
                    Enter the email address associated with your account. A verification code will be sent.
                </div>
                <v-text-field filled label="Username or Email" placeholder="Username or Email" 
                    v-model="email" @input.native="emailChange($event)" color="purple" >
                </v-text-field>
                <div style="padding: 14px; margin-bottom: 18px; background-color: #FF5252; color: white;" v-if="forgotPasswordError">
                    {{errorMessage}}
                </div>
                <v-btn block x-large color="cyan lighten-1" dark @click="validateAndSubmit" :loading="loading" >
                    <img :src="sendCodeIcon" style="width: 35px; height: 35px;" />
                    <div class="ml-4">SEND CODE</div>
                </v-btn>
            </v-card>
        </div>
    </div>
</template>

<script>
import sendCodeIcon from "../../static/Icons/AuthIcons/sendCodeIcon.svg"
import resetPasswordIcon from "../../static/Icons/AuthIcons/resetPasswordIcon.svg"
import {validateEmail, removeSpacesFromPasswordInput, allowWholeNumbers} from "../../utility/ValidateInputs"
import {Auth} from 'aws-amplify'

const REQUIRED_FIELD = "This field is mandatory"

export default {
    name: "ForgotPassword",
    components: {},
    props: [],
    data() {
        return {
            sendCodeIcon,
            resetPasswordIcon,
            
            email: "",
            loading: false,
            error: false,
            forgotPasswordError: false,
            errorMessage: "",
        }
    },
    methods: {
        validateAndSubmit(){
            const valid = this.sendCodeValid()
            if(!valid){
                this.forgotPasswordError = true
                this.errorMessage = "Please fill all the mandatory fields";
            } else {
                this.forgotPasswordError = false
                this.errorMessage = "";
                this.sendCode()
            }
        },
        async sendCode() {
            this.loading = true
            try {
                await Auth.forgotPassword(this.email);
                this.loading = false
                this.$router.history.push(`/setNewPassword/${this.email}`);
            } catch (err) {
                this.forgotPasswordError = true
                this.errorMessage = err.message || "Something went wrong!";
                this.loading = false
            }
        },
        sendCodeValid(){
            return validateEmail(this.email)
        },
        emailChange(e){
            const val = e.target.value
            this.email = removeSpacesFromPasswordInput(val)
            //this.$refs[ref].value = this[ref]
        },
        wholeNumberInputChange(e){
            const ress = allowWholeNumbers(e)
            console.log(ress, "IS NUMBER RESULT")
        },
        emailValid(){
            if(this.username === ""){
                this.emailError = REQUIRED_FIELD
            } else if(!validateEmail(this.username)){
                this.emailError = "Not a Valid Email"
            } else {
                this.emailError = ""
            }
            return validateEmail(this.username)
        }
    }
}
</script>

<style scoped>

</style>