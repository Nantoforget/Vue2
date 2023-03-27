const express = require("express");
const app = express();
app.set("/student", (res, rej) => {});
app.listen(3000, () => {
    console.log("服务器开启");
});
