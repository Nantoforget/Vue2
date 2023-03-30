<template>
    <div>
        <div class="info">
            <div class="item" v-for="item in infos" :key="item.id">
                <div class="img">
                    <img :src="item.avatar_url" />
                </div>
                <div class="text">{{ item.login }}</div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapState } from "vuex";
export default {
    // 组件名字
    name: "Info",
    // 状态数据
    data() {
        return {};
    },
    methods: {},
    computed: {
        ...mapState(["infos"]),
    },
};
</script>
<style scoped>
.info {
    width: 80%;
    display: flex;
    flex-wrap: wrap;
    margin: 20px auto;
    align-content: space-between;
    font-size: 32px;
}
.item {
    width: 20%;
    height: 250px;
    margin: 30px 35px;
}
.img {
    width: 60%;
    height: 60%;
    margin: 10px auto;
}
img {
    width: 100%;
    height: 100%;
}
.text {
    width: 60%;
    height: 20%;
    margin: 5px auto;
    text-align: center;
}
</style>