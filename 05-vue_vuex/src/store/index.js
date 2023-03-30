import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

export default new Vuex.Store({
    //状态
    state: {
        count: 1,
        msg: "哈哈哈",
        R: 0,
        G: 0,
        B: 0,
    },
    //异步,不能直接修改数据，只能处理业务
    actions: {
        //第一个参数是一个对象，有state,commit,dispatch等
        //第二个是接受的参数，形参
        addCount({ state, commit, dispatch }, status) {
            if (status == 1) {
                //第一个参数是mutations的方法名称
                //第二个参数是实参，传给mutations的方法
                commit("ADDCOUNT", status);
            } else if (state.count % 2 == 0) {
                commit("ADDCOUNT", 1);
            } else if (status == 100) {
                commit("ADDCOUNT", status);
            }
        },
        minusCount({ state, commit, dispatch }, status) {
            if (status == 1) {
                commit("MINUSCOUNT");
            } else if (state.count % 2 !== 0) {
                commit("MINUSCOUNT");
            }
        },
        delay({ state, commit, dispatch }) {
            const timer = setTimeout(() => {
                commit("MINUSCOUNT");
            }, 2000);
            // clearTimeout(timer);
        },
        color({ state, commit, dispatch }, RGB) {
            // console.log(RGB.value);
            if (RGB.name === "red") {
                commit("CHANGER", RGB.value);
            } else if (RGB.name === "green") {
                commit("CHANGEG", RGB.value);
            } else {
                commit("CHANGEB", RGB.value);
            }
        },
    },
    //状态修改
    mutations: {
        ADDCOUNT(state, status) {
            state.count += status;
        },
        MINUSCOUNT(state) {
            state.count--;
        },
        CHANGER(state, val) {
            state.R = val;
        },
        CHANGEG(state, val) {
            state.G = val;
        },
        CHANGEB(state, val) {
            state.B = val;
        },
    },
    //计算属性
    getters: {
        allAge(state) {},
    },
});
