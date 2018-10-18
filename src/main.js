// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
//normalize.css
import "normalize.css/normalize.css";
//globalCss
import "./style/global.css";
//rem
import "./assets/js/rem";
//vuex
import store from "./store";
//better-scroll
import BScroll from 'better-scroll'

Vue.config.productionTip = false;
Vue.prototype.BScroll = BScroll
//permission登录拦截权限
import "@/permission";
//vux全局调用
import { ToastPlugin, ConfirmPlugin, LoadingPlugin } from "vux";
Vue.use(ToastPlugin);
Vue.use(ConfirmPlugin);
Vue.use(LoadingPlugin);
//增加过滤器
require("./filters");

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  store,
  components: { App },
  template: "<App/>"
});
