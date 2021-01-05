import axios from "axios";

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
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
      if (code === 5000) {
        console.log("token过期");
      }
      return Promise.reject(new Error(message || "Error"));
    } else {
      return response.data;
    }
  },
  (err) => {
    //这里处理服务端错误
    console.log("err" + err); // for debug
    return Promise.reject(err);
  }
);
export default service;
