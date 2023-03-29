<template>
    <div>
        <h1>我是子组件</h1>
        <div>
            <slot></slot>
            <slot name="jia"></slot>
            <slot name="haha"></slot>
        </div>
    </div>
</template>
<script>
export default {
    // 组件名字
    name: "Card",
    // 状态数据
    data() {
        return {};
    },
    methods: {},
    computed: {},
};
</script>
<style scoped>
</style>