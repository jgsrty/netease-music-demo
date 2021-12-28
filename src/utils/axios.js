import axios from "axios";
import { Snackbar } from "@varlet/ui";
import "@varlet/ui/es/snackbar/style/index.js";

const service = axios.create({
  baseURL: "http://81.70.105.238:9528",
  timeout: 20000,
  //允许携带cookie
  withCredentials: true,
});

//request拦截
service.interceptors.request.use(
  (config) => {
    // let token = store.state.user.token;
    // if (store.state.user.token) {
    //   config.headers["rty-token"] = token;
    // }
    return config;
  },
  (err) => {
    console.log(err);
    Promise.reject(err);
  }
);

//respone拦截
//响应拦截主要是对返回做统一处理
service.interceptors.response.use(
  (response) => {
    let { code, message } = response.data;
    if (code !== 200) {
      Snackbar.warning(message);
      return false;
    } else {
      return response.data;
    }
  },
  (err, val) => {
    //这里处理服务端错误
    console.log(err);
    Snackbar.warning('服务器错误');
    return Promise.reject(err);
  }
);
export default service;
