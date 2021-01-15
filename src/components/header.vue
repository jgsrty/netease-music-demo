<template>
  <div class="header flex">
    <van-icon @click="showLeftFun" size="24" name="wap-nav" />
    <div class="fake-search">大家都在搜 周杰伦</div>
  </div>
  <van-popup
    v-model:show="showLeft"
    position="left"
    :style="{ height: '100%', width: '60%' }"
    teleport="#app"
  >
    <div v-if="userInfo.nickname">{{ userInfo.nickname }}</div>
    <div v-else @click="toLogin">登录</div>
  </van-popup>
</template>

<script>
import { ref, computed } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
export default {
  setup() {
    const store = useStore();
    let router = useRouter();

    let userInfo = computed(() => store.state.userInfo);
    let showLeft = ref(false);
    let showLeftFun = () => {
      showLeft.value = true;
    };
    let toLogin = () => {
      router.push("/login");
      showLeft.value = false;
    };
    return { showLeft, showLeftFun, toLogin, userInfo };
  },
};
</script>

<style lang="scss" scoped>
.header {
  height: 100px;
  align-items: center;
  position: fixed;
  z-index: 9;
  top: 0;
  width: 100%;
  padding: 0 12px;
  box-sizing: border-box;
  background: $bg_f6;
  .fake-search {
    height: 65px;
    flex: 1;
    background: #fff;
    margin: 0 20px;
    border-radius: 25px;
    text-align: center;
    line-height: 65px;
    font-size: 26px;
    color: #9e9e9e;
  }
}
</style>
