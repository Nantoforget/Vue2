<template>
    <div>
        <div>我是D</div>
        <button @click="b">Click Me</button>
    </div>
</template>
<script>
export default {
    // 组件名字
    name: "D",
    // 状态数据
    data() {
        return {};
    },
    methods: {
        b() {
            this.$bus.$emit("money", "12586");
        },
    },
    computed: {},
};
</script>
<style scoped>
</style>