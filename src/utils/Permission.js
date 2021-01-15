import router from "@/router";
import Storage from "@/utils/Storage";
import store from "@/store";

router.beforeEach((to) => {
  store.dispatch("commitActiveTab", to.name);
  to.meta.header === undefined
    ? store.dispatch("commitShowHead", true)
    : store.dispatch("commitShowHead", false);
  to.meta.tabbar === undefined
    ? store.dispatch("commitShowTabBar", true)
    : store.dispatch("commitShowTabBar", false);
  // 未登录重定向至登录页
  if (to.meta.needLogin && !Storage.get("userInfo")) {
    router.push({
      path: "/login",
      query: { redirect: to.path },
    });
  }
  // 已登录不能重复访问
  if (to.path == "/login" && Storage.get("userInfo")) {
    return false;
  }
});
