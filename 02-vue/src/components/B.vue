<template>
    <div class="b">
        <ul>
            <li v-for="todo of info" :key="todo.id">
                <label>
                    <span>
                        <input
                            type="checkbox"
                            :checked="todo.done"
                            @change="changeDone(todo.id)" />
                        {{ todo.title }}
                    </span>
                    <button v-show="todo.done" @click="remove(todo.id)">
                        删除
                    </button>
                </label>
            </li>
        </ul>
    </div>
</template>
<script>
    export default {
        // 组件名字
        name: "B",
        //props获取父组件数据
        props: ["info", "changeDoneB", "delDate"],
        // 状态数据
        data() {
            return {};
        },
        methods: {
            changeDone(id) {
                this.changeDoneB(id);
            },
            remove(id) {
                this.delDate(id);
            },
        },
        computed: {},
    };
</script>
<style scoped>
    .b {
        font-size: 24px;
        margin-top: 10px;
        line-height: 37px;
    }
    ul {
        padding-inline-start: 0px;
        padding: 5px 0;
    }
    li {
        list-style-type: none;
        padding: 10px 0;
    }
    label {
        display: flex;
    }
    span {
        flex: 1;
    }
    input {
        margin-right: 10px;
    }
    button {
        width: 100px;
        background: rgb(213, 95, 77);
        color: #fff;
        font-size: 24px;
        margin-right: 10px;
    }
</style>
