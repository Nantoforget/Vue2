<template>
    <div>
        <h1>我是A</h1>
        <div>
            <button
                v-for="(btn, index) in arr"
                :key="index"
                @click="go(btn.name, btn.age)"
            >
                {{ btn.name }}
            </button>
        </div>
        <div>
            <!-- query参数 -->
            <router-link to="/About/New?a=2" class="link" active-class="cur">
                New
            </router-link>
            <!-- params参数,需要在配置路由时进行占位 -->
            <router-link
                to="/About/Message/1/2"
                class="link"
                active-class="cur"
            >
                Message
            </router-link>
        </div>
        <div class="view">
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
export default {
    // 组件名字
    name: "About",
    // 状态数据
    data() {
        return {
            arr: [
                {
                    name: "孙悟空",
                    age: 18,
                },
                {
                    name: "猪八戒",
                    age: 28,
                },
            ],
        };
    },
    methods: {
        go(name, age) {
            //对象写法的query参数
            /* this.$router.push({
                path: "/About/C",
                query: {
                    name: name,
                    age: age,
                },
            }); */
            //params参数;path与params不能写一起，需要命名路由且params参数要占位
            /* this.$router.push({
                name: "D",
                params: {
                    name: name,
                    age: age,
                },
            }); */
            //params和query参数同时传递
            this.$router.push({
                name: "D",
                params: {
                    name: name,
                    age: age,
                },
                query: {
                    name: name,
                    age: age,
                },
            });
        },
    },
    computed: {},
};
</script>
<style scoped>
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