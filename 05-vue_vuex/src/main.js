import Vue from "vue";
import App from "./App.vue";
//入口文件引入store
import store from "@/store/index";
Vue.config.productionTip = false;
new Vue({
    beforeCreate() {
        Vue.prototype.$bus = this;
    },
    render: (h) => h(App),
    //注册仓库
    store: store,
}).$mount("#app");
