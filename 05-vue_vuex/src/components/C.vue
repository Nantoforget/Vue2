<template>
    <div>
        <div class="box"></div>
    </div>
</template>
<script>
import { mapState } from "vuex";
export default {
    // 组件名字
    name: "C",
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
.box {
    width: 50%;
    height: 200px;
    margin: 0 auto;
    background: rgb(v-bind(R), v-bind(G), v-bind(B));
}
</style>