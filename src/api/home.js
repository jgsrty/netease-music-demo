import service from "@/tools/request";
const home = {
  //首页banner
  homeBanner() {
    return service({
      url: "/banner",
      method: "get"
    });
  },
  //推荐新音乐
  newestMusic() {
    return service({
      url: "/personalized/newsong",
      method: "get"
    });
  },
  //推荐歌单
  songList() {
    return service({
      url: "/personalized",
      method: "get"
    });
  }
};

export default home;
