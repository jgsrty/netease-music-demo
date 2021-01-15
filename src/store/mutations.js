import Storage from "@/utils/Storage";
export default {
  switchShowHead(state, flag) {
    state.showHeader = flag;
  },
  switchShowTabBar(state, flag) {
    state.showTabBar = flag;
  },
  switchActiveTab(state, val) {
    state.activeTab = val;
  },
  setUserInfo(state, val) {
    state.userInfo = val;
  },
  clearUserInfo(state) {
    state.userInfo = {};
    Storage.del("userInfo");
  },
};
