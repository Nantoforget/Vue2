<template>
    <div>
        <h1>路由测试</h1>
        <button @click="back">back</button>
        <button @click="go">go</button>
        <button @click="forward">forward</button>
        <div class="box">
            <div>
                <!-- 高亮显示，active-class -->
                <router-link to="/About" active-class="cur">
                    About
                </router-link>
            </div>
            <div>
                <router-link to="/Home" active-class="cur">Home</router-link>
            </div>
        </div>
        <div class="main">
            <!-- 展示区域 -->
            <!-- 需要设置路由组件的出口地方(在什么地方展示) -->
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
        </div>
    </div>
</template>
<script>
export default {
    // 组件名字
    name: "App",
    // 状态数据
    data() {
        return {};
    },
    methods: {
        back() {
            this.$router.back(); //返回退一步(主要移动端)
        },
        go() {
            //返回与前进
            this.$router.go(1); //参数是正数向前进，负数向后退，参数是几走几步
        },
        forward() {
            this.$router.forward(); //往前一步(主要移动端)
        },
    },
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
    height: 600px;
    margin: 20px auto;
    border: 5px blue solid;
}
.cur {
    color: red;
    background: blue;
}
</style>