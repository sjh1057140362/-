import httpInstanc from "@/utils/http";

export function getCategoryAPI() {
  return httpInstanc({ url: "/home/category/head" });
}
