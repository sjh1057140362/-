// axios的基础封装
import axios from "axios";
import { useUserStore } from "@/stores/userStore";
import { ElMessage } from "element-plus";
import router from "@/router";
import "element-plus/theme-chalk/el-message.css";

const httpInstanc = axios.create({
  baseURL: "http://pcapi-xiaotuxian-front-devtest.itheima.net",
  timeout: 5000,
});

// 拦截器
// axios请求拦截器
httpInstanc.interceptors.request.use(
  (config) => {
    // 从pinia中获取token数据
    const userStore = useUserStore();
    // 按照后端的要求拼接token数据
    const token = userStore.userInfo.token;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (e) => Promise.reject(e)
);

// axios响应式拦截器
httpInstanc.interceptors.response.use(
  (res) => res.data,
  (e) => {
    const userStore = useUserStore();
    // 统一错误提示
    ElMessage({
      type: "warning",
      message: e.response.data.message,
    });
    // 401 token过期拦截处理
    // 清理用户过期数据
    // 跳转到登录页面
    if (e.response.status === 401) {
      userStore.clearUserInfo()
      router.push('/login')
    }
    return Promise.reject(e);
  }
);

export default httpInstanc;
