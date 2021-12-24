const home = () => import("../views/home/index.vue");

export default [
  {
    path: "/",
    name: "home",
    component: home,
  },
];
