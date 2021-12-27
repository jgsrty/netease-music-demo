import service from "@/utils/axios";

export default {
  getBanner() {
    return service({
      url: "/banner",
      method: "get",
    });
  },
  // 推荐歌单
  getRecommendSongGroup() {
    return service({
      url: "/top/playlist?limit=10&order=hot",
      method: "get",
    });
  },
};
