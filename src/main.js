import "@/styles/common.scss";



import { createApp } from "vue";
import { createPinia } from "pinia";
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import App from "./App.vue";
import router from "./router";

// 懒加载内容
import { layzPlugin } from "@/directives/index";

// 引入全局插件
import { componentPlugin } from "@/components/index";
const app = createApp(App);
const pinia = createPinia()
// 注册持久化插件
pinia.use(piniaPluginPersistedstate)
app.use(pinia);
app.use(router);
app.use(layzPlugin);
app.use(componentPlugin)
app.mount("#app");
