<template>
    <div class="header" @click="toF">TodoHeader组件</div>
</template>
<script>
export default {
    // 组件名字
    name: "TodoHeader",
    // 状态数据
    data() {
        return {};
    },
    methods: {
        toF() {
            this.$emit("son", "TodoHeader");
        },
    },
    computed: {},
    mounted() {
        this.$bus.$on("money", (a) => {
            console.log(a);
        });
    },
};
</script>
<style scoped>
.header {
    width: 200px;
    height: 200px;
    background: yellow;
}
</style>