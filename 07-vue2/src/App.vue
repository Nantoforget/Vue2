<template>
    <div>
        <div v-show="isShow">
            <div>
                <search></search>
            </div>
            <hr />
            <div class="i">
                <info></info>
            </div>
        </div>
        <hr />
        <div>
            <block></block>
            <twig></twig>
        </div>
    </div>
</template>
<script>
import Search from "@/components/Search.vue";
import Info from "@/components/Info.vue";
import Block from "@/components/color/Block.vue";
import Twig from "@/components/color/Twig.vue";

export default {
    components: { Search, Info, Block, Twig },
    // 组件名字
    name: "App",
    // 状态数据
    data() {
        return {
            isShow: false,
        };
    },
    methods: {},
    computed: {},
    mounted() {},
};
</script>
<style scoped>
.i {
    width: 100%;
}
</style>