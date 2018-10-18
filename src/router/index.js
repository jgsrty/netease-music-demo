import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    //首页
    {
      path: "/",
      redirect: "/index"
    },
    {
      path: "/index",
      name: "index",
      component: r =>
        require.ensure([], () => r(require("@/pages/home/index"), "index")),
      meta: {
        keepAlive: true
      }
    },
    //登录页
    {
      path: "/login",
      name: "login",
      component: r =>
        require.ensure([], () => r(require("@/pages/login/index"), "login"))
    },
    //用户信息
    {
      path: "/userInfo",
      name: "userInfo",
      component: r =>
        require.ensure([], () =>
          r(require("@/pages/userInfo/index"), "userInfo")
        )
    },
    //私人Fm
    {
      path: "/personalFm",
      name: "personalFm",
      component: r =>
        require.ensure([], () =>
          r(require("@/pages/tabsPage/personalFm/index"), "personalFm")
        ),
      meta: {
        needLogin: true
      }
    },
    //每日推荐
    {
      path: "/recomSong",
      name: "recomSong",
      component: r =>
        require.ensure([], () =>
          r(require("@/pages/tabsPage/recomSong/index"), "recomSong")
        ),
      meta: {
        needLogin: true
      }
    },
    //我的音乐
    {
      path: "/myMusic/index",
      name: "myMusic",
      component: r =>
        require.ensure([], () =>
          r(require("@/pages/tabsPage/myMusic/index"), "myMusic")
        ),
      meta: {
        needLogin: true
      }
    },
    //歌单详情歌曲列表
    {
      path: "/myMusic/playList",
      name: "myMusicPlayList",
      component: r =>
        require.ensure([], () =>
          r(require("@/pages/tabsPage/myMusic/musicDetail"), "myMusic")
        ),
      meta: {
        needLogin: true
      }
    },
    //排行榜
    {
      path: "/topList",
      name: "topList",
      component: r =>
        require.ensure([], () =>
          r(require("@/pages/tabsPage/topList/index"), "topList")
        ),
      meta: {
        needLogin: true
      }
    },
    {
      path: "/detail",
      name: "detail",
      component: r =>
        require.ensure([], () => r(require("@/pages/detail/index"), "detail"))
    }
  ]
});
