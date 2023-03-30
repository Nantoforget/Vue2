<template>
    <div>
        <div class="color"></div>
    </div>
</template>
<script>
import { mapState } from "vuex";
export default {
    // 组件名字
    name: "Block",
    // 状态数据
    data() {
        return {};
    },
    methods: {},
    computed: {
        ...mapState(["R", "G", "B"]),
    },
};
</script>
<style scoped>
.color {
    background-color: rgb(v-bind(R), v-bind(G), v-bind(B));
    width: 60%;
    height: 300px;
    margin: 0 auto;
}
</style>