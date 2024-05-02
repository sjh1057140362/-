// axios的基础封装
import axios from 'axios'

const httpInstanc =axios.create({
    baseURL:'http://pcapi-xiaotuxian-front-devtest.itheima.net',
    timeout: 5000
})

// 拦截器
// axios请求拦截器
httpInstanc.interceptors.request.use(config => {
    return config
  }, e => Promise.reject(e))
  
  // axios响应式拦截器
  httpInstanc.interceptors.response.use(res => res.data, e => {
    return Promise.reject(e)
  })

export default httpInstanc