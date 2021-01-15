<template>
  <div class="tabbar flex">
    <div
      class="item"
      :class="{ active: active === 'home' }"
      @click="toPage('home')"
    >
      <van-icon name="wap-home-o" size="22" />首页
    </div>
    <div class="play" @click="toPage('play')">
      <!-- 有歌曲加入 -->
      <div v-if="currentMusic.url" class="item empty flex">
        <img
          class="full-img"
          :class="{ rotate: playState }"
          :src="currentMusic.picUrl"
          alt=""
        />
      </div>
      <!-- 没有播放状态 -->
      <div v-else class="item empty flex">
        <van-icon name="play-circle-o" size="30" />
      </div>
    </div>
    <div
      class="item"
      :class="{ active: active === 'user' }"
      @click="toPage('user')"
    >
      <van-icon name="manager-o" size="22" />我的
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    const router = useRouter();
    let active = computed(() => store.state.activeTab);
    let currentMusic = computed(() => store.state.currentMusic);
    let playState = computed(() => store.state.playState);
    let toPage = (page) => {
      router.push(page);
      store.dispatch("commitActiveTab", page);
    };
    return { active, toPage, currentMusic, playState };
  },
};
</script>

<style lang="scss" scoped>
.tabbar {
  background: $bg_f6;
  height: 100px;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  z-index: 9;
  justify-content: space-around;
  align-items: center;
  .item {
    display: flex;
    flex-direction: column;
  }
  .active {
    color: $prime;
  }
  .play {
    .empty {
      height: 60px;
      width: 60px;
      border-radius: 50%;
      justify-content: center;
      align-items: center;
      color: $bg_subTitle;
      img {
        border-radius: 50%;
      }
      .rotate {
        animation: retateImg 6s linear 0.2s infinite;
      }
    }
  }
  @keyframes retateImg {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
}
</style>
