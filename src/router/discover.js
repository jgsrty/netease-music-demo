const discover = () => import("../views/discover/index.vue");

export default [
  {
    path: "/",
    name: "discover",
    component: discover,
  },
];
