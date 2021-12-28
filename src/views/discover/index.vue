<template>
  <!-- banner -->
  <var-swipe class="swipe" :autoplay="2000">
    <var-swipe-item v-for="item in data.bannerList" :key="item.encodeId">
      <img class="swipe-item" :src="item.imageUrl" />
    </var-swipe-item>
  </var-swipe>
  <!-- 推荐歌单 -->
  <div>
    <div class="title-label">推荐歌单</div>
    <div class="song-group">
      <div
        @click="toGroupDetail(item)"
        class="item"
        v-for="item in data.songGroup"
        :key="item.id"
      >
        <img :src="item.coverImgUrl" :key="item.id" alt="" />
        <div class="overflow-two name">{{ item.name }}</div>
      </div>
    </div>
  </div>
  <!-- 推荐歌曲列表 -->
  <div>
    <div class="title-label">推荐歌曲</div>
    <div class="song-list">需要登录</div>
  </div>
  <!-- <div v-for="item in 100" :key="item">{{item}}</div> -->
</template>

<script setup>
import { onMounted, reactive } from "vue";
import DiscoverService from "@/api/discover";
import { useRouter } from "vue-router";

onMounted(() => {
  getBanner();
  getRecommendSongGroup();
});

const data = reactive({
  bannerList: [], //banner
  songGroup: [], //歌单
});
const router = useRouter();

let getBanner = async () => {
  let res = await DiscoverService.getBanner();
  data.bannerList = res.banners;
};
let getRecommendSongGroup = async () => {
  let res = await DiscoverService.getRecommendSongGroup();
  data.songGroup = res.playlists;
};
// 歌单详情
let toGroupDetail = (item) => {
  // console.log(item);
  router.push({
    path: "songGroup",
    query: { id: item.id },
  });
};
</script>

<style lang="scss" scoped>
.home {
  color: $primaryColor;
  font-size: $font14;
}
.swipe {
  height: 150px;
  margin: 0 10px;
  padding-top: 5px;
  .swipe-item {
    width: 100%;
    height: 100%;
    border-radius: 5px;
  }
}
.title-label {
  margin: 5px 0 5px 10px;
  font-size: $font18;
  font-weight: 600;
}
.song-group {
  margin: 0 10px;
  display: flex;
  overflow-x: scroll;
  .item {
    margin-right: 5px;
    img {
      display: block;
      width: 100px;
      height: 100px;
      border-radius: 5px;
    }
    .name {
      font-size: $font14;
      margin-top: 2px;
    }
  }
  .item:last-child {
    margin: 0;
  }
}
.song-list {
  margin: 0 10px;
}
</style>
