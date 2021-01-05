import {
  createRouter,
  // createWebHashHistory,
  createWebHistory,
} from "vue-router";

import Home from "../pages/Home/index.vue";
import Login from "../pages/Login/index.vue";
import User from "../pages/User/index.vue";

const router = createRouter({
  history: createWebHistory(),
  // history: createWebHashHistory(),
  routes: [
    { path: "/", redirect: "home" },
    { path: "/login", component: Login },
    { path: "/home", component: Home },
    { path: "/user", component: User },
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
