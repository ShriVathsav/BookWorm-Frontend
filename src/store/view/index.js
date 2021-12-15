
export const view = {
    namespaced: true,
    state: {
        sideDrawerOpen: false
    },
    actions: {
        toggleSideDrawer({ commit }, value) {
            commit("toggleSideDrawer", value)
        }
    },
    mutations: {
        toggleSideDrawer(state, value) {
            state.sideDrawerOpen = value
        },
    },
    getters: {
        
    }
}