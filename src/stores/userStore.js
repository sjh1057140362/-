// 用户数据相关
import { ref } from "vue";
import { defineStore } from "pinia";
import { loginAPI } from "@/apis/user";

export const useUserStore = defineStore(
  "user",
  () => {
    // 定义管理用户数据的store
    const userInfo = ref({});
    // 定义获取接口数据的action函数
    const getUserInfo = async ({ account, password }) => {
      const res = await loginAPI({ account, password });
      userInfo.value = res.result;
    };
    // 退出时清除我们的用户信息
    const clearUserInfo = () => {
      userInfo.value = {};
    };
    // 以对象的形式把state和action return
    return {
      userInfo,
      getUserInfo,
      clearUserInfo,
    };
  },
  { persist: true }
);
