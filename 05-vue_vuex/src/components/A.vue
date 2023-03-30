<template>
    <div>
        <hr />
        <h1>{{ $attrs.count1 }}</h1>
        <button @click="add">Click Me</button>
    </div>
</template>
<script>
export default {
    // 组件名字
    name: "A",
    // 状态数据
    data() {
        return {};
    },
    methods: {
        add() {
            this.$bus.$emit("countAdd");
        },
    },
    computed: {},
};
</script>
<style scoped>
</style>