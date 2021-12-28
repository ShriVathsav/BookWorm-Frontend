import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router'
import store from "./store"
import "./main.css"
import Amplify, * as AmplifyModules from 'aws-amplify';
import { AmplifyPlugin } from 'aws-amplify-vue';
import aws_exports from './aws-exports';
import { StripePlugin } from '@vue-stripe/vue-stripe';
import axios from "axios";

Amplify.configure(aws_exports);
Vue.use(AmplifyPlugin, AmplifyModules);

Vue.config.productionTip = false

axios.defaults.baseURL = 'https://nyg2dwhe69.execute-api.ap-south-1.amazonaws.com/prod';

const options = {
    pk: "pk_test_hD6Scfa3aO6x1rRsFFCW5xML00kvOxvdWU",
    //stripeAccount: process.env.STRIPE_ACCOUNT,
    //apiVersion: process.env.API_VERSION,
    //locale: process.env.LOCALE,
};

Vue.use(StripePlugin, options);

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
