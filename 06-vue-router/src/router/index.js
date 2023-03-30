import VueRouter from "vue-router";
import Vue from "vue";
Vue.use(VueRouter);

import Home from "@/pages/Home";
import About from "@/pages/About";
import News from "@/pages/home/News";
import Message from "@/pages/home/Message";
import Detail from "@/pages/home/Detail";
export default new VueRouter({
    //设置路由的模式，默认是hash(路径带锚点)，history(路径不带#)
    mode: "history",
    //配置路由
    //一定得是数组
    routes: [
        {
            path: "/home", //k
            component: Home, //v
            //二级路由
            children: [
                {
                    //path: "/home/message",//完整写法
                    path: "message", //简写方法(不能加/)
                    component: Message,
                    children: [
                        {
                            name: "detail", //命名路由
                            path: "detail/:a/:b", //params参数，配置时要占位
                            component: Detail,
                        },
                    ],
                },
                {
                    path: "/home/news",
                    component: News,
                    children: [
                        {
                            path: "detail",
                            component: Detail,
                        },
                    ],
                },
            ],
        },
        {
            path: "/about",
            component: About,
        },
        // 重定向
        {
            path: "/",
            redirect: "/home",
        },
    ],
});
