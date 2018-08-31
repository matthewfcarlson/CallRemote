import Vue from 'nativescript-vue';

import router from './router';

import store from './store';

import './styles.scss';

// Uncomment the following to see NativeScript-Vue output logs
//Vue.config.silent = false;

require("nativescript-azure-mobile-apps/client").MobileServiceClient.configureClientAuthAppDelegate();

new Vue({

    router,

    store,

}).$start();