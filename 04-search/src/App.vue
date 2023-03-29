<template>
    <div>
        <search></search>
        <list></list>
    </div>
</template>
<script>
import Search from "./components/Search.vue";
import List from "./components/List.vue";
export default {
    components: { Search, List },
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