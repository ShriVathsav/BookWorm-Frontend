
export const view = {
    namespaced: true,
    state: {
        sideDrawerOpen: false,
        globalError: false
    },
    actions: {
        toggleSideDrawer({ commit }, value) {
            commit("toggleSideDrawer", value)
        },
        setGlobalError({ commit }, value) {
            commit("toggleSideDrawer", value)
        }
    },
    mutations: {
        toggleSideDrawer(state, value) {
            state.sideDrawerOpen = value
        },
        setGlobalError(state, value) {
            state.globalError = value
        },
    },
    getters: {
        
    }
}