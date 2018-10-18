import service from "@/tools/request";
const user = {
  //手机登录
  phoneLogin({ phone, password }) {
    return service({
      url: "/login/cellphone",
      method: "get",
      params: {
        phone,
        password
      }
    });
  },
  //邮箱登录
  emailLogin({ email, password }) {
    return service({
      url: "/login",
      method: "get",
      params: {
        email,
        password
      }
    });
  },
  //获取用户信息
  getUserInfo(uid) {
    return service({
      url: "/user/detail",
      method: "get",
      params: {
        uid
      }
    });
  },
  test() {
    return service({
      url: "/recommend/songs",
      method: "get"
    });
  }
};

export default user;
