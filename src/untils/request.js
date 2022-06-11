import axios from "axios";
import store from "@/store";
import router from "@/router";

export const baseURL = 'http://pcapi-xiaotuxian-front-devtest.itheima.net/'
const instance = axios.create({
  baseURL,
  timeout: 5000
})

// 请求拦截器
instance.interceptors.request.use(config => {

  const profile = store.state.user.profile
  // 设置token
  if (profile.token) {
    config.headers.Authorization = `Bearer ${profile.token}`
  }
  return config
}, err => {
  return Promise.reject(err)
})

// 响应拦截器
instance.interceptors.response.use(res => res.data, err => {
  // 没有token时需要跳转到登录页面
  if (err.response && err.response.status === 401) {
    store.commit('user/serUser', {})
    // 当前页面路由信息 旨在登陆后返回原来的页面
    const fullPath = encodeURIComponent(router.currentRoute.value.fullPath)
    router.push('/login?redirectUrl=' + fullPath)
  }
  return Promise.reject(err)
})

export default (url, method, submitData) => {
  return instance({
    url,
    method,
    // 如果是get 需要params
    // 如果不是get 需要data

    [method.toLowerCase() === 'get' ? 'params' : 'data']: submitData
  })
}
