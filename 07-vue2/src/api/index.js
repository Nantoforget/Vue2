import axios from "axios";
import nProgress from "nprogress";
import "nprogress/nprogress.css";
const requests = axios.create({
    // baseURL: "/xhr",
    timeout: 5000,
});
requests.interceptors.request.use(
    (config) => {
        nProgress.start();
        // console.log(config);
        return config;
    },
    (err) => {
        return Promise.reject(err);
    }
);
requests.interceptors.response.use((res) => {
    // console.log(res);
    nProgress.done();
    return res.data;
});
export default requests;
