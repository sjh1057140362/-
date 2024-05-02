import httpInstanc from "@/utils/http";

export function getCategory() {
  return httpInstanc({ url: "home/category/head" });
}
