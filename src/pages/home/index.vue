<template>
  <div class="has-tab-bar container">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="item in bannerList" :key="item.imageUrl">
        <img class="full-img" :src="item.imageUrl" alt="" />
      </van-swipe-item>
    </van-swipe>
    <div class="recommend flex">
      <div class="item" v-for="item in recommentList" :key="item.id">
        <img :src="item.picUrl" alt="" />
        <div class="text overflow-two">{{ item.name }}</div>
      </div>
    </div>
    <div class="songs">
      <div class="item flex" v-for="item in newSongList" :key="item.id">
        <div class="left">
          <img class="full-img" :src="item.picUrl" alt="" />
        </div>
        <div class="right flex">
          <div class="title">
            {{ item.name }}
            <span>{{ item.song.album.type }}</span>
          </div>
          <div class="subtitle">
            {{ item.artists }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { toRefs, reactive, onMounted } from "vue";
import HomeService from "@/api/Home";
export default {
  name: "Home",
  setup() {
    onMounted(() => {
      getBanner();
      getPersonalized();
      getNewSong();
    });
    let data = reactive({
      // banner
      bannerList: [],
      // 推荐歌单
      recommentList: [],
      // 推荐新音乐
      newSongList: [],
    });
    let getBanner = async () => {
      let res = await HomeService.getBanner();
      data.bannerList = res.banners;
    };
    let getPersonalized = async () => {
      let res = await HomeService.getPersonalized();
      data.recommentList = res.result;
    };
    let getNewSong = async () => {
      let res = await HomeService.getNewSong();
      data.newSongList = res.result;
      for (let i = 0; i < res.result.length; i++) {
        let artists = [];
        res.result[i].song.artists.forEach((item) => artists.push(item.name));
        data.newSongList[i].artists = artists.toString();
      }
    };
    return { ...toRefs(data) };
  },
};
</script>

<style lang="scss" scoped>
.my-swipe {
  margin-top: 100px;
  .van-swipe-item {
    height: 300px;
    background-color: #f6f6f6;
    img {
      border-radius: 15px;
      width: 700px;
      margin-left: 25px;
    }
  }
}
.recommend {
  overflow-x: scroll;
  margin-top: 15px;
  .item {
    flex-shrink: 0;
    width: 180px;
    margin-right: 15px;
    img {
      height: 180px;
      width: 180px;
      border-radius: 10px;
      border-radius: 6px;
    }
    &:first-child {
      margin-left: 25px;
    }
    &:last-child {
      padding-right: 25px;
    }
    .text {
      font-size: $font14;
    }
  }
}
.songs {
  margin: 15px 25px 0 25px;
  .item {
    padding-bottom: 5px;
    border-bottom: 1px solid $bg_outline;
    margin-bottom: 10px;
    .left {
      width: 80px;
      height: 80px;
      margin-right: 15px;
      img {
        border-radius: 10px;
      }
    }
    .right {
      flex-direction: column;
      justify-content: center;
      .title {
        font-size: $font14;
        span {
          padding-left: 15px;
          font-size: $font12;
          color: $bg_subTitle;
        }
      }
      .subtitle {
        color: $bg_subTitle;
      }
    }
  }
}
</style>
