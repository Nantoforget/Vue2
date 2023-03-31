<template>
    <div>
        <h1>我是C</h1>
        <ul>
            <li>{{ obj.name }}---{{ obj.age }}</li>
        </ul>
    </div>
</template>
<script>
export default {
    // 组件名字
    name: "C",
    // 状态数据
    data() {
        return {
            obj: {},
        };
    },
    methods: {},
    computed: {},
    mounted() {
        this.obj = this.$route.query;
    },
};
</script>
<style scoped>
</style>