import { createRouter, createWebHashHistory } from "vue-router";

//根据js文件，自动装载路由模块
let routes = [];
const modules = import.meta.globEager("./*.js");
Object.keys(modules).forEach((fileName) => {
  if (fileName !== "./index.js") {
    routes.push(...modules[fileName].default);
  }
});
console.log(routes);

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
