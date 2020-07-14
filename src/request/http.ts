/*
 * @description: 封装请求类，支持请求多个地址的数据
 * @author: Star Shi
 * @Date: 2020-07-13 17:36:57
 * @LastEditTime: 2020-07-14 17:37:45
 */

import Axios, {
  AxiosStatic,
  AxiosRequestConfig,
  AxiosResponse,
  AxiosError,
} from "axios";
import { message } from "antd";
import config from "../config";
import { SuccessResponse} from "../interface/axios";
import store from "../redux";

export class Http {
  // 请求对象
  private axios: AxiosStatic = Axios;

  constructor(url?: string) {
    const { axios } = this;
    // 超时时间
    axios.defaults.timeout = 10000;

    // 请求连接
    axios.defaults.baseURL = url || config.apiUrl;

    // post请求头
    axios.defaults.headers.post["Content-Type"] =
      "application/x-www-form-urlencoded;charset=UTF-8";

    // 执行请求拦截器
    this.useInterceptRequest();

    // 执行响应拦截器
    this.useInterceptResponse();
  }

  private useInterceptRequest() {
    this.axios.interceptors.request.use(
      (config: AxiosRequestConfig) => {
        const token = store.getState().commonReducer.token;
        token && (config.headers["ACCESS-TOKEN"] = token);
        return config;
      },
      (error: AxiosError) => {
        return Promise.reject(error);
      }
    );
  }
  private useInterceptResponse() {
    this.axios.interceptors.response.use(
      (response: AxiosResponse) => {
        return response;
      },
      (error: AxiosError) => {
        if (error && error.response) {
          switch (error.response.status) {
            case 400:
              error.message = "请求错误(400)";
              break;
            case 401:
              error.message = "未授权，请重新登录(401)";
              break;
            case 403:
              error.message = "拒绝访问(403)";
              break;
            case 404:
              error.message = "请求出错(404)";
              break;
            case 408:
              error.message = "请求超时(408)";
              break;
            case 429:
              error.message = "服务器繁忙，请稍后再试(429)";
              break;
            case 500:
              error.message = "服务器错误(500)";
              break;
            case 501:
              error.message = "服务未实现(501)";
              break;
            case 502:
              error.message = "网络错误(502)";
              break;
            case 503:
              error.message = "服务不可用(503)";
              break;
            case 504:
              error.message = "网络超时(504)";
              break;
            case 505:
              error.message = "HTTP版本不受支持(505)";
              break;
            default:
              error.message = `连接出错(${error.response.status})!`;
          }
        } else {
          error.message = "连接服务器失败!";
        }
        return Promise.reject(error);
      }
    );
  }

  /**
   * @description 封装请求函数
   * @param {string} method 请求类型
   * @param {string} url 请求地址
   * @param {*} [option] 请求参数
   * @param {AxiosRequestConfig} [selfConfig={}]
   * @return 返回pro
   */
  private fetchData(
    method: string,
    url: string,
    option?: any,
    selfConfig: AxiosRequestConfig = {}
  ) {
    let httpDefault = {
      method: method,
      url: url,
      params: method === "GET" || method === "DELETE" ? option : null,
      data: method === "POST" || method === "PUT" ? option : null,
    };
    let requestConfig = Object.assign(httpDefault, selfConfig);
    return new Promise<SuccessResponse>((resolve, reject) => {
      this.axios(requestConfig)
        .then((response: AxiosResponse) => {
          resolve(response.data);
        })
        .catch((error: AxiosError) => {
          message.error(error.message);
        });
    });
  }

  /**
   * @description get 请求
   * @param {string} url 请求地址
   * @param {*} option 请求参数
   * @return Promise<SuccessResponse> 返回Promise对象，携带后台返回的数据
   */
  public get(url: string, option: any = {}) {
    return this.fetchData("GET", url, option);
  }

  /**
   * @description post 请求
   * @param {string} url 请求地址
   * @param {*} option 请求参数
   * @return Promise<SuccessResponse> 返回Promise对象，携带后台返回的数据
   */
  public post(url: string, option: any = {}) {
    return this.fetchData("POST", url, option);
  }

  /**
   * @description put 请求
   * @param {string} url 请求地址
   * @param {*} option 请求参数
   * @return Promise<SuccessResponse> 返回Promise对象，携带后台返回的数据
   */
  public put(url: string, option: any = {}) {
    return this.fetchData("PUT", url, option);
  }

  /**
   * @description delete 请求
   * @param {string} url 请求地址
   * @param {*} option 请求参数
   * @return Promise<SuccessResponse> 返回Promise对象，携带后台返回的数据
   */
  public del(url: string, option: any = {}) {
    return this.fetchData("DELETE", url, option);
  }

  /**
   * @description post 请求 上传文件
   * @param {string} url 请求地址
   * @param {*} option 请求参数
   * @return Promise<SuccessResponse> 返回Promise对象，携带后台返回的数据
   */
  public upload(url: string, option: any = {}) {
    let selfConfig: AxiosRequestConfig = {
      headers: { "Content-Type": "multipart/form-data" },
    };
    let formData: FormData = new FormData();
    let keys: string[] = Object.keys(option);
    for (let key of keys) {
      formData.append(key, option[key]);
    }
    return this.fetchData("POST", url, formData, selfConfig);
  }
}
