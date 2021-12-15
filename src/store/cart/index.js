
export const cart = {
    namespaced: true,
    state: [],
    actions: {
        addItem({ commit }, item) {
            commit("addItem", item)
        },
        increaseItemQuantity({ commit }, index, maxStocks) {
            commit("increaseItemQuantity", index, maxStocks)
        },
        decreaseItemQuantity({ commit }, index) {
            commit("decreaseItemQuantity", index)
        },
        deleteItem({ commit }, index) {
            commit('deleteItem', index)
        },
        clearCart({ commit }) {
            commit('clearCart')
        }
    },
    mutations: {
        addItem(state, item) {
            /*
            const itemIndex = state.findIndex(it => it.id === item.book.id)
            if(itemIndex === -1){
                state.push(item)
            } else {
                state[itemIndex].quantity += 1
            }*/
            console.log(item, "CART ITEM FROM VUEX")
            state.push(item)
        },
        increaseItemQuantity(state, {index, maxStocks}) {
            const quantity = state[index].quantity
            if(quantity >= maxStocks){
                return
            }
            state[index].quantity += 1
            //const cartItem = [...state]
            //cartItem[index].quantity += 1
            //state = cartItem
        },
        decreaseItemQuantity(state, index) {
            const quantity = state[index].quantity
            if(quantity === 1){
                state.splice(index, 1)
                return
            }
            state[index].quantity -= 1
        },
        deleteItem(state, index) {
            state.splice(index, 1)
        },
        clearCart(state){
            console.log(state, "EMPTYING CART FROM CART STATE")
            state.splice(0, state.length)
            console.log(state, "AFTEWR EMPTYING CART FROM CART STATE")
        }
    },
    getters: {
        grandTotal(state){
            let grandTotalAmount = 0
            for(const item of state){
                console.log(item, "FROM GRAND TOTAL VUEX")
                grandTotalAmount += item.quantity * item.book.sellingPrice
            }
            return grandTotalAmount
        }
    }
}