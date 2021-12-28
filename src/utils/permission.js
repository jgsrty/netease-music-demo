import router from "@/router";
import Storage from "@/utils/Storage";
import { store } from "@/store";

router.beforeEach((to) => {
  // 未登录重定向至登录页
  if (to.meta.needLogin && !Storage.get("userInfo")) {
    store.dispatch("loginAction", true);
    store.dispatch("redirectAction", to.fullPath);
    return false;
  }
});
