import service from "@/utils/axios";

export default {
  phoneLogin(params) {
    return service({
      url: "/login/cellphone",
      method: "get",
      params
    });
  },
};
