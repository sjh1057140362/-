import "@/styles/common.scss";



import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import { layzPlugin } from "@/directives/index";
const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(layzPlugin);

app.mount("#app");
