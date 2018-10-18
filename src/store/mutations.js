import Storage from "@/tools/storage";
const mutations = {
  setUserInfo(state, userInfo) {
    Storage.set("userInfo", userInfo);
    state.userInfo = userInfo;
  },
  setToken(state, token) {
    state.token = token;
  },
  setLogin(state, isLogin) {
    Storage.set("isLogin", isLogin);
    state.isLogin = isLogin;
  },
  setLogOut(state, isLogin) {
    Storage.set("isLogin", isLogin);
    Storage.del("userInfo");
    state.isLogin = isLogin;
    state.userInfo = {};
  },
  setHeader(state, { hasBack, title, userIcon }) {
    state.header.hasBack = hasBack;
    state.header.title = title;
    state.header.userIcon = userIcon;
  },
  setAudioEl(state, showAudio) {
    state.showAudio = showAudio;
  },
  playMusic(state, { title, artist, src, pic, index }) {
    state.currentMusic.title = title;
    state.currentMusic.artist = artist;
    state.currentMusic.src = src;
    state.currentMusic.pic = pic;
    state.currentMusic.index = index;
  },
  setListEl(state, { show }) {
    state.showList.show = show;
  },
  playList(state, params) {
    state.playList = params;
  }
};

export default mutations;
