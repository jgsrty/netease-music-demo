<template>
  <div>
    <!-- 每日推荐 -->
    <music-list :musicListObj='musicListObj'></music-list>
  </div>
</template>

<script>
import common from "@/api/common";
import MusicList from "@/components/musicList";
export default {
  components: {
    MusicList
  },
  data() {
    return {
      //音乐列表组件
      musicListObj: {
        title: "每日推荐",
        list: [],
        //播放列表不同，参数不同
        //1为首页推荐列表，参数含song字段
        //2为每日推荐列表，参数不含song字段
        //3为我的歌单中歌曲列表，参数全不同
        format: 2
      }
    };
  },
  mounted() {
    this.$store.dispatch("setHeader", { title: "每日推荐" });
    this.getRemmonSongs();
  },
  methods: {
    async getRemmonSongs() {
      this.$vux.loading.show();
      let res = await common.getDailyMusic();
      this.$vux.loading.hide();
      if (res !== false) {
        this.musicListObj.list = res.recommend;
      }
    }
  }
};
</script>

<style scoped>
</style>