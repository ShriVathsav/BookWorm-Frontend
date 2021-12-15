<template>
    <div>
        <div style="display: flex; flex-direction: row-reverse;">
            <v-card style="width: 100%; max-width: 600px; padding: 20px;">
                <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; margin-bottom: 20px;">
                    <v-img :src="setNewPasswordIcon" style="width: 60px; height: 60px; margin-bottom: 7px;" ></v-img>
                    <div style="font-weight: 700; font-size: 18px;">RESET PASSWORD</div>
                </div>
                <div style="margin-bottom: 16px; font-size: 14px;">
                    Enter the verification code sent to your email.
                </div>
                <v-text-field filled label="Verification Code" placeholder="Verification Code" v-model="code"
                    ref="code" @keypress.native="wholeNumberInputChange($event, 'code')" color="purple" >
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
                <div style="padding: 14px; margin-bottom: 18px; background-color: #FF5252; color: white;" v-if="setPasswordError">
                    {{errorMessage}}
                </div>
                <v-btn block x-large color="cyan lighten-1" dark @click="validateAndSubmit" :loading="loading" >
                    <img :src="setNewPasswordIcon" style="width: 35px; height: 35px;" />
                    <div class="ml-4">RESET PASSWORD</div>
                </v-btn>
            </v-card>
        </div>
    </div>
</template>

<script>
import setNewPasswordIcon from "../../static/Icons/AuthIcons/setNewPasswordIcon.svg"
import {removeSpacesFromPasswordInput, allowWholeNumbers} from "../../utility/ValidateInputs"
import {Auth} from 'aws-amplify'

export default {
    name: "NewPassword",
    components: {},
    props: [],
    data() {
        return {
            setNewPasswordIcon,
            
            email: this.$route.params.email,
            password: "",
            confirmPassword: "",
            code: "",

            showPassword: false,
            showConfirmPassword: false,
            loading: false,
            setPasswordError: false,
            errorMessage: "",
        }
    },
    methods: {
        validateAndSubmit(){
            const valid = this.setNewPasswordValid()
            if(!valid){
                this.setPasswordError = true
                this.errorMessage = "Please fill all the mandatory fields"
            } else {
                this.setPasswordError = false
                this.errorMessage = ""
                this.setNewPassword()
            }
        },
        async setNewPassword(){
            this.loading = true
            try {
                await Auth.forgotPasswordSubmit(this.email, this.code.trim(), this.password);
                this.loading = false
                this.$router.history.push(`/signin`);
            } catch (err) {
                this.setPasswordError = true
                this.errorMessage = err.message || "Something went wrong!";
                this.loading = false
            }
        },
        setNewPasswordValid(){
            return this.password.trim() !== "" && 
                    this.password === this.confirmPassword && this.code !== ""
        },
        wholeNumberInputChange(e){
            const ress = allowWholeNumbers(e)
            console.log(ress, "IS NUMBER RESULT")
        },
        textInputChangeNoSpaces(e, ref){
            const val = e.target.value
            this[ref] = removeSpacesFromPasswordInput(val)
            //this.$refs[ref].value = this[ref]
        },
    }
}
</script>

<style scoped>

</style>