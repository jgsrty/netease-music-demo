<template>
  <div class="vue-audio">
    <audio @error="loadMusicError" @ended="playEnded" @timeupdate="audioUpdate" @loadedmetadata="audioLoadSuc" :autoplay="autoplay" :src="playingMusic?playingMusic:defaultAudio.src" @play="onPlay" @pause="onPause" ref="audio"></audio>
    <div class="audio-player">
      <div class="player-img-play" @click="changePlayState">
        <img :src="currentMusic.pic?currentMusic.pic:defaultAudio.pic" alt="">
        <div class="player-button">
          <i class="iconfont" :class="[playState?'icon-zanting':'icon-bofang']"></i>
        </div>
      </div>
      <div class="player-control flex-direction-column">
        <div class="player-name">{{currentMusic.title?currentMusic.title:defaultAudio.title}}</div>
        <div class="player-author">{{currentMusic.artist?currentMusic.artist:defaultAudio.artist}}</div>
        <div class="control-item">
          <span>{{playedTime | formatMusicTime}}</span> -
          <span>{{audioDuration | formatMusicTime}}</span>
          <i @click="switchMute" class="iconfont" :class="[musicMute?'icon-jingyin-copy':'icon-yinliang-gao']"></i>
          <i @click="previewList" class="iconfont icon-liebiao1"></i>
        </div>
        <div class="player-duration">
          <x-progress :percent="playProgress" :show-cancel="false"></x-progress>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { XProgress } from "vux";
import common from "@/api/common";
export default {
  components: {
    XProgress
  },
  data() {
    return {
      playState: false,
      autoplay: false,
      defaultAudio: {
        title: "往后余生",
        artist: "王贰浪",
        src: "/static/music/whys.mp3",
        pic: "/static/music/whys.jpg"
      },
      //歌曲时长
      audioDuration: "0",
      //已播放时长
      playedTime: "0",
      //播放进度条
      playProgress: 0,
      //是否静音
      musicMute: false,
      //当前播放歌曲
      playingMusic: "",
      //播放歌曲的index
      playIndex: ""
    };
  },
  computed: {
    ...mapGetters(["currentMusic", "playList"])
  },
  watch: {
    //监听音乐src，更换音乐先暂停当前播放
    "currentMusic.title"() {
      this.$vux.loading.show();
      this.onPause();
      this.autoplay = true;
      this.playIndex = this.currentMusic.index;
      // console.log(this.playIndex);
      // console.log(this.playList);
      this.getMusicUrl(this.playList[this.playIndex].id);
      // //暂停后不知为何无法触发audio的play方法
      // //故添加autoplay属性控制切换歌曲后自动播放
      // this.playState ? this.pause() : this.play();
    }
  },
  methods: {
    //获取音乐url
    async getMusicUrl(id) {
      // console.log(id);
      let res = await common.getMusicUrl(id);
      if (res !== false) {
        this.playingMusic = res.data[0].url;
        // this.playState ? this.pause() : this.play();
        // this.changePlayState();
      }
    },
    //切换暂停播放
    changePlayState() {
      return this.playState ? this.pause() : this.play();
    },
    // 播放音频
    play() {
      this.$refs.audio.play();
    },
    // 暂停音频
    pause() {
      this.$refs.audio.pause();
    },
    // 当音频播放
    onPlay() {
      this.playState = true;
    },
    // 当音频暂停
    onPause() {
      this.playState = false;
    },
    //播放错误
    loadMusicError() {
      console.log("播放错误");
    },
    //音频加载成功
    audioLoadSuc(res) {
      this.$vux.loading.hide();
      this.audioDuration = parseInt(res.target.duration);
      // console.log(res.target.duration);
    },
    //播放中
    audioUpdate(res) {
      this.playedTime = parseInt(res.target.currentTime);
      this.playProgress = parseInt(
        (this.playedTime / this.audioDuration) * 100
      );
    },
    //切换静音
    switchMute() {
      this.$refs.audio.muted = !this.$refs.audio.muted;
      this.musicMute = this.$refs.audio.muted;
    },
    //查看播放列表
    previewList() {
      if (this.playList.length < 1) {
        this.$vux.toast.text("播放列表未空", "middle");
        return;
      }
      this.$store.dispatch("setListEl", { show: true });
    },
    playEnded() {
      // setTimeout(() => {
      // console.log("播放结束");
      let nextIndex = this.playIndex + 1;
      let nextMusic = this.playList[nextIndex];
      nextMusic.index = nextIndex;
      this.$store.dispatch("playMusic", nextMusic);
      // }, 5000);
    }
  }
};
</script>

<style scoped lang="scss">
.vue-audio {
  position: fixed;
  bottom: 0;
  width: 100%;
  .audio-player {
    margin: 0.05rem;
    border-radius: 4px;
    height: 1rem;
    display: flex;
    align-items: center;
    .player-control {
      margin: 0 0.1rem;
      flex: 1;
      color: #8c8c8c;
      font-size: 0.24rem;
      justify-content: space-between;
      height: 100%;
      .player-name {
        font-size: 0.28rem;
        color: #5a5a5a;
      }
      .control-item {
        i {
          font-size: 0.28rem;
          padding-left: 0.2rem;
          vertical-align: text-top;
        }
      }
    }
    .player-img-play {
      width: 0.8rem;
      height: 0.8rem;
      margin-left: 0.1rem;
      position: relative;
      img {
        width: 100%;
        height: 100%;
      }
      .player-button {
        position: absolute;
        right: 0;
        bottom: 0;
        i {
          font-size: 0.4rem;
        }
      }
    }
  }
}
</style>