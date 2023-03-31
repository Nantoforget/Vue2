<template>
    <div>
        <h2>我是New</h2>
    </div>
</template>
<script>
export default {
    // 组件名字
    name: "New",
    // 状态数据
    data() {
        return {};
    },
    methods: {},
    computed: {},
    mounted() {
        console.log(this.$route);
    },
};
</script>
<style scoped>
</style>