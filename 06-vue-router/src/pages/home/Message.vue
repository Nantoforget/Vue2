<template>
    <div>
        <div class="box">
            <div>
                <!-- 
                    query参数
                        可以在URL地址栏中看到(?k=v&k=v的形式,问号的意思是可穿可不穿)
                    params参数
                        属于路径中的一部分,所有在配置路由的时候要占位
                        如果配置了params参数，就必须要传params参数
                -->
                <!-- 声明式路由
                <router-link
                    to="/home/message/detail/5/6?a=1&b=2"
                    active-class="cur"
                >
                    Detail
                </router-link>
                <router-link to="/home/message/detail/3/4" active-class="cur">
                    Detail
                </router-link> -->
                编程式路由
                <button
                    v-for="btn in arr"
                    :key="btn.id"
                    @click="goDetail(btn.id)"
                >
                    {{ btn.name }}
                </button>
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
    name: "Message",
    // 状态数据
    data() {
        return {
            arr: [
                { id: 1, name: "孙悟空", age: 18 },
                { id: 2, name: "猪八戒", age: 28 },
                { id: 3, name: "沙和尚", age: 38 },
            ],
        };
    },
    methods: {
        goDetail(id) {
            //编程时导航，vc的$router属性-- >push|replace方法实现路由跳转
            //共三种
            //一,字符串写法
            // this.$router.push("/home/message/detail");
            //二，模板字符串
            // this.$router.push(`/home/message/detail`);
            //三，对象写法[配置对象]，path，query
            //query参数
            /* this.$router.push({
                path: "/home/message/detail",
                query: { id: id }, //query参数
            }); */
            //params参数模板字符串
            /* this.$router.push({
                path: `/home/message/detail/${id}/${id}`,
            }); */
            //params参数
            /* this.$router.push({
                name: "detail",
                //path与params不能一起写，需要给路由命名
                params: {
                    a: id,
                    b: id,
                },
            }); */
            //query参数、params参数一起写
            /* this.$router.push({
                name: "detail",
                params: {
                    a: id,
                    b: id,
                },
                query: {
                    a: id,
                    b: id,
                },
            }); */
            //replace
            this.$router.replace({
                name: "detail",
                params: {
                    a: id,
                    b: id,
                },
                query: {
                    a: id,
                    b: id,
                },
            });
            /* 
                push和replace的区别?
                    相同点：都能进行路由跳转
                    不同点：push可以记录历史记录，replace不能记录历史记录
             */
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
    height: 200px;
    margin: 20px auto;
    border: 5px blue solid;
}
.cur {
    color: red;
    background: blue;
}
</style>