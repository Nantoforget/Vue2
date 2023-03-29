const express = require("express");
const app = express();
const stu_ARR = [
    {
        name: "孙悟空",
        age: 18,
        hobby: ["金箍棒", "花果山"],
    },
    {
        name: "猪八戒",
        age: 28,
        hobby: ["九齿钉耙", "高老庄"],
    },
    {
        name: "沙和尚",
        age: 38,
        hobby: ["戒杖", "流沙河"],
    },
    {
        name: "唐僧",
        age: 16,
        hobby: ["禅杖", "女儿国"],
    },
];
app.get("/student", (req, res) => {
    res.send({
        status: "ok",
        data: stu_ARR,
    });
});
app.get("/api/student", (req, res) => {
    res.send({
        status: "ok",
        data: stu_ARR,
    });
});
app.listen(3000, () => {
    console.log("服务器开启");
});
