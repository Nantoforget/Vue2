<template>
    <div class="b">
        <div class="box"></div>
        <p>
            R:<input type="range" min="0" max="255" v-model="valueR" />
            {{ valueR }}
        </p>
        <p>
            G:<input type="range" min="0" max="255" v-model="valueG" />
            {{ valueG }}
        </p>
        <p>
            B:<input type="range" min="0" max="255" v-model="valueB" />
            {{ valueB }}
        </p>
    </div>
</template>
<script>
export default {
    // 组件名字
    name: "B",
    // 状态数据
    data() {
        return {
            valueR: 0,
            valueG: 0,
            valueB: 0,
        };
    },
    methods: {},
    computed: {},
};
</script>
<style scoped>
.b {
    width: 600px;
    height: 200px;
    margin: 0 auto;
}
.box {
    width: 100%;
    height: 200px;
    background-color: rgb(v-bind(valueR), v-bind(valueG), v-bind(valueB));
}
p {
    font-size: 24px;
    width: 100%;
}
p input {
    width: 505px;
}
</style>