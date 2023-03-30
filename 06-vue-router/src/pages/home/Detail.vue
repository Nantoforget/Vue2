<template>
    <div>
        <ul>
            <li>哈哈哈</li>
            <li>嘿嘿嘿</li>
            <li>啊啊啊</li>
        </ul>
    </div>
</template>
<script>
export default {
    // 组件名字
    name: "Detail",
    // 状态数据
    data() {
        return {};
    },
    methods: {},
    computed: {},
    mounted() {
        //由于在入口文件注册router路由器，会使所用vc实例多出$route、$router两个属性
        console.log(this);
    },
};
</script>
<style scoped>
</style>