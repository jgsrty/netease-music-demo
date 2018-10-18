<template>
  <div class="login-page">
    <button-tab v-model="selectedType">
      <button-tab-item>手机号登录</button-tab-item>
      <button-tab-item>邮箱登录</button-tab-item>
    </button-tab>
    <div class="login-form" v-show="selectedType==0">
      <group>
        <x-input v-model="phone.phone" title="手机号" name="mobile" placeholder="请输入手机号码" required keyboard="number" is-type="china-mobile"></x-input>
        <x-input v-model="phone.password" title="密码" type="password" name="mobile" required placeholder="请输入密码"></x-input>
      </group>
    </div>
    <div class="login-form" v-show="selectedType==1">
      <group>
        <x-input v-model="email.email" title="邮箱" name="mobile" placeholder="请输入邮箱" required is-type="email"></x-input>
        <x-input v-model="email.password" title="密码" type="password" name="mobile" required placeholder="请输入密码"></x-input>
      </group>
    </div>
    <div class="form-button">
      <x-button @click.native="login" type="warn" style="border-radius:99px;">登录</x-button>
    </div>
    <toast v-model="toast.show" type="text" :time="800" is-show-mask :position="toast.posi">{{toast.value}}</toast>
  </div>
</template>

<script>
import user from "@/api/user";
import { ButtonTab, ButtonTabItem, XInput, Group, XButton, Toast } from "vux";
export default {
  components: {
    ButtonTab,
    ButtonTabItem,
    XInput,
    Group,
    XButton,
    Toast
  },
  data() {
    return {
      selectedType: 0,
      phone: {
        phone: "",
        password: ""
      },
      email: {
        email: "",
        password: ""
      },
      toast: {
        posi: "",
        show: false,
        value: ""
      },
      //用户id
      userId: ""
    };
  },
  methods: {
    //登录
    async login() {
      if (this.selectedType == 0) {
        //手机号登录
        if (this.phone.phone == "" || this.phone.password == "") {
          this.showToast("middle", "请输入完整");
          return;
        }
        let res = await user.phoneLogin(this.phone);
        if (res !== false) {
          this.$store.dispatch("setLogin", true);
          this.getUserInfo(res.account.id);
        }
      } else {
        //邮箱登录
        if (this.email.email == "" || this.email.password == "") {
          this.showToast("middle", "请输入完整");
          return;
        }
        let res = await user.emailLogin(this.email);
        if (res !== false) {
          this.$store.dispatch("setLogin", true);
          this.getUserInfo(res.account.id);
        }
      }
    },
    //获取用户信息
    async getUserInfo(id) {
      let res = await user.getUserInfo(id);
      if (res !== false) {
        this.showToast("middle", "登录成功");
        this.$store.dispatch("setUserInfo", res);
        setTimeout(() => {
          this.$route.query.redirect
            ? this.$router.push(this.$route.query.redirect)
            : this.$router.push({ name: "index" });
        }, 800);
      }
    },
    //toast
    showToast(posi, value) {
      this.toast.posi = posi;
      this.toast.show = true;
      this.toast.value = value;
    }
  },
  mounted() {
    this.$store.dispatch("setAudioEl", false);
    this.$store.dispatch("setHeader", { title: "用户登录", userIcon: false });
  },
  destroyed() {
    //页面销毁时重置底部播放audio为true
    this.$store.dispatch("setAudioEl", true);
    this.$store.dispatch("setHeader", { userIcon: true });
  }
};
</script>

<style scoped lang="scss">
.login-page {
  padding: 0.5rem 0.2rem;
  height: 100%;
  box-sizing: border-box;
  background: #f6f6f6;
  .form-button {
    padding: 0 1rem;
    margin-top: 0.4rem;
  }
}
</style>