<template>
    <div>
        <div class="s">
            <p>
                <input
                    type="text"
                    placeholder="请输入搜索内容"
                    v-model="value"
                />
            </p>
            <div><button @click="getInfo">搜索</button></div>
        </div>
    </div>
</template>
<script>
export default {
    // 组件名字
    name: "Search",
    // 状态数据
    data() {
        return {
            value: "",
        };
    },
    methods: {
        getInfo() {
            this.$store.dispatch("getInfo", this.value);
            this.value = "";
        },
    },
    computed: {},
};
</script>
<style scoped>
</style>