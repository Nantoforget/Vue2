<template>
    <div class="app">
        <A :addInfo="addInfo"></A>
        <B :info="info" :changeDoneB="changeDone" :delDate="delDate"></B>
        <c :info="info" :delAll="delAll" :checkAll="checkAll"></c>
    </div>
</template>
<script>
    import A from "@/components/A.vue";
    import B from "@/components/B.vue";
    import C from "./components/C.vue";
    export default {
        // 组件名字
        name: "App",
        components: { A, B, C },
        // 状态数据
        data() {
            return {
                //信息
                info: [
                    {
                        id: 1,
                        title: "哈哈哈",
                        done: false,
                    },
                    {
                        id: 2,
                        title: "嘿嘿嘿",
                        done: false,
                    },
                    {
                        id: 3,
                        title: "睡觉",
                        done: true,
                    },
                ],
                //添加的新对象
                newInfo: {},
            };
        },
        methods: {
            //A组件表单添加数据
            addInfo(value) {
                const newId = this.info.at(-1) ? this.info.at(-1).id + 1 : 1;
                this.newInfo = {
                    id: newId,
                    title: value,
                    done: false,
                };
                this.info.push(this.newInfo);
            },
            //B组件单项改变选中状态
            changeDone(id) {
                let change = this.info.find((ele) => {
                    return ele.id == id;
                });
                change.done = !change.done;
            },
            //删除功能的复用代码
            share(id) {
                let index = this.info.findIndex((item) => {
                    if (typeof id === "number") {
                        return item.id == id;
                    } else {
                        return item.id == id.id;
                    }
                });
                this.info.splice(index, 1);
            },
            //B组件单项删除数据
            delDate(id) {
                if (confirm("您确定要删除吗")) {
                    this.share(id);
                }
            },
            //C组件清除全部任务
            delAll(arr) {
                if (confirm("您确定要删除吗")) {
                    arr.forEach((ele) => {
                        this.share(ele);
                    });
                }
            },
            //全选和全不选
            checkAll(bool) {
                this.info.forEach((ele) => {
                    ele.done = bool;
                });
            },
        },
    };
</script>
<style scoped>
    .app {
        width: 50%;
        margin: 0 auto;
        border: 2px red solid;
        padding: 20px;
    }
</style>
