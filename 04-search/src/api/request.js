//对于axios进行二次封装,带有请求、响应拦截器
import axios from "axios";
//引入nprogress进度条
import nProgress from "nprogress";
//引入进度条样式
import "nprogress/nprogress.css";
//创建axios实例
let requests = axios.create({
    baseURL: "xhr", //基础路径，在代理的/api后面
    timeout: 5000,
});
//请求拦截器
requests.interceptors.request.use((config) => {
    nProgress.start();
    return config;
});
//响应拦截器
requests.interceptors.response.use(
    (res) => {
        nProgress.done();
        return res.data;
    },
    () => {
        return Promise.reject();
    }
);
export default requests;
