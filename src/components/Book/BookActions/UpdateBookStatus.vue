<template>
    <v-row justify="center">
        <v-dialog v-model="dialog" persistent max-width="400" >
            <template v-slot:activator="{ on, attrs }">
                <v-btn outlined color="brown" style="float: right;" v-bind="attrs" v-on="on"
                        id="action-button" >
                    <v-img class="button-icon" :src="hideIcon" ></v-img>
                    <div>{{book.status === "INACTIVE" ? "REACTIVATE" : "DEACTIVATE"}}</div>
                </v-btn>
            </template>
            <v-card>
                <v-card-title class="headline" >
                    <div style="display: flex; align-items: center; justify-content: center;">
                        <v-img :src="hideIcon" class="button-icon" ></v-img>
                        <div>{{book.status === "INACTIVE" ? "Reactivate" : "Deactivate"}} Book</div>
                    </div>
                </v-card-title>

                <v-card-text style="padding: 14px 24px;">
                    <div v-if="bookStatus === 'INACTIVE'" >
                        Reactivating will make this book visible to other people.
                    </div>
                    <div v-else >
                        Are you sure you want to deactivate this book? People won`t be able to find your ad. You will have to reactivate this book to be visible to others.
                    </div>
                    <div style="padding: 14px; margin-top: 10px; background-color: #FF5252; color: white;" 
                            v-if="updateBookStatusError">
                        {{errorMessage}}
                    </div>
                </v-card-text>
                
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="red darken-1" text @click="dialog = false" :disabled="updateBookStatusLoading" >
                        CLOSE
                    </v-btn>
                    <v-btn color="purple" text @click="updateBookStatus" :loading="updateBookStatusLoading" >
                        {{book.status === "INACTIVE" ? "REACTIVATE" : "DEACTIVATE"}}
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-row>
</template>

<script>
import hideIcon from "../../../static/Icons/BookDisplayIcons/hideBook.svg"
import axios from "axios"

export default {
    name: "UpdateBookStatus",
    components: {},
    props: ["book", "alterState"],
    data() {
        return {
            dialog: false,
            bookStatus: this.book.status,
            updateBookStatusLoading: false,
            errorMessage: "",
            updateBookStatusError: false,

            hideIcon
        }
    },
    methods: {
        updateBookStatus(){
            this.updateBookStatusLoading = true
            const params = {
                status: this.book.status === "ACTIVE" ? "INACTIVE" : "ACTIVE"
            }
            console.log(this.book, params)
            axios.put(`/book/${this.$route.params.id}/editStatus`, params,
            {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                }
            }).then(res => {
                console.log(res)
                const book = {...this.book}
                book.status = params.status
                this.alterState("book", book)
                this.updateBookStatusLoading = false
                this.dialog = false
            }).catch(err => {
                this.updateBookStatusLoading = false
                this.updateBookStatusError = true
                this.errorMessage = err.message || "An error occured"
                console.log(err.response)
            })
        }
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