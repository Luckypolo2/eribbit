import axios from 'axios'
import store from '@/store'
import router from '@/router'
// 导出baseUrl,基础地址
export const baseURL = 'http://pcapi-xiaotuxian-front-devtest.itheima.net/'
// create axios instance
const instance = axios.create({
  baseURL,
  timeout: 5000
})
// create request interceptor
instance.interceptors.request.use(config => {
  // do something before request is sent
  // 获取用户信息对象,有token就在请求中加入
  const profile = store.state.user.profile
  if (profile.token) {
    config.headers.Authorization = `Bearer ${profile.token}`
  }
  return config
}, err => {
  return Promise.reject(err)
})
// create response interceptor
instance.interceptors.response.use(response => {
  // do something with response data
  return response.data // 调用直接用data
}, err => {
  // do something with response error
  if (err.response && err.response.status === 401) {
    // 清空无效用户信息
    store.commit('user/setUser', {})
    // 跳转到登录页面, router.currentRoute.value.fullPath是当前路由的完整路径 vue3加value
    // encodeURIComponent转码
    router.push('/login?redirectUrl=' + encodeURIComponent(router.currentRoute.value.fullPath)).then()
  }
  return Promise.reject(err)
})

export default (url, method, submitData) => {
  return instance({
    url,
    method, // 请求方式
    // []设置一个动态KEY,写js表达式
    [method.toLowerCase() === 'get' ? 'params' : 'data']: submitData
  })
}
