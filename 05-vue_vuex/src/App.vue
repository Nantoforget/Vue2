<template>
    <div>
        <div v-show="isShow">
            <h1>我是App</h1>
            <button @click="add(1)">+1</button>
            <button @click="minus(1)">-1</button>
            <button @click="add(2)">偶数+1</button>
            <button @click="minus(2)">奇数-1</button>
            <button @click="add(100)">+100</button>
            <button @click="delay">两秒后-1</button>
            <h1>{{ $store.state.count }}</h1>
            <div>
                <A :count1="count1"></A>
            </div>
            <input type="text" v-model="msg" />
        </div>
        <hr />
        <B v-show="isShow"></B>
        <hr />
        <c></c>
        <d></d>
        <e :todo="todo">
            <template slot-scope="{ row }">
                <div>{{ row }}--{{ row.name }}--{{ row.age }}</div>
            </template>
        </e>
    </div>
</template>
<script>
import { provide } from "vue";
//辅助函数mapState,可以获取仓库state的数据
//辅助函数mapGetters,可以获取仓库getters的数据
//经常结合计算属性使用
import { mapState, mapGetters, mapActions } from "vuex";
import A from "@/components/A.vue";
import B from "@/components/B.vue";
import C from "@/components/C.vue";
import D from "@/components/D.vue";
import E from "./components/E.vue";
export default {
    provide: function () {
        return {
            count1: this.count1,
        };
    },
    components: { A, B, C, D, E },
    // 组件名字
    name: "App",
    // 状态数据
    data() {
        return {
            count1: 1,
            isShow: false,
            todo: [
                {
                    name: "孙悟空",
                    age: 18,
                    hobby: ["金箍棒", "花果山"],
                },
                {
                    name: "猪八戒",
                    age: 28,
                    hobby: ["九齿钉耙", "高老庄"],
                },
                {
                    name: "沙和尚",
                    age: 38,
                    hobby: ["戒杖", "流沙河"],
                },
                {
                    name: "唐僧",
                    age: 16,
                    hobby: ["禅杖", "女儿国"],
                },
            ],
        };
    },
    methods: {
        //$bus
        countAdd() {
            this.count1++;
        },
        //vuex
        add(val) {
            //第一个参数：actions里的名称
            //第二个的参数是实参
            //不能再传其他的参数(载荷)
            this.$store.dispatch("addCount", val);
        },
        minus(val) {
            this.$store.dispatch("minusCount", val);
        },
        delay() {
            this.$store.dispatch("delay");
        },
    },
    mounted() {
        this.$bus.$on("countAdd", () => this.countAdd());
    },
    computed: {
        //辅助函数mapState,可以获取仓库state的数据
        //经常结合计算属性使用,调用的时候要传递数组或对象--- >返回的是一个对象
        ...mapState(["count", "msg"]),
        ...mapGetters(["allAge"]),
    },
};
</script>
<style scoped>
button {
    width: 100px;
    height: 40px;
    margin-right: 20px;
}
</style>