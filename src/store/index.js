import Vue from "vue";
import Vuex from "vuex";
import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";
import Storage from "@/tools/storage";

Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    userInfo: Storage.get("userInfo") || {},
    //从服务端获取到的token
    token: null,
    //是否登录
    isLogin: Storage.get("isLogin"),
    //标题栏
    header: {
      hasBack: false,
      title: "",
      userIcon: true
    },
    //是否显示底部播放器
    showAudio: true,
    currentMusic: {
      title: "",
      artist: "",
      src: "",
      pic: "",
      index: ''
    },
    //播放列表
    showList: {
      show: false
    },
    playList: []
  },
  getters,
  actions,
  mutations
});
