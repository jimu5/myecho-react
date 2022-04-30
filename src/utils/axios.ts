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

/**
 * get请求
 * @param {*} url     请求地址
 * @param {*} params
 */
export function get(url: string, params: any) {
  return instance.get(url, {
    params,
  });
}
/**
 * post请求
 * @param {*} url     请求地址
 * @param {*} data
 */
export function post(url: string, data: any) {
  return instance.post(url, data);
}

/**
 * patch请求
 * @param {*} url     请求地址
 * @param {*} data
 */
export function patch(url: string, data: any) {
  return instance.put(url, data);
}

/**
 * delete请求
 * @param {*} url
 */
export function del(url: string) {
  return instance.delete(url);
}
