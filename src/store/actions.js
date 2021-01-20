export default {
  commitShowHead({ commit }, flag) {
    commit("switchShowHead", flag);
  },
  commitShowTabBar({ commit }, flag) {
    commit("switchShowTabBar", flag);
  },
  commitShowPlay({ commit }, flag) {
    commit("switchShowPlay", flag);
  },
  commitActiveTab({ commit }, val) {
    commit("switchActiveTab", val);
  },
  commitUserInfo({ commit }, val) {
    commit("setUserInfo", val);
  },
  commitLogout({ commit }) {
    commit("clearUserInfo");
  },
  // 当前播放歌曲
  commitCurrentMusic({ commit }, val) {
    commit("setCurrentMusic", val);
  },
  commitPlayState({ commit }, val) {
    commit("setPlayState", val);
  },
};
