<template>
    <div>
        <h1>我是App</h1>
        <div>
            <ul>
                <li v-for="(stu, index) in info" :key="index">
                    {{ stu.name }}
                    -- {{ stu.age }} -- {{ stu.hobby[0] }} --{{ stu.hobby[1] }}
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import axios from "axios";
export default {
    name: "App",
    data() {
        return {
            info: [],
        };
    },
    methods: {},
    computed: {},
    mounted() {
        axios({
            url: "/xhr/api/student",
            method: "get",
        })
            .then((res) => {
                console.log(res);
                this.info = res.data.data;
            })
            .catch((err) => {
                console.log(err);
            });
    },
};
</script>
<style scoped>
</style>