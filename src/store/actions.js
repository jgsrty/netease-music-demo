const actions = {
  setUserInfo({ commit }, userInfo) {
    commit("setUserInfo", userInfo);
  },
  setToken({ commit }, token) {
    commit("setToken", token);
  },
  setLogin({ commit }, isLogin) {
    commit("setLogin", isLogin);
  },
  setLogOut({ commit }, isLogin) {
    commit("setLogOut", isLogin);
  },
  setHeader({ commit }, { hasBack = true, title, userIcon = true }) {
    commit("setHeader", {
      hasBack,
      title,
      userIcon
    });
  },
  setAudioEl({ commit }, showAudio) {
    commit("setAudioEl", showAudio);
  },
  playMusic({ commit }, { title, artist, src, pic ,index }) {
    commit("playMusic", {
      title,
      artist,
      src,
      pic,
      index
    });
  },
  setListEl({ commit }, { show }) {
    commit("setListEl", { show });
  },
  playList({ commit }, params) {
    commit("playList", params);
  }
};

export default actions;
