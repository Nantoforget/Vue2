<template>
    <div>
        <search></search>
        <list></list>
        <card>1</card>
        <card>2</card>
        <card>3</card>
        <card>
            <template slot="jia">jia</template>
            <template #jia>哈哈</template>
        </card>
    </div>
</template>
<script>
import Search from "./components/Search.vue";
import List from "./components/List.vue";
import Card from "./components/Card.vue";
export default {
    components: { Search, List, Card },
    name: "App",
    data() {
        return {};
    },
    methods: {},
    computed: {},
};
</script>
<style scoped>
* {
    padding: 0;
    margin: 0;
}
.app {
    width: 80%;
    height: 200px;
    margin: 0 auto;
    background: rgb(220, 220, 220);
    position: relative;
}
.user {
    position: absolute;
    top: 80px;
    left: 100px;
}
.search input {
    width: 300px;
    height: 30px;
}
button {
    width: 100px;
    height: 36px;
    margin-left: 20px;
}
</style>