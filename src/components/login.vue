<template>
  <var-dialog
    v-model:show="showLogin"
    :cancel-button="false"
    :confirm-button="false"
  >
    <template #title> 登录 </template>
    <var-form ref="form">
      <var-cell>
        <var-input
          placeholder="请输入手机号"
          :rules="[(v) => v.length == 11 || '请输入正确的手机号']"
          v-model="formData.phone"
        />
      </var-cell>
      <var-cell>
        <var-input
          type="password"
          placeholder="请输入密码"
          :rules="[(v) => !!v || '密码不能为空']"
          v-model="formData.password"
        />
      </var-cell>
    </var-form>
    <var-cell>
      <var-button block type="primary" @click="handleLogin">登录</var-button>
    </var-cell>
    <var-cell
      ><var-button block type="success" @click="skipLogin">
        测试账号登录
      </var-button></var-cell
    >
  </var-dialog>
</template>

<script setup>
import { useStore } from "vuex";
import { computed, nextTick, reactive, ref } from "vue";
import { useRouter } from "vue-router";
import LoginService from "@/api/login";

const store = useStore();
const router = useRouter();
let showLogin = computed(() => store.getters.showLogin);
let redirectPath = computed(() => store.getters.redirectPath);

const formData = reactive({
  phone: "",
  password: "",
});
let form = ref(null);

const skipLogin = () => {
  formData.phone = "15617407527";
  formData.password = "rty753951";
  nextTick(() => handleLogin());
};
const handleLogin = async (needValidate) => {
  let val = await form.value.validate();
  if (val) {
    let loginInfo = await LoginService.phoneLogin(formData);
    if (loginInfo.code === 200) {
      let { avatarUrl, backgroundUrl, nickname, userId } = loginInfo.profile;
      store.dispatch("userInfoAction", {
        avatarUrl,
        backgroundUrl,
        nickname,
        userId,
      });
      router.push(redirectPath.value);
      store.dispatch("loginAction", false);
    }
  }
};
</script>

<style lang="scss" scoped></style>
