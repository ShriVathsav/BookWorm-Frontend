<template>
    <div>
        <div style="display: flex; flex-direction: row-reverse;">
            <v-card style="width: 100%; max-width: 600px; padding: 20px;">
                <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; margin-bottom: 20px;">
                    <v-img :src="confirmSignUpIcon" style="width: 60px; height: 60px; margin-bottom: 7px;" ></v-img>
                    <div style="font-weight: 700; font-size: 18px;">CONFIRM SIGN UP</div>
                </div>
                <div style="margin-bottom: 16px; font-size: 14px;">
                    Enter the verification code sent to your email to confirm your account.
                </div>
                <v-text-field filled label="Username or Email" placeholder="Username or Email" 
                    v-model="email" @input.native="emailChange($event)" color="purple" >
                </v-text-field>
                <v-text-field filled label="Verification Code" placeholder="Verification Code" v-model="code"
                    ref="code" @keypress.native="wholeNumberInputChange($event, 'code')" color="purple" >
                </v-text-field>
                <div style="padding: 14px; margin-bottom: 18px; background-color: #FF5252; color: white;" v-if="confirmSignUpError">
                    {{errorMessage}}
                </div>
                <v-btn block x-large color="cyan lighten-1" dark @click="validateAndSubmit" :loading="loading" >
                    <img :src="confirmSignUpIcon" style="width: 35px; height: 35px;" />
                    <div class="ml-4">CONFIRM SIGN UP</div>
                </v-btn>
            </v-card>
        </div>
    </div>
</template>

<script>
import confirmSignUpIcon from "../../static/Icons/AuthIcons/confirmSignUpIcon.svg"
import {validateEmail, removeSpacesFromPasswordInput, allowWholeNumbers} from "../../utility/ValidateInputs"
import {Auth} from 'aws-amplify'
const REQUIRED_FIELD = "This field is mandatory"

export default {
    name: "ConfirmSignUp",
    components: {},
    props: [],
    data() {
        return {
            confirmSignUpIcon,
            
            email: "",
            code: "",
            confirmSignUpError: false,
            errorMessage: "",
            loading: false,
        }
    },
    methods: {
        validateAndSubmit(){
            const valid = this.confirmSignUpValid()
            if(!valid){
                this.confirmSignUpError = true
                this.errorMessage = "Please fill all the mandatory fields"
            } else {
                this.confirmSignUpError = false
                this.errorMessage = ""
                this.confirmSignUp()
            }
        },
        async confirmSignUp(){
            this.loading = true
            try {
                const res = await Auth.confirmSignUp(this.email, this.code);
                console.log(res)
                if(res === "SUCCESS"){
                    this.loading = false
                    this.$router.push("/signin")
                } else {
                    this.loading = false
                }
            } catch (error) {
                console.log('error confirming sign up', error);
                this.confirmSignUpError = true
                this.errorMessage = error.message || "Something went Wrong"
                this.loading = false
            }
        },
        confirmSignUpValid(){
            return validateEmail(this.email) && this.code !== ""
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