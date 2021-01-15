import {
  createRouter,
  // createWebHashHistory,
  createWebHistory,
} from "vue-router";

import Home from "../pages/Home/index.vue";
import Login from "../pages/Login/index.vue";
import User from "../pages/User/index.vue";
import Play from "../pages/Play/index.vue";

const router = createRouter({
  history: createWebHistory(),
  // history: createWebHashHistory(),
  routes: [
    { path: "/", redirect: "home" },
    {
      path: "/login",
      name: "login",
      component: Login,
      meta: { header: false, tabbar: false },
    },
    { path: "/home", name: "home", component: Home },
    {
      path: "/user",
      name: "user",
      component: User,
      meta: { header: false, needLogin: true },
    },
    {
      path: "/play",
      name: "play",
      component: Play,
      meta: { header: false, tabbar: false },
    },
    // {
    //   path: "/",
    //   component: Admin,
    //   redirect: "home",
    //   children: [
    //     { path: "home", component: Home },
    //     { path: "alarm", component: Alarm },
    //     { path: "keywords", component: Keywords },
    //   ],
    // },
  ],
});

export default router;
