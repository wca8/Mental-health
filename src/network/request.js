import axios from 'axios'
import {showLoading,hideLoading} from "../common/loading";

export function request(config) {
  showLoading()
  // 1.创建axios的实例
  const instance = axios.create({
    baseURL: 'https://api.it120.cc/changan123',
    timeout: 5000
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
    console.log(err);
  })

  // 3.发送真正的网络请求
  return instance(config)
  // 此处返回promis对象
}
