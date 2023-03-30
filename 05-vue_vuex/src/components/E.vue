<template>
    <div>
        <h1>我是子组件E</h1>
        <div>
            <ul>
                <li v-for="item in todo" :key="item.id">
                    <slot :row="item"></slot>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import { inject } from "vue";
export default {
    props: ["todo"],
    inject: ["count1"],
    // 组件名字
    name: "E",
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