import service from "@/utils/Axios";

export default {
  // 手机登录
  userLoginPhone(params) {
    return service({
      url: "/login/cellphone",
      method: "get",
      params,
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
