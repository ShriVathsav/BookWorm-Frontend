//import AuthService from '../../services/auth.service';

//const user = JSON.parse(localStorage.getItem('user'));
/*
const initialState = user
    ? { status: { loggedIn: true }, user }
    : { status: { loggedIn: false }, user: null };
*/
import axios from 'axios'

const initialState = {
    loggedIn: false,
    user: null,
    token: "",
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
            commit('logout')
        },
        registerSuccess({ commit }) {
            commit('registerSuccess')
        },
        registerFailure({ commit }) {
            commit('registerFailure')
        },
        setUserProfile({ commit }, profile) {
            commit('setUserProfile', profile)
        },
        changeProfileImage({ commit }, profilePicUrl) {
            commit('changeProfileImage', profilePicUrl)
        }
    },
    mutations: {
        loginSuccess(state, user) {
            console.log("LOGIN SUCCESS")
            state.loggedIn = true;
            state.user = user;
            const token = user.signInUserSession.accessToken.jwtToken
            state.token = token
            axios.defaults.headers.common['Authorization'] = token;
            localStorage.setItem('bookStoreUser', JSON.stringify(user))
        },
        loginFailure(state) {
            console.log("LOGIN FAILURE")
            state.loggedIn = false;
            state.user = null;
            state.token = ""
            localStorage.removeItem('bookStoreUser')
            //localStorage.removeItem('bookStoreUserProfile')
        },
        logout(state) {
            console.log("LOGOUT")
            state.loggedIn = false;
            state.user = null;
            state.token = ""
            localStorage.removeItem('bookStoreUser')
            localStorage.removeItem('bookStoreUserProfile')
        },
        registerSuccess(state) {
            console.log("REGISTER SUCCESS")
            state.loggedIn = false;
            state.user = null;
            state.token = ""
            localStorage.removeItem('bookStoreUser')
            localStorage.removeItem('bookStoreUserProfile')
        },
        registerFailure(state) {
            console.log("REGISTER FAILURE")
            state.loggedIn = false;
            state.user = null;
            state.token = ""
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
            return !!state.loggedIn && !!state.user
        },
        getUserProfile(state){
            return state.userProfile || JSON.parse(localStorage.getItem('bookStoreUserProfile'))
        }
    }
}