<template>
    <div class="app">
        <div class="user">
            <h1>Search Github Users</h1>
            <div class="search">
                <input
                    type="text"
                    v-model="value"
                    placeholder="enter the name you search"
                />
                <button @click="search(value)">Search</button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "Search",
    data() {
        return {
            value: "",
        };
    },
    methods: {
        search(value) {
            this.$bus.$emit("getInfo", value);
            this.value = "";
        },
    },
    computed: {},
    mounted() {},
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