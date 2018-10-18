<template>
  <div id="app">
    <x-header class="main-header" @on-click-back="clickBack" @on-click-title="backToIndex" :left-options="{showBack: header.hasBack,backText:''}">{{header.title}}
      <a slot="right" @click="toUserInfo" v-show="header.userIcon" class="header-right">
        <i v-if="!isLogin" class="iconfont icon-yonghu1 user-icon"></i>
        <img v-if="userInfo.profile" :src="userInfo.profile.avatarUrl" alt="">
      </a>
    </x-header>
    <div class="main-contain" :class="[showAudio?'':'no-bottom']">
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive" />
      </keep-alive>
      <router-view v-if="!$route.meta.keepAlive" />
    </div>
    <vue-audio v-show="showAudio"></vue-audio>
    <div v-transfer-dom>
      <popup v-model="showList.show" @on-hide="closePop" height="60%">
        <div class="music-play-list" id="music-play-list">
          <div class="play-header">播放列表</div>
          <div v-for="(item,ind) in playList" :key="ind" class="play-item">
            <div class="music-index flex-center-center">{{ind+1}}</div>
            <div @click="playItem(item,ind)" class="play-info flex-direction-column">
              <div class="play-name">{{item.title}}</div>
              <div>{{item.artist}}</div>
            </div>
            <div @click="deleteListItem(item)" class="item-handle flex-center-center">
              <i class="iconfont icon-delete2"></i>
            </div>
          </div>
        </div>
      </popup>
    </div>
  </div>
</template>

<script>
import { XHeader, Popup, TransferDom } from "vux";
import { mapGetters } from "vuex";
import vueAudio from "@/components/vueAudio";
export default {
  components: {
    XHeader,
    vueAudio,
    Popup
  },
  directives: {
    TransferDom
  },
  name: "App",
  computed: {
    ...mapGetters([
      "header",
      "showAudio",
      "isLogin",
      "userInfo",
      "showList",
      "playList"
      // "currentMusic"
    ])
  },
  mounted() {
    // console.log(this.playList);
  },
  methods: {
    toUserInfo() {
      if (this.isLogin && this.userInfo.code == 200) {
        //已登录
        this.$router.push(`/userInfo?userId=${this.userInfo.userPoint.userId}`);
      } else {
        //未登录
        this.$router.push("/login");
      }
    },
    closePop() {
      this.$store.dispatch("setListEl", { show: false });
    },
    //播放列表选中项
    playItem(row, ind) {
      // this.currentMusic.index = ind;
      row.index = ind;
      this.$store.dispatch("playMusic", row);
      this.$store.dispatch("setListEl", { show: false });
    },
    //删除播放列表歌曲
    deleteListItem(row) {
      console.log(row);
    },
    //返回首页
    backToIndex() {
      this.$router.push({ name: "index" });
    },
    clickBack() {
      // if (this.$route.name == "recomSong" || "personalFm" || "topList") {
      //   this.$router.push("index");
      // } else {
      //   this.$router.go(-1);
      // }
    }
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 0.28rem;
  position: relative;
  height: 100%;
  .aplayer-info {
    padding-top: 7px;
  }
  .aplayer-title {
    display: block;
  }
  .main-header {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 10;
    .header-right {
      width: 0.5rem;
      height: 0.5rem;
      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }
      .user-icon {
        font-size: 0.48rem;
      }
    }
  }
  .main-contain {
    position: absolute;
    bottom: 1.1rem;
    top: 45px;
    width: 100%;
    overflow-y: auto;
  }
  .no-bottom {
    bottom: 0;
  }
  .vux-header-right {
    top: 12px;
  }
  /* 重制进度条样式 */
  .weui-progress__inner-bar {
    background: #d43c33;
  }
}
.vux-loading .weui-toast {
  width: 2rem;
}
//pop样式
#music-play-list {
  font-size: 0.24rem;
  background: #fff;
  .play-header {
    font-size: 0.32rem;
    padding: 0.2rem 0;
  }
  .play-item {
    display: flex;
    padding: 0.1rem;
    border-top: 1px solid #f6f6f6;
    .music-index {
      margin-right: 0.1rem;
      width: 0.4rem;
    }
    .item-handle {
      width: 0.4rem;
      i {
        color: #828282;
      }
    }
    .play-info {
      flex: 1;
      height: 0.8rem;
      .play-name {
        flex: 1;
        font-size: 0.3rem;
      }
    }
  }
}
</style>
