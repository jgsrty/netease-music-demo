const songGroup = () => import("../views/songGroup/index.vue");

export default [
  {
    path: "/songGroup",
    name: "songGroup",
    component: songGroup,
    meta: {
      needLogin: true,
    },
  },
];
