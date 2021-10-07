import axios from 'axios'
import {showLoading,hideLoading} from "../common/loading";

export function request(config) {
  showLoading()
  // 1.创建axios的实例
  const instance = axios.create({
    baseURL: 'https://api.it120.cc/changan123',
    timeout: 5000,
    retry : 6,
    retryDelay : 1000
  })

  // 2.axios的拦截器
  // 2.1.请求拦截的作用
  instance.interceptors.request.use(config => {
    if(localStorage.elementToken){
      config.headers.Authorization=localStorage.elementToken
    }
    return config
  }, (err) => {
    console.log(err);
  })

  // 2.2.响应拦截
  instance.interceptors.response.use(res => {
    hideLoading()
    return res.data

  }, err => {
    console.log(err)
    var config = err.config;
    // 如果配置不存在或未设置重试选项，则拒绝

    if (!config || !config.retry) return Promise.reject(err);

    // 设置变量以跟踪重试次数

    config.__retryCount = config.__retryCount || 0;

    // 检查我们是否已经注销了总重试次数

    if (config.__retryCount >= config.retry) {
      // 剔除错误

      return Promise.reject(err);
    }

    // 增加重试次数

    config.__retryCount += 1;

    // 创建新的异步对象来处理重试请求

    var backoff = new Promise(function(resolve) {
      setTimeout(function() {
        resolve();
      }, config.retryDelay || 1);
    });


    return backoff.then(function() {
      return instance(config);
    });

  })

  // 3.发送真正的网络请求
  return instance(config)
  // 此处返回promis对象
}
