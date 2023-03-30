<template>
    <div>
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
</template>
<script>
//辅助函数mapState,可以获取仓库state的数据
//辅助函数mapGetters,可以获取仓库getters的数据
//经常结合计算属性使用
import { mapState, mapGetters, mapActions } from "vuex";
import A from "@/components/A.vue";
export default {
    components: { A },
    // 组件名字
    name: "App",
    // 状态数据
    data() {
        return {
            count1: 0,
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
        console.log(this);
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