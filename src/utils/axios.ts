import { baseApiUrl } from "@/utils/config";
import axios from "axios";

const instance = axios.create({
  baseURL: baseApiUrl,
  timeout: 10000,
});

// 全局拦截器
instance.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    // 设置请求的 token 等等
    // config.headers["authorization"] = "Bearer " + getToken();
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

export default instance;
