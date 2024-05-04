// 封住业务数据相关代码
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { onBeforeRouteUpdate } from "vue-router";
import { getCategoryAPI } from "@/apis/category";

export function useCategory() {
  const categoryData = ref({});
  const route = useRoute();
  const getCategory = async (id = route.params.id) => {
    const res = await getCategoryAPI(id);
    categoryData.value = res.result;
  };

  onMounted(() => getCategory());

  // 目标：路由变化的时候发送分类接口的新数据

  onBeforeRouteUpdate((to) => {
    getCategory(to.params.id);
  });

  return { categoryData };
}
