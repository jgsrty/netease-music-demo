import service from "@/utils/Axios";

export default {
  getBanner(params) {
    return service({
      url: "/banner",
      method: "get",
      params,
    });
  },
  // 推荐歌单
  getPersonalized(params) {
    return service({
      url: "/personalized?limit=10",
      method: "get",
      params,
    });
  },
  // 推荐新音乐
  getNewSong(params) {
    return service({
      url: "/personalized/newsong?limit=10",
      method: "get",
      params,
    });
  },
};
