import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

//引入组件，变为全局组件
import Carousel from "@/components/Carousel";
//全局注册(组建的名字(name),组件的配置项)
Vue.component("Carousel", Carousel);
//全局的自定义指令
Vue.directive("big", () => {});

//自定义插件
//引入插件
import plugins from "./plugins";
//利用Vue.use()来安装插件才能使用

new Vue({
    render: (h) => h(App),
}).$mount("#app");
