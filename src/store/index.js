import { createStore } from "vuex";
import Storage from "@/utils/storage";

export const store = createStore({
  state: {
    showLogin: false,
    redirectPath: "", //重定向路由
    userInfo: Storage.get("userInfo") || {},
  },
  getters: {
    showLogin: (state) => state.showLogin,
    redirectPath: (state) => state.redirectPath,
    userInfo: (state) => state.userInfo,
  },
  actions: {
    loginAction({ commit }, val) {
      commit("LOGIN_MUTATION", val);
    },
    redirectAction({ commit }, val) {
      commit("REDIRECT_MUTATION", val);
    },
    userInfoAction({ commit }, val) {
      Storage.set("userInfo", val);
      commit("USER_INFO_MUTATION", val);
    },
  },
  mutations: {
    LOGIN_MUTATION(state, val) {
      state.showLogin = val;
    },
    REDIRECT_MUTATION(state, val) {
      state.redirectPath = val;
    },
    USER_INFO_MUTATION(state, val) {
      state.userInfo = val;
    },
  },
});
