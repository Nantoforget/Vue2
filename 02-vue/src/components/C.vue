<template>
    <div class="c">
        <span>
            <input
                type="checkbox"
                :checked="checked.length === info.length"
                @change="all" />
            已完成
            {{ checked.length }}
            /全部{{ info.length }}
        </span>
        <button @click="clear">清除已完成任务</button>
    </div>
</template>
<script>
    export default {
        // 组件名字
        name: "C",
        //props
        props: ["info", "delAll", "checkAll", "checked"],
        // 状态数据
        data() {
            return {
                value: "",
            };
        },
        methods: {
            //清除已完成任务
            clear() {
                this.delAll(this.checked);
            },
            //全选全不先
            all() {
                if (this.checked.length === this.info.length) {
                    this.checkAll(false);
                } else {
                    this.checkAll(true);
                }
            },
        },
        computed: {},
    };
</script>
<style scoped>
    .c {
        display: flex;
        margin: 10px 0 -10px 0;
    }
    span {
        flex: 1;
        font-size: 22px;
    }
    input {
        margin-right: 50px;
    }
    button {
        color: #fff;
        background: rgb(213, 95, 77);
        width: 200px;
        font-size: 24px;
    }
</style>
