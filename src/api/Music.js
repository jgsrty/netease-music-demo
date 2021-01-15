import service from "@/utils/Axios";

export default {
  // 音乐url
  getMusicUrl(params) {
    return service({
      url: "/song/url",
      method: "get",
      params,
    });
  },
  // 歌词url
  getMusicLyric(params) {
    return service({
      url: "/lyric",
      method: "get",
      params,
    });
  },
};
