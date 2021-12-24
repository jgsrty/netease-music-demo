const login = () => import("../views/login/index.vue");

export default [
  {
    path: "/login",
    name: "login",
    component: login,
  },
];
