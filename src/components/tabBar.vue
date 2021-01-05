<template>
  <van-tabbar
    @change="changeAct"
    v-model="active"
    active-color="#ee0a24"
    inactive-color="#000"
  >
    <van-tabbar-item name="home" to="/home" icon="home-o">首页</van-tabbar-item>
    <van-tabbar-item
      name="play"
      to="/play"
      :icon="playing ? 'pause-circle-o' : 'play-circle-o'"
    ></van-tabbar-item>
    <van-tabbar-item name="user" to="/user" icon="manager-o"
      >我的</van-tabbar-item
    >
  </van-tabbar>
</template>

<script>
import { computed, ref } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    let playing = ref(false);
    let active = computed(() => store.state.activeTab);
    let changeAct = (val) => {
      store.dispatch("commitActiveTab", val);
    };
    return { active, playing, changeAct };
  },
};
</script>

<style lang="scss" scoped>
.van-tabbar {
  background: $bg_f6;
  .van-tabbar-item--active {
    background: $bg_f6;
  }
}
</style>
