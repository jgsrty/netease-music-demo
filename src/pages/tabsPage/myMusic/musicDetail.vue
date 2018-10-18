<template>
  <div>
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
      musicListObj: {
        title: this.$route.query.name,
        list: [],
        //播放列表不同，参数不同
        //1为首页推荐列表，参数含song字段
        //2为每日推荐列表，参数不含song字段
        //3为我的歌单中歌曲列表，参数全不同
        format: 3
      }
    };
  },
  mounted() {
    this.$store.dispatch("setHeader", { title: this.$route.query.name });
    this.getCurrentPlayList();
  },
  methods: {
    async getCurrentPlayList() {
      let id = this.$route.query.id;
      let res = await common.getCurrentPlayList(id);
      this.musicListObj.list = res.playlist.tracks;
      console.log(res);
    }
  }
};
</script>

<style scoped>
</style>