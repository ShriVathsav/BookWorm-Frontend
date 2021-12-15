import Vue from 'vue';
import Vuex from 'vuex';

import {auth} from './auth';
import {cart} from './cart';
import {view} from './view';
import {search} from './search';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        auth,
        cart,
        view,
        search
    }
});