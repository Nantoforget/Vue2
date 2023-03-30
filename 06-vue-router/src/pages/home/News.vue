<template>
    <div>
        <div class="box">
            <div>
                <!-- 高亮显示，active-class -->
                <router-link to="/home/News/detail" active-class="cur">
                    Detail
                </router-link>
            </div>
        </div>
        <div class="main">
            <!-- 展示区域 -->
            <!-- 需要设置路由组件的出口地方(在什么地方展示) -->

            <router-view></router-view>
        </div>
    </div>
</template>
<script>
export default {
    // 组件名字
    name: "News",
    // 状态数据
    data() {
        return {};
    },
    methods: {},
    computed: {},
};
</script>
<style scoped>
.box {
    width: 80%;
    font-size: 30px;
    margin: 20px auto;
    border: 2px red solid;
}
.box div {
    margin: 10px 0;
}
.main {
    width: 80%;
    height: 200px;
    margin: 20px auto;
    border: 5px blue solid;
}
.cur {
    color: red;
    background: blue;
}
</style>