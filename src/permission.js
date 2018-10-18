import router from "./router";
import Storage from "@/tools/storage";

router.beforeEach((to, from, next) => {
  if (
    to.matched.some(
      res =>
        res.meta.needLogin &&
        !Storage.get("isLogin") &&
        !Storage.get("userInfo")
    )
  ) {
    next({
      path: "/login",
      query: { redirect: to.path }
    });
    return;
  }
  //登录状态下不允许访问登录页
  if (to.path == "/login" && Storage.get("isLogin")) {
    next(false);
    return;
  }
  next();
});
