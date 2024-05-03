import httpInstanc from "@/utils/http";

// 轮播图
export function getBannerAPI(params = {}) {
  const { distributionSite = "1" } = params;
  return httpInstanc({
    url: "/home/banner",
    params: { distributionSite },
  });
}

// 新鲜好物
export function findNewAPI() {
  return httpInstanc({ url: "/home/new" });
}

// 人气推荐

export function getHotAPI() {
  return httpInstanc({ url: "/home/hot" });
}

// 商品推荐
export function getGoodsAPI() {
  return httpInstanc({
    url: "/home/goods",
  });
}
