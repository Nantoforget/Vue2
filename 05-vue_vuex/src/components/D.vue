<template>
    <div class="clo">
        <p>
            R({{ R }})<input
                type="range"
                min="0"
                max="255"
                name="red"
                :value="R"
                @input="color"
            />
        </p>
        <p>
            G({{ G }})<input
                type="range"
                min="0"
                max="255"
                name="green"
                :value="G"
                @input="color"
            />
        </p>
        <p>
            B({{ B }})<input
                type="range"
                min="0"
                max="255"
                name="blue"
                :value="B"
                @input="color"
            />
        </p>
    </div>
</template>
<script>
import { mapState } from "vuex";
export default {
    // 组件名字
    name: "D",
    // 状态数据
    data() {
        return {};
    },
    methods: {
        color(event) {
            this.$store.dispatch("color", event.target);
        },
    },
    computed: {
        ...mapState(["R", "G", "B"]),
    },
};
</script>
<style scoped>
.clo {
    width: 50%;
    margin: 0 auto;
    font-size: 26px;
}
input {
    width: 100%;
}
</style>