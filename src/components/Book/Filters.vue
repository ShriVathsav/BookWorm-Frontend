<template>
    <v-row justify="center">
        <v-dialog v-model="dialog" persistent width="450px" scrollable >
            <template v-slot:activator="{ on, attrs }">
                <v-btn outlined color="red" v-bind="attrs" v-on="on"
                        id="action-button" >
                    <v-img class="button-icon" :src="filtersIcon" ></v-img>
                    <div>APPLY FILTERS</div>
                </v-btn>                
            </template>
            <v-card>
                <v-card-title class="headline" >
                    <div style="display: flex; align-items: center; justify-content: center;">
                        <v-img :src="filtersIcon" class="button-icon" ></v-img>
                        <div>Apply Filters</div>
                    </div>
                </v-card-title>
                
                <v-card-text style="padding: 14px 24px;">
                    <div>
                        <label style="font-size: 13px;">Price</label>
                        <v-range-slider v-model="range" :max="max" :min="min" hide-details class="align-center mb-6" 
                                track-color="purple lighten-4" color="purple" >
                            <template v-slot:prepend>
                                <v-text-field :value="range[0]" class="mt-0 pt-0" hide-details single-line color="purple"
                                    type="number" style="width: 60px" @change="$set(range, 0, $event)" ></v-text-field>
                            </template>
                            <template v-slot:append>
                            <v-text-field :value="range[1]" class="mt-0 pt-0" hide-details single-line type="number" 
                                color="purple" style="width: 60px" @change="$set(range, 1, $event)" ></v-text-field>
                            </template>
                        </v-range-slider>

                        <v-select :items="stockFilterList" label="Stock" color="purple" item-color="purple"
                            v-model="stockFilter" >
                        </v-select>
                        <v-select :items="deliveryTimeFilterList" label="Delivery Time" color="purple"
                            v-model="deliveryTimeFilter" item-color="purple" >
                        </v-select>
                        <v-select :items="conditionFilterList" label="Book Condition" color="purple"
                            v-model="conditionFilter" item-color="purple" >
                        </v-select>
                        <v-select :items="reviewFilterList" label="Reviews" color="purple"
                            v-model="reviewFilter" item-color="purple" >
                        </v-select>
                        <v-select :items="bookTypeFilterList" label="Book Type" color="purple"
                            v-model="bookTypeFilter" item-color="purple" >
                        </v-select>
                    </div>
                </v-card-text>
                
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="red darken-1" text @click="discardChanges" :disabled="searchBookLoading" >
                        DISCARD
                    </v-btn>
                    <v-btn color="purple" text @click="applyFilters" :loading="searchBookLoading" >
                        APPLY FILTERS
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-row>
</template>

<script>
import filtersIcon from "../../static/Icons/BookDisplayIcons/filtersIcon.svg"

export default {
    name: "Filters",
    components: {},
    props: ["searchBookHandler", "searchBookLoading"],
    data() {
        return {
            dialog: false,
            stockFilter: this.$store.state.search.inStockFilter,
            deliveryTimeFilter: this.$store.state.search.deliveryTimeFilter,
            conditionFilter: this.$store.state.search.conditionFilter,
            reviewFilter: this.$store.state.search.ratingFilter,
            bookTypeFilter: this.$store.state.search.bookTypeFilter,
            min: this.$store.state.search.minPriceFilter,
            max: this.$store.state.search.maxPriceFilter,
            range: [1, 2000],

            filtersIcon,

            stockFilterList: [{text: "Any", value: "true,false"}, {text: "In Stock", value: "true"}, {text: "Out of Stock", value: "false"}],
            deliveryTimeFilterList: [{text: "Any", value: "30"}, {text: "< 2 days", value: "2"}, {text: "< 3 days", value: "3"},
                {text: "< 5 days", value: "5"}, {text: "< 7 days", value: "7"}],
            conditionFilterList: [{text: "Any", value: "New Book,Old Book"}, {text: "New Book", value: "New Book"}, {text: "Old Book", value: "Old Book"}],
            reviewFilterList: [{text: "Any", value: "0"}, {text: "4.5 +", value: "4.5"}, {text: "4.0 +", value: "4.0"},
                {text: "3.5 +", value: "3.5"}, {text: "3.0 +", value: "3.0"}, {text: "2.0 +", value: "2.0"},
                {text: "1.0 +", value: "1.0"}],
            bookTypeFilterList: [{text: "Any", value: "Hardcover,Paperback"}, {text: "Hardcover", value: "Hardcover"}, {text: "Paperback", value: "Paperback"}]
        }
    },
    methods: {
        discardChanges(){
            this.stockFilter = this.$store.state.search.inStockFilter
            this.deliveryTimeFilter = this.$store.state.search.deliveryTimeFilter
            this.conditionFilter = this.$store.state.search.conditionFilter
            this.reviewFilter = this.$store.state.search.ratingFilter
            this.bookTypeFilter = this.$store.state.search.bookTypeFilter
            this.min = this.$store.state.search.minPriceFilter
            this.max = this.$store.state.search.maxPriceFilter

            this.dialog = false
        },
        applyFilters(){
            this.$store.dispatch("search/setMinPriceFilter", this.min)
            this.$store.dispatch("search/setMaxPriceFilter", this.max)
            this.$store.dispatch("search/setInStockFilter", this.stockFilter)
            this.$store.dispatch("search/setRatingFilter", this.reviewFilter)
            this.$store.dispatch("search/setDeliveryTimeFilter", this.deliveryTimeFilter)
            this.$store.dispatch("search/setBookTypeFilter", this.bookTypeFilter)
            this.$store.dispatch("search/setConditionFilter", this.conditionFilter)            

            this.searchBookHandler()
            this.dialog = false
        }
    },
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