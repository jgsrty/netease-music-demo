<template>
  <div class="container">
    <div class="form-type flex">
      <div
        v-for="item in loginTypes"
        :key="item.type"
        class="item"
        @click="changeLoginType(item.type)"
        :class="{ active: currentType === item.type }"
      >
        {{ item.label }}
      </div>
    </div>
    <van-form
      v-show="currentType === 'phone'"
      class="submit"
      @submit="userLoginPhone"
    >
      <van-field
        v-model="loginFormPhone.phone"
        name="手机号"
        label="手机号"
        placeholder="请填写手机号"
        :rules="[{ required: true, message: '请填写手机号' }]"
      />
      <van-field
        v-model="loginFormPhone.password"
        type="password"
        name="密码"
        label="密码"
        placeholder="请填写密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div class="sub-button flex">
        <van-button
          @click="router.go(-1)"
          size="small"
          block
          round
          type="default"
          native-type="submit"
          >取 消</van-button
        >
        <van-button
          round
          size="small"
          block
          color="#e64340"
          native-type="submit"
          >登 录</van-button
        >
      </div>
    </van-form>
    <van-form
      v-show="currentType === 'email'"
      class="submit"
      @submit="userLoginEmail"
    >
      <van-field
        v-model="loginFormEmail.phone"
        name="邮箱"
        label="邮箱"
        placeholder="请填写邮箱"
        :rules="[{ required: true, message: '请填写邮箱' }]"
      />
      <van-field
        v-model="loginFormEmail.password"
        type="password"
        name="密码"
        label="密码"
        placeholder="请填写密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div class="sub-button flex">
        <van-button
          @click="router.go(-1)"
          size="small"
          block
          round
          type="default"
          native-type="submit"
          >取 消</van-button
        >
        <van-button
          round
          size="small"
          block
          color="#e64340"
          native-type="submit"
          >登 录</van-button
        >
      </div>
    </van-form>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";
import UserService from "@/api/User";
import Storage from "@/utils/Storage";
import { useRouter, useRoute } from "vue-router";
import { useStore } from "vuex";
import { Toast } from "vant";
export default {
  name: "Login",
  setup() {
    const router = useRouter();
    const route = useRoute();
    const store = useStore();
    let data = reactive({
      currentType: "phone",
      loginTypes: [
        {
          type: "phone",
          label: "手机号登录",
        },
        {
          type: "email",
          label: "邮箱登录",
        },
      ],
      loginFormPhone: {
        phone: "",
        password: "",
      },
      loginFormEmail: {
        email: "",
        password: "",
      },
    });
    let userLoginPhone = async () => {
      let res = await UserService.userLoginPhone(data.loginFormPhone);
      loginSuc(res);
    };
    let userLoginEmail = async () => {
      let res = await UserService.userLoginEmail(data.loginFormEmail);
      loginSuc(res);
    };
    let loginSuc = (res) => {
      if (res && res.code === 200) {
        let { avatarUrl, backgroundUrl, nickname, userId } = res.profile;
        let data = { avatarUrl, backgroundUrl, nickname, userId };
        Toast("登录成功");
        Storage.set("userInfo", data);
        store.dispatch("commitUserInfo", data);
        route.query.redirect
          ? router.push(route.query.redirect)
          : router.push("/");
      } else {
        Toast("登录失败");
      }
    };
    let changeLoginType = (val) => {
      data.currentType = val;
    };

    return {
      ...toRefs(data),
      userLoginPhone,
      changeLoginType,
      userLoginEmail,
      router,
    };
  },
};
</script>

<style lang="scss" scoped>
.container {
  padding: 25px;
  .form-type {
    height: 60px;
    border-radius: 60px;
    line-height: 60px;
    border: 1px solid $prime;
    margin-bottom: 30px;
    color: $bg_subTitle;
    .item {
      background: #fff;
      flex: 1;
      text-align: center;
      border-top-left-radius: 60px;
      border-bottom-left-radius: 60px;
    }
    .item:last-child {
      border-radius: 0;
      border-top-right-radius: 60px;
      border-bottom-right-radius: 60px;
    }
    .active {
      color: #fff;
      background: $prime;
    }
  }
  .sub-button {
    margin: 30px 60px;
    justify-content: space-around;
    .van-button {
      margin-left: 10px;
    }
  }
}
</style>
