import { createApp } from "vue";
import App from "./App.vue";
import router from "@/router";
import { store } from "@/store";

// 自定义组件库样式 https://varlet.gitee.io/varlet-ui/#/zh-CN/style-provider
import { StyleProvider } from "@varlet/ui";
StyleProvider({
  "--color-primary": "#e64340",
});

import "normalize.css";

createApp(App).use(store).use(router).mount("#app");
