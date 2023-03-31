<template>
    <div>
        <h1>我是D</h1>
        <p>{{ obj.name }}--- {{ obj.age }}</p>
        <h1>{{ obj1.name }}--- {{ obj1.age }}</h1>
    </div>
</template>
<script>
export default {
    // 组件名字
    name: "D",
    // 状态数据
    data() {
        return {
            obj: {},
            obj1: {},
        };
    },
    methods: {},
    computed: {},
    mounted() {
        this.obj = this.$route.params;
        this.obj1 = this.$route.query;
    },
};
</script>
<style scoped>
</style>