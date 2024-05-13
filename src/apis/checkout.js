import request from "@/utils/http";

// 获取结算详情的接口
export const getCheckInfoAPI = () => {
  return request({
    url: "/member/order/pre",
  });
};

// 创建订单接口
export const createOrderAPI = (data) => {
  return request({
    url: "/member/order",
    method: "POST",
    data
  });
};
