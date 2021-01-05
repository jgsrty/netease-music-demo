import service from "@/utils/Axios";

export default {
  getBanner(params) {
    return service({
      url: "/banner",
      method: "get",
      params,
    });
  },
};
