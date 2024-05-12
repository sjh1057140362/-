import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useCartStore = defineStore(
  "cart",
  () => {
    // 1. 定义state - cartList
    const cartList = ref([]);
    // 2. 定义action - addCart
    const addCart = (goods) => {
      console.log("添加", goods);
      // 添加购物车操作
      // 已添加过 - count + 1
      // 没有添加过 - 直接push
      // 思路：通过匹配传递过来的商品对象中的skuId能不能在cartList中找到，找到了就是添加过
      const item = cartList.value.find((item) => goods.skuId === item.skuId);
      if (item) {
        // 找到了
        item.count++;
      } else {
        // 没找到
        cartList.value.push(goods);
      }
    };

    //   删除购物车
    const delCart = (skuId) => {
      // 思路  1.找到删除项的下标值
      const idx = cartList.value.findIndex((item) => skuId === item.skuId);
      cartList.value.splice(idx, 1);

      // 思路  2.使用数字的过滤方法
    };
    //单选功能
    const singleCheck = (skuId, selected) => {
      // 通过skuId找到要修改的哪一项 然后把她的selected修改为穿过来的selected
      const item = cartList.value.find((item) => item.skuId === skuId);
      item.selected = selected;
    };

    // 全选功能
    const allCheck = (selected) => {
      // 把cartList中 每一项都设置为当前的全选框状态
      cartList.value.forEach((item) => (item.selected = selected));
    };

    // 计算属性
    // 1 总的数量 所有项的count之和
    const allCount = computed(() =>
      cartList.value.reduce((a, c) => a + c.count, 0)
    );
    // 2 总的价格 所有项的count*price之和
    const allPrice = computed(() =>
      cartList.value.reduce((a, c) => a + c.count * c.price, 0)
    );

    // 购物车中 总的数量  cartList.selected中为true的和
    const selectedCount = computed(() =>
      cartList.value
        .filter((item) => item.selected)
        .reduce((a, c) => a + c.count, 0)
    );

    // 购物车中 总的价格  cartList.selected中为true的所有项的count*price之和
    const selectedPrice = computed(() =>
      cartList.value
        .filter((item) => item.selected)
        .reduce((a, c) => a +c.count * c.price, 0)
    );

    // 是否全选
    const isAll = computed(() => cartList.value.every((item) => item.selected));

    return {
      cartList,
      allCount,
      allPrice,
      isAll,
      selectedCount,
      selectedPrice,
      allCheck,
      addCart,
      delCart,
      singleCheck,
    };
  },
  {
    persist: true,
  }
);
