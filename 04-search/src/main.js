import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;
import { Button } from "element-ui";

new Vue({
    render: (h) => h(App),
    beforeCreate() {
        Vue.prototype.$bus = this;
    },
})
    .use(Button)
    .$mount("#app");
