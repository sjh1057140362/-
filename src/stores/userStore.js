// 用户数据相关
import { ref } from "vue";
import { defineStore } from "pinia";
import { loginAPI } from "@/apis/user";
import { mergeCartAPI } from "@/apis/cart";
import { useCartStore } from "./cartStore";

export const useUserStore = defineStore(
  "user",
  () => {
    const cartStore = useCartStore();
    // 定义管理用户数据的store
    const userInfo = ref({});
    // 定义获取接口数据的action函数
    const getUserInfo = async ({ account, password }) => {
      const res = await loginAPI({ account, password });
      userInfo.value = res.result;
      // 在这里合并购物车
      await mergeCartAPI(
        cartStore.cartList.map((item) => {
          return {
            skuId: item.skuId,
            selected: item.selected,
            count: item.count,
          };
        })
      );
      cartStore.updateNewList();
    };
    // 退出时清除我们的用户信息
    const clearUserInfo = () => {
      userInfo.value = {};
      // 清除购物车内容
      cartStore.clearCart();
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
