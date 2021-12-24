import { createStore } from "vuex";

export const store = createStore({
  state: {
    count: 1,
  },
  getters: {
    count: (state) => state.count,
  },
  actions: {
    multiCount({ commit }, val) {
      let count = this.state.count * val;
      commit("MULTI_COUNT", count);
    },
  },
  mutations: {
    MULTI_COUNT(state, val) {
      state.count = val;
    },
  },
});
