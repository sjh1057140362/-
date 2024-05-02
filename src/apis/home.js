import  httpInstanc  from "@/utils/http";

export function getBannerAPI() {
  return httpInstanc({ url: "/home/banner" });
}
export function findNewAPI() {
  return httpInstanc({ url: "/home/new" });
}

export function getHotAPI(){
  return httpInstanc({url:"/home/hot"});
}