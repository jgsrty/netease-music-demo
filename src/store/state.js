import Storage from "@/utils/Storage";
export default {
  showHeader: true,
  showTabBar: true,
  activeTab: "home",
  userInfo: Storage.get("userInfo") || {},
};
