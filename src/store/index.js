import Vue from 'nativescript-vue';
import Vuex from 'vuex';

import counter from './modules/counter';
import pushNotifications from './modules/pushNotifications';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

const store = new Vuex.Store({
    modules: {
        counter,
        pushNotifications
    },
    strict: debug,
});

Vue.prototype.$store = store;

module.exports = store;