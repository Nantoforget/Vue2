<template>
    <div>
        <div class="rgb">
            R(0)
            <p>
                <input
                    type="range"
                    min="0"
                    max="255"
                    :value="R"
                    name="r"
                    @input="go"
                />
            </p>
            G(0)
            <p>
                <input
                    type="range"
                    min="0"
                    max="255"
                    :value="G"
                    name="g"
                    @input="go"
                />
            </p>
            B(0)
            <p>
                <input
                    type="range"
                    min="0"
                    max="255"
                    :value="B"
                    name="b"
                    @input="go"
                />
            </p>
        </div>
    </div>
</template>
<script>
import { mapState } from "vuex";
export default {
    // 组件名字
    name: "Twig",
    // 状态数据
    data() {
        return {};
    },
    methods: {
        go(event) {
            this.$store.dispatch("getColor", event.target);
        },
    },
    computed: {
        ...mapState(["R", "G", "B"]),
    },
};
</script>
<style scoped>
.rgb {
    width: 60%;
    height: 300px;
    margin: 20px auto;
    font-size: 36px;
}
input {
    width: 100%;
}
</style>