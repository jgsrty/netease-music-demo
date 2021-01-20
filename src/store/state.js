import Storage from "@/utils/Storage";
export default {
  showHeader: true,
  showTabBar: true,
  showPlay: false,
  activeTab: "home",
  userInfo: Storage.get("userInfo") || {},
  currentMusic: {},
  playState: false,
};
