<template>
  <div>
    <div class="has-tab-bar container" >
      nickname:{{ userInfo.nickname }} userId:{{
        userInfo.userId
      }}
    </div>
    <van-button @click="logOut" round block type="default">退出登录</van-button>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed, onMounted } from "vue";
import UserService from "@/api/User";
import { useRouter } from "vue-router";
export default {
  name: "User",
  setup() {
    onMounted(() => {
      console.log(userInfo);
    });
    const store = useStore();
    const router = useRouter();
    let userInfo = computed(() => store.state.userInfo);

    let logOut = async () => {
      await UserService.userLogout();
      router.push("/");
      store.dispatch("commitLogout");
    };

    return { userInfo, logOut };
  },
};
</script>

<style lang="scss" scoped></style>
