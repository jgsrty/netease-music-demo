import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      showHeader: true,
      showTabBar: true,
      activeTab: "home",
    };
  },
  mutations: {
    switchShowHead(state, flag) {
      state.showHeader = flag;
    },
    switchShowTabBar(state, flag) {
      state.showTabBar = flag;
    },
    switchActiveTab(state, val) {
      state.activeTab = val;
    },
  },
  actions: {
    commitShowHead({ commit }, flag) {
      commit("switchShowHead", flag);
    },
    commitShowTabBar({ commit }, flag) {
      commit("switchShowTabBar", flag);
    },
    commitActiveTab({ commit }, val) {
      commit("switchActiveTab", val);
    },
  },
});

export default store;
