import service from "@/tools/request";
const common = {
  //获取音乐url
  getMusicUrl(id) {
    return service({
      url: "/music/url",
      method: "get",
      params: {
        id
      }
    });
  },
  //每日推荐歌曲
  getDailyMusic() {
    return service({
      url: "/recommend/songs",
      method: "get"
    });
  },
  //获取用户歌单
  getUserPlayList(uid) {
    return service({
      url: "/user/playlist",
      method: "get",
      params: {
        uid
      }
    });
  },
  //获取歌单详情歌曲列表
  getCurrentPlayList(id) {
    return service({
      url: "/playlist/detail",
      method: "get",
      params: {
        id
      }
    });
  }
};

export default common;
