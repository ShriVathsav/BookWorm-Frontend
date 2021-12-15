<template>
    <v-card style="padding: 14px;">
        <v-card-title>Search for Books</v-card-title>
        <div style=" display: flex; width: 100%; align-items: center; justify-content: center; flex-flow: row wrap;">
            <div class="search-item search-input">
                <v-text-field label="Search Books" filled placeholder="Search Books" dense 
                    color="purple" hide-details="auto" background-color="purple lighten-5"
                    v-model="searchTerm" >
                </v-text-field>
            </div>
            <div class="search-item search-category">
                <v-select v-model="selectedCategories" :items="initialCategories" label="Category" 
                        multiple filled dense hide-details="auto" color="purple" item-color="purple"
                        background-color="purple lighten-5" >
                    <template v-slot:prepend-item>
                        <v-list-item ripple @click="toggle" color="purple" >
                            <v-list-item-action>
                                <v-icon :color="selectedCategories.length > 0 ? 'indigo darken-4' : ''">
                                    {{ icon }}
                                </v-icon>
                            </v-list-item-action>
                            <v-list-item-content>
                                <v-list-item-title>Select All</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                        <v-divider class="mt-2"></v-divider>
                    </template>
                    <template v-slot:selection="{ item, index }">
                        <v-chip small v-if="index === 0">
                            <span>{{ item }}</span>
                        </v-chip>
                        <span v-if="index === 1" class="grey--text caption" >
                            (+{{ selectedCategories.length - 1 }} others)
                        </span>
                    </template>
                </v-select>
            </div>
            <div style="width: 100%; max-width: 400px;" class="search-item">
                <v-btn tile color="purple" style="width: 100%; height: 45px;" :disabled="!searchTerm || selectedCategories.length === 0"
                        :loading="searchLoading" @click="searchBook" >
                    <img :src="searchBookIcon" style="width: 35px; height: 35px;" />
                    <div class="ml-4" style="color: white;">SEARCH</div>
                </v-btn>
            </div>
        </div>
    </v-card>
</template>

<script>

import searchBookIcon from "../static/Icons/OtherIcons/searchBook2.svg"

export default {
    name: "SearchBook",
    components: {},
    props: ["alterState", "searchLoading", "searchBookHandler"],
    data() {
        return {
            initialCategories: ['School', 'Engineering', 'Competitive', 
                'Arts & Science', 'Medicine', 'Children Stories'],
            selectedCategories: this.$store.state.search.searchCategories,
            searchTerm: this.$store.state.search.searchTerm,

            searchBookIcon,
        }
    },
    computed: {
        allCategoriesSelected () {
            return this.initialCategories.length === this.selectedCategories.length
        },
        someCategoriesSelected () {
            return this.selectedCategories.length > 0 && !this.allCategoriesSelected
        },
        icon () {
            if (this.allCategoriesSelected) return 'mdi-close-box'
            if (this.someCategoriesSelected) return 'mdi-minus-box'
            return 'mdi-checkbox-blank-outline'
        },
    },
    methods: {
        toggle() {
            console.log(this.selectedCategories)
            this.$nextTick(() => {
                if (this.allCategoriesSelected) {
                    this.selectedCategories = []
                } else {
                    this.selectedCategories = [...this.initialCategories]
                }
            })
        },
        searchBook(){
            this.$store.dispatch("search/setSearchTerm", this.searchTerm)
            this.$store.dispatch("search/setSelectedCategories", this.selectedCategories)
            this.$store.dispatch("search/resetFilters")

            this.searchBookHandler()
        }
    },
    updated(){
        console.log(this.$store.state, "STATE")
    }
}
</script>

<style scoped>
.search-item{
    padding: 14px;
}

.search-category{
    max-width: 400px;
}
/*ABOVE 990 PX*/
@media only screen and (min-width: 990px){

}

/*BELOW 990 PX*/
@media only screen and (max-width: 990px){

}

/*ABOVE 767 PX*/
@media only screen and (min-width: 767px){
    .search-input{
        width: 70%;
    }
    .search-category{
        width: 30%;
    }
}

/*BELOW 767 PX*/
@media only screen and (max-width: 767px){
    .search-input{
        width: 100%;
    }
    .search-category{
        width: 100%;
    }
}

/*ABOVE 510 PX*/
@media only screen and (min-width: 510px){
    
}


/*BELOW 510 PX*/
@media only screen and (max-width: 510px){
    
}
</style>