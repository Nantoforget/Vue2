import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
import request from "@/api/index";
export default new Vuex.Store({
    state: {
        infos: [],
        R: 0,
        G: 0,
        B: 0,
    },
    actions: {
        //请求
        async getInfo({ state, commit, dispatch }, val) {
            let result = await request({
                method: "get",
                url: "/xhr/search/users",
                params: {
                    q: val,
                },
            });
            console.log(result);
            commit("GETINFO", result.items);
        },
        //调色板
        getColor({ state, commit, dispatch }, val) {
            if (val.name == "r") {
                commit("COLORR", val.value);
            } else if (val.name == "g") {
                commit("COLORG", val.value);
            } else if (val.name == "b") {
                commit("COLORB", val.value);
            }
        },
    },
    mutations: {
        //请求后修改数据
        GETINFO(state, val) {
            state.infos = val;
        },
        //调色板
        COLORR(state, val) {
            state.R = val;
        },
        COLORG(state, val) {
            state.G = val;
        },
        COLORB(state, val) {
            state.B = val;
        },
    },
    getters: {},
});
