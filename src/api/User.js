import service from "@/utils/Axios";

export default {
  // 手机登录
  userLoginPhone({ phone, password }) {
    return service({
      url: "/login/cellphone",
      method: "get",
      params: { phone, password },
    });
  },
  // 邮箱登录
  userLoginEmail({ email, password }) {
    return service({
      url: "/login",
      method: "get",
      params: { email, password },
    });
  },
  // 退出登录
  userLogout() {
    return service({
      url: "/logout",
      method: "get",
    });
  },
  // test
  test(params) {
    return service({
      url: "/recommend/resource",
      method: "get",
      params,
    });
  },
};
