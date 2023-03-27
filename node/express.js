const express = require("express");
const app = express();
const obj = {
    name: "孙悟空",
    age: 18,
    hobby: ["金箍棒", "猴毛"],
};
app.get("/student", (req, res) => {
    res.send({
        status: "ok",
        data: obj,
    });
});
app.listen(3000, () => {
    console.log("服务器开启");
});
