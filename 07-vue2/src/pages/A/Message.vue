<template>
    <div>
        <h1>我是Message</h1>
    </div>
</template>
<script>
export default {
    // 组件名字
    name: "Message",
    // 状态数据
    data() {
        return {};
    },
    methods: {},
    computed: {},
    mounted() {
        console.log(this.$router);
    },
};
</script>
<style scoped>
</style>