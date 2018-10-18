import axios from "axios";
import Vue from "vue";
//创建axios
const service = axios.create({
  //这里baseurl就是刚开始配置的开发环境和线上环境地址，webpack会自动读取无需手动再改
  baseURL: process.env.BASE_URL, //baseurl
  timeout: 20000, //请求超时
  //允许携带cookie
  withCredentials: true
});

//request拦截
//请求拦截主要作用是验证请求是否合法，会带有用户token，这里模拟一个token，可以根据实际情况修改
service.interceptors.request.use(
  config => {
    // let token = store.state.user.token;
    // if (store.state.user.token) {
    //   config.headers["rty-token"] = token;
    // }
    return config;
  },
  err => {
    console.log(err);
    Promise.reject(err);
  }
);

//respone拦截
//响应拦截主要是对返回做统一处理
service.interceptors.response.use(
  response => {
    let res = response.data;
    let { code } = res;
    let { data } = response;
    if (code !== 200) {
      if (res.code === 5000) {
        console.log("token过期");
      }
      Vue.$vux.toast.text(res.msg, 'middle')
      return false;
    } else {
      //这里吧错误响应不再返回到页面，直接统一处理掉，只有正确的返回才会被接收并做下一步处理
      return data;
    }
  },
  err => {
    //这里处理服务端错误
    console.log("err" + err); // for debug
    return Promise.reject(err);
  }
);
export default service;
