<template>
    <div class="a">
        <input
            type="text"
            v-model="value"
            @keydown.enter="addDate"
            placeholder="请输入您的任务名称，按回车确定" />
    </div>
</template>
<script>
    export default {
        // 组件名字
        name: "A",
        //props
        props: ["addInfo"],
        // 状态数据
        data() {
            return {
                value: "",
            };
        },
        methods: {
            //添加数据
            addDate() {
                this.addInfo(this.value);
                this.value = "";
            },
        },
        computed: {},
    };
</script>
<style scoped>
    input {
        margin: 0 auto;
        width: 100%;
        font-size: 30px;
    }
</style>
