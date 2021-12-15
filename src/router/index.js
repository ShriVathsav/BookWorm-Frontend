import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from "@/components/Dashboard";
import BookDisplay from "@/components/Book/BookDisplay";
import Profile from "@/components/Profile/Profile";
import Cart from "@/components/Cart/Cart";
import CreateBook from "@/components/Book/CreateBook.vue";
import EditBook from "@/components/Book/EditBook.vue";
import Login from "@/components/Authentication/Login"
import Register from "@/components/Authentication/Register"
import ConfirmSignUp from "@/components/Authentication/ConfirmSignUp"
import ForgotPassword from "@/components/Authentication/ForgotPassword"
import NewPassword from "@/components/Authentication/NewPassword"
import NotFound from "@/components/InfoPages/Error404Page"

import store from "../store"

Vue.use(Router)

const router = new Router({
    mode: "history",
    routes: [
        {path: "/", component: Dashboard, meta: {requireAuth: true}},
        {path: "/signin", component: Login},
        {path: "/signup", component: Register},
        {path: "/confirmSignUp", component: ConfirmSignUp},
        {path: "/forgotPassword", component: ForgotPassword},
        {path: "/setNewPassword/:email", component: NewPassword},
        {path: "/sellbook", component: CreateBook, meta: {requireAuth: true}},
        {path: "/editbook/:id", component: EditBook, meta: {requireAuth: true}},
        {path: "/book/:id", component: BookDisplay, meta: {requireAuth: true}},
        {path: "/profile/:id", component: Profile, meta: {requireAuth: true}},
        {path: "/profile/:id/cart/", component: Cart, meta: {requireAuth: true}},
        {path: "/:notFound(.*)", component: NotFound},
    ]
})

//console.log(router.app.$store.getters['auth/isAuthenticated'], "PRINTING ROUTER")

router.beforeEach((to, from, next) => {
    console.log(from, router.app.$store.getters['auth/isAuthenticated'], "PRINTING FROM IN GUARDS")
    if(to.meta.requireAuth){
        console.log(store, store.state.auth.loggedIn)
        if(localStorage.getItem('bookStoreUser')){
            next()
        } else{
            next("/signin")
        }
    }else {
        if(localStorage.getItem('bookStoreUser')){
            next("/")
        } else{
            next()
        }
    }
})

export default router
