<template>
  <div class="music-group">
    <div class="music-item" @click="toItemDetail(item)" v-for="(item,ind) in musicGroup" :key="ind">
      <div class="music-index flex-center-center">{{ind+1}}</div>
      <div class="music-intro flex-direction-column">
        <div class="music-title">{{item.name}}</div>
        <div class="music-num"><span>歌曲数{{item.trackCount}}首</span> - <span>累计收听{{item.playCount}}次</span></div>
      </div>
      <img :src="item.coverImgUrl" alt="">
    </div>
  </div>
</template>

<script>
import common from "@/api/common";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      uid: "",
      musicGroup: []
    };
  },
  computed: {
    ...mapGetters(["userInfo"])
  },
  mounted() {
    this.$store.dispatch("setHeader", { title: "我的音乐" });
    this.uid = this.userInfo.profile.userId;
    this.getUserPlayList();
  },
  methods: {
    async getUserPlayList() {
      let res = await common.getUserPlayList(this.uid);
      console.log(res);
      this.musicGroup = res.playlist;
    },
    //歌单详情
    async toItemDetail(item) {
      this.$router.push({
        path: "/myMusic/playList",
        query: { id: item.id, name: item.name }
      });
    }
  }
};
</script>

<style scoped lang='scss'>
.music-item {
  display: flex;
  padding: 0.1rem;
  border-bottom: 1px solid #f6f6f6;
  .music-index {
    width: 0.4rem;
  }
  .music-intro {
    flex: 1;
    font-size: 0.24rem;
    padding-left: 0.1rem;
    .music-title {
      flex: 1;
      font-size: 0.3rem;
    }
    .music-num {
      color: #333;
    }
  }
  img {
    width: 0.8rem;
    height: 0.8rem;
  }
}
</style>