import { createApp } from "vue";
import App from "./App.vue";
import routes from "./router";
import store from "./store";
// global scss
// import "@/styles/index.scss";
// vant
import Vant from "vant";
import "vant/lib/index.css";

const app = createApp(App);
app.use(routes);
app.use(store);
app.use(Vant);
app.mount("#app");
