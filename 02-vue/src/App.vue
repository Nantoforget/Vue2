<template>
    <div>
        <h1 v-big="msg">我是App组件</h1>
        <todo-header></todo-header>
    </div>
</template>
<script>
import TodoHeader from "./components/TodoHeader.vue";
export default {
    //注册组件
    components: { TodoHeader },
    //自定义指令，没有this(局部指令)(操作真实的DOM)
    directives: {
        //第一个参数是指令绑定的真实的DOM节点
        //第二个参数是指令的相关信息
        //第三个参数是虚拟对象
        //第四个参数是虚拟对象
        big(element, option) {
            console.log(option);
        },
    },
    // 组件名字
    name: "App",
    // 状态数据
    data() {
        return {
            msg: "abcd",
        };
    },
    methods: {},
    computed: {},
};
</script>
<style scoped></style>
