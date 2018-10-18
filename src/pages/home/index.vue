<template>
  <div class="home-index">
    <div class="wrapper" ref="wrapper">
      <div class="content">
    <swiper :list="bannerList" v-model="defaultBanner" auto loop></swiper>
    <div class="cell-div"></div>
    <div class="tabs-bar flex-justify-around">
      <div @click="toTabsInfo(item)" class="tab-item" v-for="(item,ind) in musicTabs" :key="ind">
        <div class="item-bg flex-center-center">
          <i class="iconfont" :class="item.icon"></i>
        </div>
        <p class="item-name">{{item.name}}</p>
      </div>
    </div>
    <div class="cell-div"></div>
    <!-- 推荐歌单 -->
    <div class="recommend-song-list">
      <div class="recom-title flex-justify-between">
        <span>
          <span class="title-mark"></span>推荐歌单</span>
      </div>
      <div class="recom-list flex-wrap">
        <div class="recom-item" v-for="(item,ind) in recomendSongList" :key="ind">
          <img :src="item.picUrl" alt="">
          <div class="item-name two-line-overflow">{{item.name}}</div>
        </div>
      </div>
    </div>
    <div class="cell-div"></div>
    <!-- 推荐新音乐 -->
    <music-list :musicListObj='musicListObj'></music-list>
    <div class="cell-div"></div>
    </div>
    </div>
  </div>
</template>

<script>
const musicTabs = [
  {
    icon: "icon-shouyinji",
    name: "私人FM",
    url: "personalFm"
  },
  {
    icon: "icon-rili",
    name: "每日推荐",
    url: "recomSong"
  },
  {
    icon: "icon-yinle",
    name: "我的音乐",
    url: "myMusic"
  },
  {
    icon: "icon-paixingbang1",
    name: "排行榜",
    url: "topList"
  }
];
import { Swiper, SwiperItem } from "vux";
import home from "@/api/home";
import common from "@/api/common";
import MusicList from "@/components/musicList";
export default {
  components: {
    Swiper,
    SwiperItem,
    MusicList
  },
  data() {
    return {
      bannerList: [],
      defaultBanner: 0,
      //音乐tabs
      musicTabs: musicTabs,
      //推荐歌单
      recomendSongList: [],
      //推荐新音乐
      recommendMusic: [],
      //音乐列表组件
      musicListObj: {
        title: "推荐新音乐",
        list: [],
        //播放列表不同，参数不同
        //1为首页推荐列表，参数含song字段
        //2为每日推荐列表，参数不含song字段
        //3为我的歌单中歌曲列表，参数全不同
        format: 1
      }
    };
  },
  //触发keep-alive时更新title
  activated() {
    this.$store.dispatch("setHeader", {
      hasBack: false,
      title: "网易云音乐-乞丐版"
    });
    //better-scroll
    this.$nextTick(() => {
      this.scroll = new this.BScroll(this.$refs.wrapper, {
        click: true,
        scrollY: true,
        pullUpLoad: {
          threshold: -30 // 当上拉距离超过30px时触发 pullingUp 事件
        },
        pullDownRefresh: {
          threshold: 30, // 下拉距离超过30px触发pullingDown事件
          stop: 20 // 回弹停留在距离顶部20px的位置
        }
      })
      this.scroll.on('pullingUp', () => {
        console.log('123')
        // 事情做完，需要调用此方法告诉 better-scroll 数据已加载，否则上拉事件只会执行一次
        this.scroll.finishPullUp()
      })
      this.scroll.on('pullingDown', () => {
        console.log('456')
        // 事情做完，需要调用此方法告诉 better-scroll 数据已加载，否则下拉事件只会执行一次
        this.scroll.finishPullDown()
      })
    })
  },
  mounted() {
    this.$store.dispatch("setHeader", {
      hasBack: false,
      title: "网易云音乐-乞丐版"
    });
    this.getBanner();
    this.getSongList();
    this.newestMusic();
  },
  destroyed() {
    this.$store.dispatch("setHeader", { hasBack: true });
  },
  methods: {
    //首页banner
    async getBanner() {
      let res = await home.homeBanner();
      if (res !== false) {
        let bannerList = res.banners.map((item, index) => ({
          // url: item.url,
          img: item.picUrl
        }));
        this.bannerList = bannerList;
      }
    },
    //推荐歌单
    async getSongList() {
      let res = await home.songList();
      if (res !== false) {
        this.recomendSongList = res.result.slice(0, 6);
      }
    },
    //推荐新音乐
    async newestMusic() {
      let res = await home.newestMusic();
      if (res !== false) {
        this.recommendMusic = res.result;
        this.musicListObj.list = res.result;
      }
    },
    //进入tabs
    toTabsInfo(row) {
      this.$router.push({ name: row.url });
    }
  }
};
</script>

<style scoped lang="scss">
.wrapper{
  width: 100%;
  position:absolute;
  top: 0;
  bottom: 0;
  overflow: hidden;
  z-index: 1;
}
.tabs-bar {
  position: sticky;
  top: 0;
  padding: 0.1rem 0.2rem;
  background: #fff;
  border-bottom: 1px solid #eee;
  .tab-item {
    text-align: center;
    .item-name {
      font-size: 0.24rem;
      margin-top: 0.1rem;
    }
    .item-bg {
      width: 0.6rem;
      height: 0.6rem;
      background: #35495e;
      border-radius: 50%;
      margin: 0 auto;
      i {
        font-size: 0.44rem;
        color: #fff;
      }
    }
  }
}
.recom-title {
  padding: 0.2rem;
  font-size: 0.32rem;
  .title-mark {
    display: inline-block;
    width: 0.04rem;
    height: 100%;
    background: #d43c33;
    vertical-align: text-bottom;
    margin-right: 0.1rem;
  }
}
.recommend-song-list {
  .recom-list {
    justify-content: space-around;
    .recom-item {
      margin-bottom: 0.1rem;
      width: 2.4rem;
      img {
        height: 2.4rem;
      }
    }
  }
}
</style>