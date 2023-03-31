import Vue from "vue";
import App from "./App.vue";
import store from "@/store/index";
Vue.config.productionTip = false;
import router from "@/router/index";
new Vue({
    render: (h) => h(App),
    beforeCreate() {
        Vue.prototype.$bus = this;
    },
    store,
    router,
}).$mount("#app");
