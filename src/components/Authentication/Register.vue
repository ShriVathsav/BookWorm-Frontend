<template>
    <div>
        <div style="display: flex; flex-direction: row-reverse;">
            <v-card style="width: 100%; max-width: 600px; padding: 20px;">
                <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; margin-bottom: 20px;">
                    <v-img :src="registerIcon" style="width: 60px; height: 60px; margin-bottom: 7px;" ></v-img>
                    <div style="font-weight: 700; font-size: 18px;">CREATE ACCOUNT</div>
                </div>
                <div v-if="step === '1'">
                    <v-text-field filled label="Username" placeholder="Username" v-model="username" color="purple"
                        ref="username" @input.native="textInputChangeOneSpace($event, 'username')" >
                    </v-text-field>
                    <v-text-field filled label="Email" placeholder="Email" v-model="email" color="purple"
                        ref="email" @input.native="textInputChangeNoSpaces($event, 'email')" >
                    </v-text-field>
                    <v-text-field filled label="Password" placeholder="Password" v-model="password"
                        @click:append="showPassword = !showPassword" color="purple"
                        :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'" :type="showPassword ? 'text' : 'password'"
                        ref="password" @input.native="textInputChangeNoSpaces($event, 'password')"  >
                    </v-text-field>
                    <v-text-field filled label="Confirm Password" placeholder="Confirm Password" 
                        v-model="confirmPassword" @click:append="showConfirmPassword = !showConfirmPassword"
                        :append-icon="showConfirmPassword ? 'mdi-eye' : 'mdi-eye-off'" :type="showConfirmPassword ? 'text' : 'password'"
                        ref="confirmPassword" @input.native="textInputChangeNoSpaces($event, 'confirmPassword')" color="purple" >
                    </v-text-field>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="purple" dark tile style="width: 50%;" @click.native="step = '2'" >
                            <div class="mr-4" style="color: white;">CONTINUE</div>
                            <img :src="rightArrow" style="width: 20px; height: 20px;" />
                        </v-btn>
                    </v-card-actions>
                </div>

                <div v-if="step === '2'">
                    <v-card-actions style="margin-bottom: 14px;">
                        <v-btn color="purple" dark tile style="width: 50%;" @click.native="step = '1'" >                            
                            <img :src="leftArrow" style="width: 20px; height: 20px;" />
                            <div class="ml-4" style="color: white;">BACK</div>
                        </v-btn>
                    </v-card-actions>
                    <v-text-field filled label="Contact Number" placeholder="Contact Number" v-model="contactNumber"
                        ref="contactNumber" @keypress.native="wholeNumberInputChange($event)" color="purple" >
                    </v-text-field>
                    <v-text-field filled label="Address Line 1" placeholder="Address Line 1" v-model="addressLine1"
                        ref="addressLine1" @input.native="textInputChangeOneSpace($event, 'addrerssLine1')" color="purple" >
                    </v-text-field>
                    <v-text-field filled label="Address Line 2" placeholder="Address Line 2" v-model="addressLine2"
                        ref="addressLine2" @input.native="textInputChangeOneSpace($event, 'addressLine2')" color="purple" >
                    </v-text-field>
                    <v-text-field filled label="Pincode" placeholder="Pincode" v-model="pincode"
                        ref="pincode" @keypress.native="wholeNumberInputChange($event, 'pincode')" color="purple" >
                    </v-text-field>
                    <div style="padding: 14px; margin-bottom: 18px; background-color: #FF5252; color: white;" 
                            v-if="registerError">
                        {{errorMessage}}
                    </div>
                    <v-btn x-large block color="cyan lighten-1" dark @click="validateAndSubmit" :loading="loading">
                        <img :src="registerIcon" style="width: 35px; height: 35px;" />
                        <div class="ml-4">CREATE ACCOUNT</div>
                    </v-btn>
                </div>
                <div style="color: gray; text-align: center;  margin-top: 10px; font-size: 14px;">
                    Already have an account? 
                    <router-link to="/signin">
                        <span>Login here</span>
                    </router-link>
                </div>         
            </v-card>
        </div>
    </div>
</template>

<script>
import registerIcon from "../../static/Icons/AuthIcons/registerIcon.svg"
import leftArrow from "../../static/Icons/OtherIcons/leftArrow3.svg"
import rightArrow from "../../static/Icons/OtherIcons/rightArrow3.svg"
import {Auth} from 'aws-amplify'

import {validateEmail, removeSpacesFromTextInput, 
        removeSpacesFromPasswordInput, allowWholeNumbers} from "../../utility/ValidateInputs"

import axios from "axios"

const REQUIRED_FIELD = "This field is mandatory"

export default {
    name: "Register",
    components: {},
    props: [],
    data() {
        return {
            registerIcon,
            leftArrow,
            rightArrow,

            step: "1",

            email: "",
            username: "",
            password: "",
            confirmPassword: "",
            contactNumber: "",
            addressLine1: "",
            addressLine2: "",
            pincode: "",

            showPassword: false,
            showConfirmPassword: false,

            loading: false,
            registerError: false,
            errorMessage: "",

            emailError: REQUIRED_FIELD,
        }
    },
    methods: {
        validateAndSubmit(){
            const valid = this.registerFormValid()
            if(!valid){
                this.registerError = true
                this.errorMessage = "Please fill all the mandatory fields"
            } else {
                this.registerError = false
                this.errorMessage = ""
                this.registerUser()
            }
        },
        async registerUser(){
            this.loading = true            
            try {
                const res = await Auth.signUp({
                    username: this.email,
                    password: this.password,
                });
                console.log(res, "RESULT AFTER SIGN UP")
                //let message = "Signed in successfully! Welcome back!!";
                this.createProfile(res.userSub)
                this.loading = false              
                //auth.setAuthenticated(true);
                //auth.setUser(res);
                this.$store.dispatch("auth/registerSuccess")
                this.$router.push("/confirmSignUp")
            } catch (err) {
                this.$store.dispatch("auth/registerFailure")
                this.registerError = true
                this.errorMessage = err.message || "Something went Wrong"
                this.loading = false
                console.log(err)
            }
            
        },
        createProfile(cognitoId){
            const params = {
                email: this.email,
                username: this.username,
                cognitoid: cognitoId,
                password: this.password,
                phone: this.contactNumber,
                address1: this.addressLine1,
                address2: this.addressLine2,
                pincode: this.pincode,
            }
            console.log(params)
            axios.post(`/profile`, params,
            {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                }
            }).then(res => {
                console.log(res)
            }).catch(err => {
                console.log(err.response)
                //this.$store.dispatch("auth/register", res.data, 0)
            })
        },
        registerFormValid(){
            return validateEmail(this.email) && 
                    this.password.trim() !== "" && 
                    this.username.trim() !== "" && 
                    this.password === this.confirmPassword &&
                    this.contactNumber.trim() !== ""
        },
        wholeNumberInputChange(e){
            //console.log(e, "KEYPRESS EVENT")
            //const res = isNumber(e)
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
        emailValid(){
            if(this.email === ""){
                this.emailError = REQUIRED_FIELD
            } else if(!validateEmail(this.email)){
                this.emailError = "Not a Valid Email"
            }
            return validateEmail(this.email)
        }
    }
}
</script>

<style scoped>

</style>