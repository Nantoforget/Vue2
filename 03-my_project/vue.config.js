const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
    transpileDependencies: true,
    lintOnSave: false,
    devServer: {
        host: "127.0.0.1",
        port: 8080,
        //配置代理跨域
        proxy: {
            //代理服务器可以配置多个
            "/xhr": {
                target: "http://localhost:3000", //获取服务器地址
                pathRewrite: { "^/xhr": "" }, //路径重写[代理服务器向服务器发请求会把/api去掉]
            },
        },
    },
});
