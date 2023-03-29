<template>
    <div class="list">
        <!-- 首页 -->
        <div v-show="isShow == 0">
            <h1>首页</h1>
        </div>
        <div v-show="isShow == 1">
            <h1>加载中</h1>
        </div>
        <div
            v-show="isShow == 2"
            class="item"
            v-for="item of info"
            :key="item.id"
        >
            <div class="img">
                <a :href="item.html_url" target="_black">
                    <img :src="item.avatar_url" />
                </a>
            </div>
            <div class="text">{{ item.login }}</div>
        </div>
        <div v-show="isShow == 3">
            <h1>加载失败</h1>
        </div>
    </div>
</template>
<script>
import request from "@/api/request";
export default {
    // 组件名字
    name: "List",
    // 状态数据
    data() {
        return {
            info: [],
            isShow: 0,
        };
    },
    methods: {},
    computed: {},
    mounted() {
        this.$bus.$on("getInfo", async (value) => {
            //对象写法
            /* let result = await axios.get(`/xhr/search/users?q=${value}`);
            console.log(result);
            this.info = result.data.items; */
            /* let result = await axios.get("/xhr/search/users", {
                params: { q: value },
            });
            this.info = result.data.items; */
            //函数写法
            /* let result = await axios({
                url: "/xhr/search/users",
                method: "get",
                params: {
                    q: value,
                },
            });
            this.info = result.data.items; */
            //request
            this.isShow = 1;
            try {
                let result = await request({
                    url: "/search/users",
                    method: "get",
                    params: { q: value },
                });
                this.info = result.items;
                this.isShow = 2;
            } catch (error) {
                this.isShow = 3;
            }
        });
    },
};
</script>
<style scoped>
.list {
    display: flex;
    width: 80%;
    margin: 30px auto;
    flex-wrap: wrap;
}
.item {
    width: 33%;
    height: 200px;
    background: rgb(235, 235, 235);
    margin-bottom: 20px;
    text-align: center;
    border: 1px solid rgb(220, 220, 220);
}
.img img {
    width: 200px;
    height: 150px;
    margin: 10px 0;
}
</style>