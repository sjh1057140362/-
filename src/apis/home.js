import  httpInstanc  from "@/utils/http";

export function getBannerAPI() {
  return httpInstanc({ url: "/home/banner" });
}
