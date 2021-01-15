export default {
  commitShowHead({ commit }, flag) {
    commit("switchShowHead", flag);
  },
  commitShowTabBar({ commit }, flag) {
    commit("switchShowTabBar", flag);
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
};
