<template>
  <div class="container">
    <van-button @click="userLoginPhone" type="primary" size="small"
      >登录</van-button
    >
    <van-button @click="test" type="primary" size="small">test</van-button>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";
import UserService from "@/api/User";
import Storage from "@/utils/Storage";
import { useRouter, useRoute } from "vue-router";
export default {
  name: "Login",
  setup() {
    const router = useRouter();
    const route = useRoute();
    let data = reactive({
      loginForm: {
        phone: "15617407527",
        // email:'xumengdandt@163.com',
        password: "rty753951",
      },
    });
    let userLoginPhone = async () => {
      let res = await UserService.userLoginPhone(data.loginForm);
      Storage.set("userInfo", res);
      route.query.redirect
        ? router.push(route.query.redirect)
        : router.push("/");
    };
    let test = async () => {
      let res = await UserService.test();
      console.log(res);
    };

    return { ...toRefs(data), userLoginPhone, test };
  },
};
</script>

<style lang="scss" scoped></style>
