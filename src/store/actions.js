export default {
  commitShowHead({ commit }, flag) {
    commit("switchShowHead", flag);
  },
  commitShowTabBar({ commit }, flag) {
    commit("switchShowTabBar", flag);
  },
};
