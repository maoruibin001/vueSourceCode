// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from './App.vue'
import router from './routers'

Vue.config.productionTip = false
console.log('config: ',Vue.config);

/* eslint-disable no-new */
debugger;
new Vue({
    el: '#app',
    router,
    render: (h) => h(App)
})
