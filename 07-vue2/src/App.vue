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
        <div v-show="isShow">
            <block></block>
            <twig></twig>
        </div>
        <div>
            <div>
                <!-- 声明区域 -->
                <router-link to="/About" class="link" active-class="cur">
                    A
                </router-link>
                <router-link to="/Button" class="link" active-class="cur">
                    B
                </router-link>
            </div>
            <div class="view">
                <!-- 显示区域 -->
                <router-view></router-view>
            </div>
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
    mounted() {
        console.log(this.$bus);
        console.log(this);
    },
};
</script>
<style scoped>
.i {
    width: 100%;
}
.link {
    font-size: 30px;
    text-align: center;
    display: inline-block;
    width: 200px;
    height: 50px;
}
.cur {
    color: red;
}
.view {
    width: 90%;
    height: 600px;
    border: 20px blueviolet solid;
    margin: 0 auto;
}
</style>