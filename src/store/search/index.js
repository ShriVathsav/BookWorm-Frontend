const initialState = {
    searchTerm: "",
    searchCategories: ['School', 'Engineering', 'Competitive', 
        'Arts & Science', 'Medicine', 'Children Stories'],
    books: [],
    inStockFilter: "true,false",
    deliveryTimeFilter: "30",
    ratingFilter: "0",
    minPriceFilter: 0,
    maxPriceFilter: 2000,
    conditionFilter: "New Book,Old Book",
    bookTypeFilter: "Hardcover,Paperback",
}

export const search = {
    namespaced: true,
    state: initialState,
    actions: {
        setSearchTerm({ commit }, term) {
            console.log(term, "SEARCH TERM FROM VUEX")
            commit('setSearchTerm', term)
        },
        setSelectedCategories({ commit }, categories) {            
            commit('setSelectedCategories', categories)
        },
        setBooks({ commit }, books) {
            commit('setBooks', books)
        },

        setConditionFilter({ commit }, conditionFilter) {
            commit('setConditionFilter', conditionFilter)
        },
        setRatingFilter({ commit }, ratingFilter) {
            commit('setRatingFilter', ratingFilter)
        },
        setInStockFilter({ commit }, inStockFilter) {
            commit('setInStockFilter', inStockFilter)
        },
        setBookTypeFilter({ commit }, bookTypeFilter) {
            commit('setBookTypeFilter', bookTypeFilter)
        },
        setDeliveryTimeFilter({ commit }, deliveryTimeFilter) {
            commit('setDeliveryTimeFilter', deliveryTimeFilter)
        },
        setMinPriceFilter({ commit }, minPriceFilter) {
            commit('setMinPriceFilter', minPriceFilter)
        },
        setMaxPriceFilter({ commit }, maxPriceFilter) {
            commit('setMaxPriceFilter', maxPriceFilter)
        },
        resetFilters({ commit }) {
            commit('resetFilters')
        }
    },
    mutations: {
        setSearchTerm(state, term) {
            state.searchTerm = term
        },
        setSelectedCategories(state, categories) {
            state.searchCategories = categories;
        },
        setBooks(state, books) {
            state.books = books;
        },
        setConditionFilter(state, conditionFilter) {
            state.conditionFilter = conditionFilter
        },
        setRatingFilter(state, ratingFilter) {
            state.ratingFilter = ratingFilter
        },
        setInStockFilter(state, inStockFilter) {
            state.inStockFilter = inStockFilter
        },
        setBookTypeFilter(state, bookTypeFilter) {
            state.bookTypeFilter = bookTypeFilter
        },
        setDeliveryTimeFilter(state, deliveryTimeFilter) {
            state.deliveryTimeFilter = deliveryTimeFilter
        },
        setMinPriceFilter(state, minPriceFilter) {
            state.minPriceFilter = minPriceFilter
        },
        setMaxPriceFilter(state, maxPriceFilter) {
            state.maxPriceFilter = maxPriceFilter
        },
        resetFilters(state) {
            state.inStockFilter = "true,false"
            state.deliveryTimeFilter = "30"
            state.ratingFilter = "0"
            state.minPriceFilter = 0
            state.maxPriceFilter = 2000
            state.conditionFilter = "New Book,Old Book"
            state.bookTypeFilter = "Hardcover,Paperback"
        }
    },
    getters: {

    }
}