<template>
  <div class="user-info">
    <group>
      <cell title="昵称" :value="userInfo.profile.nickname"></cell>
    </group>
    <group>
      <cell title="累计听歌" :value="`${userInfo.listenSongs}首`"></cell>
    </group>
    <group>
      <cell title="生日" :value="userInfo.profile.birthday | formatDate(1)"></cell>
    </group>
    <group>
      <cell title="性别" :value="userInfo.profile.gender | formatGender"></cell>
    </group>
    <group>
      <cell title="粉丝" :value="userInfo.profile.followeds"></cell>
    </group>
    <group>
      <cell title="账号创建时间" :value="userInfo.createTime | formatDate"></cell>
    </group>
    <group>
      <cell title="账号创建距今" :value="`${userInfo.createDays}天`"></cell>
    </group>
    <group>
      <cell primary="content" title="个人简介" :value="userInfo.profile.signature"></cell>
    </group>
    <div class="logout">
      <x-button @click.native="logout" type="warn">退出登录</x-button>
    </div>
  </div>
</template>

<script>
import { XButton, Confirm, Cell, Group } from "vux";
import user from "@/api/user";
import { mapGetters } from "vuex";
export default {
  components: {
    XButton,
    Confirm,
    Cell,
    Group
  },
  mounted() {
    this.$store.dispatch("setAudioEl", false);
    this.$store.dispatch("setHeader", { title: "用户详情", userIcon: false });
    this.getUserInfo();
  },
  computed: {
    ...mapGetters(["userInfo"])
  },
  destroyed() {
    //页面销毁时重置底部播放audio为true
    this.$store.dispatch("setAudioEl", true);
    this.$store.dispatch("setHeader", { userIcon: true });
  },
  methods: {
    //获取用户信息
    async getUserInfo() {
      let res = await user.getUserInfo(this.$route.query.userId);
      if (res !== false) {
        this.$store.dispatch("setUserInfo", res);
      }
    },
    async logout() {
      // let res = await user.test();
      let this_ = this;
      this.$vux.confirm.show({
        // 组件除show外的属性
        content: "确认退出登录？",
        onConfirm() {
          this_.$store.dispatch("setLogOut", false);
          this_.$router.push({ name: "index" });
        }
      });
    }
  }
};
</script>

<style scoped lang="scss">
.user-info {
  .logout {
    padding: 0 1rem;
    margin-top: 0.4rem;
  }
}
</style>