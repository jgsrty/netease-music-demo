const user = () => import("../views/user/index.vue");

export default [
  {
    path: "/user",
    name: "user",
    component: user,
  },
];
