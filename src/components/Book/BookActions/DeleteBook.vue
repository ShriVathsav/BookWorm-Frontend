<template>
    <v-row justify="center">
        <v-dialog v-model="dialog" persistent width="400px" >
            <template v-slot:activator="{ on, attrs }">
                <v-btn outlined color="red" v-bind="attrs" v-on="on"
                        id="action-button" >
                    <v-img class="button-icon" :src="deleteBookIcon" ></v-img>
                    <div>DELETE BOOK</div>
                </v-btn>                
            </template>
            <v-card>
                <v-card-title class="headline" >
                    <div style="display: flex; align-items: center; justify-content: center;">
                        <v-img :src="deleteBookIcon" class="button-icon" ></v-img>
                        <div>Delete Book</div>
                    </div>
                </v-card-title>
                
                <v-card-text style="padding: 14px 24px;">
                    Are you sure you want to delete this book? You won`t be able to repost it again.
                </v-card-text>
                
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="green darken-1" text @click="dialog = false" >
                        Disagree
                    </v-btn>
                    <v-btn color="green darken-1" text @click="dialog = false" >
                        Agree
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-row>
</template>

<script>
import deleteBookIcon from "../../../static/Icons/BookDisplayIcons/deleteBook2.svg"

export default {
    name: "DeleteBook",
    components: {},
    props: [],
    data: () => {
        return {
            dialog: false,

            deleteBookIcon
        }
    },
    methods: {

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