const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
    transpileDependencies: true,
    //关闭Eslint
    lintOnSave: false,
    //就是webpack-dev-serve服务器配置
    devServer: {
        host: "127.0.0.1",
        port: 8080,
    },
});
