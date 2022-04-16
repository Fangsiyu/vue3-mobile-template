import axios from "axios";
import { Toast } from "vant";
// 使用由库提供的配置的默认值来创建实例
const instance = axios.create({
    baseURL: "/api",
    timeout: 250000,
});
// 添加请求拦截器
instance.interceptors.request.use(
    function (config) {
        Toast.loading({
            message: '加载中...',
            forbidClick: true,
            duration: 0
        });

        // 在发送请求之前做些什么
        return config;
    },
    function (error) {
        // 对请求错误做些什么
        return Promise.reject(error);
    }
);
// 添加响应拦截器
instance.interceptors.response.use(
    function (response) {
        console.log('响应数据：', response);
        Toast.clear();
        // 对响应数据做点什么
        if (response.data.status !== 200) {
            Toast.fail(response.data.msg);
        }
        return response.data;
    },
    function (error) {
        console.log('响应数据error：', error);
        Toast.clear();
        // Toast.fail(error);
        // 对响应错误做点什么
        return Promise.reject(error);
    }
);

const get = (url, data) => {
    return new Promise((resolve, reject) => {
        instance
            .get(url, { params: data })
            .then((res) => {
                resolve(res);
            })
            .catch((err) => {
                reject(err);
            });
    });
};
const post = (url, data) => {
    return new Promise((resolve, reject) => {
        instance
            .post(url, data)
            .then((res) => {
                resolve(res);
            })
            .catch((err) => {
                reject(err);
            });
    });
};
export { get, post };
