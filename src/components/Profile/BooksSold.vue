<template>
    <div>
        <div style="display: flex; flex-flow: row wrap;" >
            <div class="book-card">
                <BookCard>
                    <div class="pt-2" style="display: flex; flex-direction: row-reverse;" >
                        <v-btn outlined color="cyan" @click.native="$router.push('/')" 
                                id="info-button" style="width: 50%;">
                            <v-img class="button-icon" :src="hideIcon" ></v-img>
                            <div>HIDE ITEM</div>
                        </v-btn>
                    </div>
                </BookCard>
            </div>
            <div class="book-card" >
                <BookCard >
                </BookCard>
            </div>
            <div class="book-card" >
                <BookCard >
                </BookCard>
            </div>
        </div>
    </div>
</template>

<script>
import unknownUser1 from "../../static/Icons/ProfileIcons/unknownUser1.svg"
import unknownUser2 from "../../static/Icons/ProfileIcons/unknownUser2.svg"
import yourOrders1 from "../../static/Icons/ProfileIcons/yourOrders1.svg"
import yourOrders2 from "../../static/Icons/ProfileIcons/yourOrders2.svg"
import booksPosted1 from "../../static/Icons/ProfileIcons/booksPosted1.svg"
import booksPosted2 from "../../static/Icons/ProfileIcons/booksPosted2.svg"
import plusIcon from "../../static/Icons/ProfileIcons/OrderIcons/plus.svg"
import minusIcon from "../../static/Icons/ProfileIcons/OrderIcons/minus.svg"
import deliveryIcon from "../../static/Icons/BookDisplayIcons/deliveryDate.svg"
import updateStockIcon from "../../static/Icons/BookDisplayIcons/updateStock.svg"
import hideIcon from "../../static/Icons/BookDisplayIcons/hideBook.svg"

import emptyImage from "../../static/Images/emptyImage.png"
import BookCard from "../Book/BookCard"

export default {
    name: "BooksSold",
    components: {BookCard},
    props: [],
    data: () => {
        return {
            unknownUser1,
            unknownUser2,
            yourOrders1,
            yourOrders2,
            booksPosted1,
            booksPosted2,
            plusIcon,
            minusIcon,
            deliveryIcon,
            updateStockIcon,
            hideIcon,

            emptyImage,
        }
    },
    methods: {

    }
}
</script>

<style scoped>
.book-card{
    padding: 14px 7px;
}
#info-button{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 8px 30px;
    font-size: 14px;
    height: 35px;
    color: white;
    /*border-radius: 0px;
    background-color: #54c8ff;
    color: white;*/
}
.button-icon{
    width: 30px;
    height: 30px;
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
    .book-card{
        width: 33.33%;
    }
}

/*BELOW 767 PX*/
@media only screen and (max-width: 767px){
    .book-card{
        width: 50%;
    }
}

/*ABOVE 510 PX*/
@media only screen and (min-width: 510px){

}


/*BELOW 510 PX*/
@media only screen and (max-width: 510px){
    .book-card{
        width: 100%;
    }
}

</style>