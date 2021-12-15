//import AuthService from '../../services/auth.service';

//const user = JSON.parse(localStorage.getItem('user'));
/*
const initialState = user
    ? { status: { loggedIn: true }, user }
    : { status: { loggedIn: false }, user: null };
*/
const initialState = {
    loggedIn: false,
    user: null,
    userProfile: JSON.parse(localStorage.getItem('bookStoreUserProfile'))
}

export const auth = {
    namespaced: true,
    state: initialState,
    actions: {
        loginFailure({commit}) {
            commit('loginFailure')
        },
        loginSuccess({ commit }, user) {
            commit('loginSuccess', user)
        },
        logout({ commit }) {
            console.log(commit)
            commit('logout')
        },
        registerSuccess({ commit }) {
            console.log(commit)
            commit('registerSuccess')
        },
        registerFailure({ commit }) {
            console.log(commit)
            commit('registerFailure')
        },
        setUserProfile({ commit }, profile) {
            console.log(commit)
            commit('setUserProfile', profile)
        },
        changeProfileImage({ commit }, profilePicUrl) {
            commit('changeProfileImage', profilePicUrl)
        }
    },
    mutations: {
        loginSuccess(state, user) {
            console.log("LOGIN SUCCESS CALLED")
            state.loggedIn = true;
            state.user = user;
            localStorage.setItem('bookStoreUser', JSON.stringify(user))
        },
        loginFailure(state) {
            console.log("LOGIN FAILURE CALLED")
            state.loggedIn = false;
            state.user = null;
            localStorage.removeItem('bookStoreUser')
            //localStorage.removeItem('bookStoreUserProfile')
        },
        logout(state) {
            console.log("LOGOUT CALLED")
            state.loggedIn = false;
            state.user = null;
            localStorage.removeItem('bookStoreUser')
            localStorage.removeItem('bookStoreUserProfile')
        },
        registerSuccess(state) {
            console.log("REGISTER SUCCESS CALLED")
            state.loggedIn = false;
            localStorage.removeItem('bookStoreUser')
            localStorage.removeItem('bookStoreUserProfile')
        },
        registerFailure(state) {
            console.log("REGISTER FAILURE CALLED")
            state.loggedIn = false;
            localStorage.removeItem('bookStoreUser')
            localStorage.removeItem('bookStoreUserProfile')
        },
        setUserProfile(state, profile) {
            state.userProfile = profile;
            localStorage.setItem('bookStoreUserProfile', JSON.stringify(profile))
        },
        changeProfileImage(state, profilePicUrl) {
            let userProfile = {...state.userProfile}
            userProfile.profileImage = profilePicUrl
            state.userProfile = userProfile
            localStorage.setItem('bookStoreUserProfile', JSON.stringify(userProfile))
        }
    },
    getters: {
        isAuthenticated(state){
            console.log(state, "FROM GETTERS VUEX")
            return !!state.loggedIn && !!state.user
        },
        getUserProfile(state){
            console.log(state, "FROM GETTERS VUEX")
            return state.userProfile || JSON.parse(localStorage.getItem('bookStoreUserProfile'))
        }
    }
}