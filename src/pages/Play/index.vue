<template>
  <div class="container">
    <van-icon name="arrow-left" size="24" @click="router.go(-1)" />
    <audio
      @ended="playEnded"
      @timeupdate="audioUpdate"
      @loadedmetadata="audioLoadSuc"
      :autoplay="autoplay"
      :src="currentMusic.url"
      @play="onPlay"
      @pause="onPause"
      ref="audio"
    ></audio>
    <ul>
      <li
        :class="
          currentTime >= item.time && currentTime < item.nextTime
            ? 'active'
            : ''
        "
        v-for="item in currentMusic.lyric"
        :key="item.name"
      >
        {{ item.time }} - {{ item.nextTime }} - {{ item.text }}
      </li>
    </ul>
    <div @click="pause">pause</div>
  </div>
</template>

<script>
import { computed, reactive, toRefs } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
export default {
  name: "Play",
  setup() {
    const router = useRouter();
    const store = useStore();

    let currentMusic = computed(() => store.state.currentMusic);

    let musicInfo = reactive({
      currentTime: 0,
    });

    let pause = () => {
      store.dispatch("commitPlayState", false);
    };
    let playEnded = () => {};
    let audioUpdate = (time) => {
      musicInfo.currentTime = parseInt(time.target.currentTime);
      console.log(musicInfo.currentTime);
    };
    let audioLoadSuc = () => {};
    let autoplay = () => {};
    let onPlay = () => {};
    let onPause = () => {};
    return {
      router,
      currentMusic,
      ...toRefs(musicInfo),
      pause,
      playEnded,
      audioUpdate,
      audioLoadSuc,
      autoplay,
      onPlay,
      onPause,
    };
  },
};
</script>

<style lang="scss" scoped>
.container {
  height: 100%;
  ul {
    height: 50%;
    overflow-y: scroll;
    text-align: center;
    .active {
      color: $prime;
    }
  }
}
</style>
