import VueRouter from "vue-router";
import Vue from "vue";
Vue.use(VueRouter);

import About from "@/pages/About";
import Button from "@/pages/Button";
import New from "@/pages/A/New";
import Message from "@/pages/A/Message";
import C from "@/pages/A/C";
import D from "@/pages/A/D";
export default new VueRouter({
    routes: [
        {
            path: "/about",
            component: About,
            children: [
                {
                    path: "new",
                    component: New,
                },
                {
                    path: "message/:a/:b", //params参数要在配置路由时占位
                    component: Message,
                },
                {
                    path: "c",
                    component: C,
                },
                {
                    name: "D",
                    path: "d/:name/:age",
                    component: D,
                },
            ],
        },
        {
            path: "/button",
            component: Button,
        },
        {
            path: "/",
            redirect: "/about",
        },
    ],
});
