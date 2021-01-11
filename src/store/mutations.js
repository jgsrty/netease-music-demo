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
};
