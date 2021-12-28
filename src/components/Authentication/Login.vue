<template>
    <div>
        <div style="display: flex; flex-direction: row-reverse;">
            <v-card style="width: 100%; max-width: 600px; padding: 20px;">
                <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; margin-bottom: 20px;">
                    <v-img :src="loginIcon" style="width: 60px; height: 60px; margin-bottom: 7px;" ></v-img>
                    <div style="font-weight: 700; font-size: 18px;">LOGIN</div>
                </div>
                <v-text-field filled label="Username or Email" placeholder="Username or Email" 
                    v-model="email" @input.native="emailChange($event)" color="purple" >
                </v-text-field>
                <v-text-field filled label="Password" placeholder="Password" @click:append="showPassword = !showPassword"
                    :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'" :type="showPassword ? 'text' : 'password'"
                    v-model="password" @input.native="passwordChange($event)" color="purple" >
                </v-text-field>
                <div style="padding: 14px; margin-bottom: 18px; background-color: #FF5252; color: white;" v-if="loginError">
                    {{errorMessage}}
                </div>
                <v-btn block x-large color="cyan lighten-1" dark @click="validateAndSubmit" :loading="loading" >
                    <img :src="loginIcon" style="width: 35px; height: 35px;" />
                    <div class="ml-4">LOGIN</div>
                </v-btn>
                <div style="color: gray; text-align: center; margin-top: 18px; font-size: 14px;">
                    Forgot Password? 
                    <router-link to="/forgotPassword">
                        <span>Click here</span>
                    </router-link>
                </div>
                <div style="color: gray; text-align: center; margin-top: 15px; font-size: 14px;">
                    Don`t have an account? 
                    <router-link to="/signup">
                        <span>Register here</span>
                    </router-link>
                </div>
            </v-card>
        </div>
    </div>
</template>

<script>
import loginIcon from "../../static/Icons/AuthIcons/loginIcon.svg"
import {validateEmail, removeSpacesFromPasswordInput} from "../../utility/ValidateInputs"
import {Auth} from 'aws-amplify'
import Profile from "../../models/Profile"
import axios from "axios"

const REQUIRED_FIELD = "This field is mandatory"

export default {
    name: "Login",
    components: {},
    props: [],
    data() {
        return {
            loginIcon,
            
            email: "",
            password: "",
            showPassword: false,
            loading: false,
            loginError: false,
            errorMessage: "",
        }
    },
    methods: {
        validateAndSubmit(){
            const valid = this.loginValid()
            if(!valid){
                this.loginError = true
                this.errorMessage = "Please fill all the mandatory fields"
            } else {
                this.loginError = false
                this.errorMessage = ""
                this.signIn()
            }
        },
        async signIn(){
            this.loading = true
            try {
                const user = await Auth.signIn(this.email, this.password);
                console.log(user, "LOGGED IN USER")
                this.getUserProfile(user.attributes.sub)
                this.$store.dispatch("auth/loginSuccess", user)
                localStorage.setItem("bookStoreUser", JSON.stringify(user))
                this.loading = false
                this.$router.push("/")
            } catch (error) {
                this.loading = false
                console.log('error signing in', error);
                this.loginError = true
                this.errorMessage = error.message || "Something went Wrong"
                if(error.code === "UserNotFoundException"){
                    this.loginError = true
                    this.errorMessage = "Account with the entered email doesnot exist."
                } else if(error.code === "UserNotConfirmedException"){
                    this.loginError = true
                    this.errorMessage = "Please confirm your account."
                    this.$router.push("/confirmSignUp")
                }
            }
        },
        getUserProfile(cognitoId){
            axios.get(`/profile/getByCognitoId/${cognitoId}`, {}, {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                }
            }).then(res => {
                console.log(res)
                const profile = new Profile(res.data._id, res.data.cognitoid, res.data.username, res.data.email, 
                    res.data.password, res.data.profile_image, res.data.phone, res.data.address1, res.data.address2, 
                    res.data.pincode, res.data.created_at, res.data.updated_at)
                this.$store.dispatch("auth/setUserProfile", profile)
                this.loading = false
            }).catch(err => {
                console.log(err, err.response)
                this.loading = false
            })
        },
        loginValid(){
            return validateEmail(this.email) && this.password !== ""
        },
        emailChange(e){
            const val = e.target.value
            this.email = removeSpacesFromPasswordInput(val)
            //this.$refs[ref].value = this[ref]
        },
        passwordChange(e){
            const val = e.target.value
            this.password = removeSpacesFromPasswordInput(val)
            //this.$refs[ref].value = this[ref]
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
    },
}
</script>

<style scoped>

</style>