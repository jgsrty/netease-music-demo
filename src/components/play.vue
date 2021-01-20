<template>
  <div class="container">
    <div class="head">
      <van-icon
        name="arrow-down"
        size="24"
        @click="store.dispatch('commitShowPlay', false)"
      />
      <div class="name">{{ currentMusic.name }}</div>
    </div>
    <audio
      @ended="playEnded"
      @timeupdate="audioUpdate"
      @loadedmetadata="audioLoadSuc"
      :autoplay="autoplay"
      :src="currentMusic.url"
      @play="onPlay"
      @pause="onPause"
      ref="music"
    ></audio>
    <ul>
      <li
        @click="playPickTime(item.time)"
        :class="
          currentTime >= item.time && currentTime < item.nextTime
            ? 'active'
            : ''
        "
        v-for="item in currentMusic.lyric"
        :key="item.name"
      >
        {{ item.text }}
      </li>
    </ul>
    <div class="progress flex">
      <van-slider
        @change="choseTime"
        v-model="progressPoint"
        bar-height="2px"
        active-color="#ee0a24"
      >
        <template #button>
          <div class="custom-btn"></div>
        </template>
      </van-slider>
    </div>
    <div class="controls flex">
      <div class="item"></div>
      <div @click="switchPlayState" class="item play-state flex">
        <van-icon v-show="!playState" name="play-circle-o" />
        <van-icon v-show="playState" name="pause-circle-o" />
      </div>
      <div class="item"></div>
    </div>
  </div>
</template>

<script>
import { computed, reactive, toRefs, ref } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
export default {
  name: "Play",
  setup() {
    const router = useRouter();
    const store = useStore();
    const music = ref(null);
    let currentMusic = computed(() => store.state.currentMusic);
    let playState = computed(() => store.state.playState);

    let musicInfo = reactive({
      currentTime: 0,
      progressPoint: 0,
    });

    let pause = () => {
      store.dispatch("commitPlayState", false);
    };
    let playEnded = () => {
      console.log("播放结束");
    };
    let audioUpdate = (time) => {
      musicInfo.currentTime = parseInt(time.target.currentTime);
      musicInfo.progressPoint =
        (musicInfo.currentTime / music.value.duration) * 100;
    };
    let audioLoadSuc = () => {
      console.log("音频加载成功");
    };
    let autoplay = () => {};
    let onPlay = () => {
      store.dispatch("commitPlayState", true);
    };
    let onPause = () => {
      store.dispatch("commitPlayState", false);
    };
    let playPickTime = (time) => {
      music.value.currentTime = time;
      music.value.play();
    };
    let switchPlayState = () => {
      if (music.value.paused) {
        music.value.play();
        store.dispatch("commitPlayState", true);
      } else {
        music.value.pause();
        store.dispatch("commitPlayState", false);
      }
    };
    let choseTime = (val) => {
      music.value.currentTime = parseInt((val / 100) * music.value.duration);
    };
    return {
      router,
      store,
      music,
      currentMusic,
      playState,
      ...toRefs(musicInfo),
      pause,
      playEnded,
      audioUpdate,
      audioLoadSuc,
      autoplay,
      onPlay,
      onPause,
      playPickTime,
      switchPlayState,
      choseTime,
    };
  },
};
</script>

<style lang="scss" scoped>
.container {
  height: 100%;
  display: flex;
  flex-direction: column;
  .head {
    position: relative;
    height: 50px;
    padding: 12px;
    /deep/.van-icon {
      position: absolute;
    }
    .van-icon-arrow-down {
      left: 12px;
      top: 50%;
      transform: translate(0, -50%);
    }
    .name {
      text-align: center;
      line-height: 50px;
      font-size: $font16;
    }
  }
  ul {
    flex: 1;
    overflow-y: scroll;
    text-align: center;
    .active {
      color: $prime;
    }
    li {
      color: #2d2d2d;
      line-height: 60px;
    }
  }
  .progress,
  .controls {
    margin: 0 12px;
  }
  .progress {
    height: 50px;
    margin: 0 20px;
    align-items: center;
    .custom-btn {
      width: 20px;
      height: 20px;
      background-color: $prime;
      border-radius: 100%;
    }
  }
  .controls {
    height: 100px;
    .item {
      flex: 1;
    }
    .play-state {
      font-size: 80px;
      color: $prime;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>
