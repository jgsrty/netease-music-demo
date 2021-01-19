import { createApp } from "vue";
import App from "./App.vue";
import routes from "./router";
import store from "./store";
import "@/utils/Permission";
// global scss
// import "@/styles/index.scss";
// vant
import Vant from "vant";
import "vant/lib/index.css";
// Vconsole
import Vconsole from "vconsole";

// const vConsole = new Vconsole();

const app = createApp(App);
app.use(routes);
app.use(store);
app.use(Vant);
// app.use(vConsole);
app.mount("#app");
