<template>
  <div class="music-list">
    <div class="recom-title flex-justify-between">
      <span>
        <span class="title-mark"></span>{{musicListObj.title}}</span>
      <!-- <span @click="playList">播放全部</span> -->
    </div>
    <div class="recom-list">
      <div @click="playMusic(item,ind)" class="recom-item" v-for="(item,ind) in musicListObj.list" :key="ind">
        <div class="music-index flex-center-center">{{ind+1}}</div>
        <div class="music-intro flex-direction-column">
          <div class="music-title">{{item.name}}</div>
          <div class="music-author" v-if="musicListObj.format==1">
            <span v-for="(items,inds) in item.song.artists" :key="inds">{{items.name}} </span>
          </div>
          <div class="music-author" v-if="musicListObj.format==2">
            <span v-for="(items,inds) in item.artists" :key="inds">{{items.name}} </span>
          </div>
          <div class="music-author" v-if="musicListObj.format==3">
            <span v-for="(items,inds) in item.ar" :key="inds">{{items.name}} </span>
          </div>
        </div>
        <!-- <div class="music-like">
          <i class="iconfont icon-xihuan1"></i>
        </div> -->
        <!-- <img :src="item.song.album.picUrl" alt="" v-if="musicListObj.format==1"> -->
        <!-- <img :src="item.album.picUrl" alt="" v-if="musicListObj.format==2"> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    musicListObj: {
      title: "",
      list: [],
      //根据不同type类型处理返回字段参数
      format: 1
    }
  },
  mounted() {
    // console.log(this.musicListObj);
  },
  methods: {
    //获取音乐url
    async playMusic(item, ind) {
      //处理歌手名
      let artists;
      let temp = [];
      let pic;
      if (this.musicListObj.format == 1) {
        artists = item.song.artists;
        for (let i in item.song.artists) {
          temp.push(artists[i].name);
        }
        pic = item.song.album.picUrl;
      } else if (this.musicListObj.format == 2) {
        artists = item.artists;
        for (let i in item.artists) {
          temp.push(artists[i].name);
        }
        pic = item.album.picUrl;
      } else if (this.musicListObj.format == 3) {
        artists = item.ar;
        for (let i in item.ar) {
          temp.push(artists[i].name);
        }
        pic = item.al.picUrl;
      }
      let author = temp.join(" ");
      let params = {
        title: item.name,
        artist: author,
        id: item.id,
        pic: pic,
        index: ind
      };
      this.$store.dispatch("playMusic", params);
      //播放列表
      let listParams = this.musicListObj.list.map(item => {
        let tempArr = [];
        let pic;
        if (this.musicListObj.format == 1) {
          pic = item.song.album.picUrl;
          for (let i in item.song.artists) {
            tempArr.push(item.song.artists[i].name);
          }
        } else if (this.musicListObj.format == 2) {
          pic = item.album.picUrl;
          for (let i in item.artists) {
            tempArr.push(item.artists[i].name);
          }
        } else if (this.musicListObj.format == 3) {
          pic = item.al.picUrl;
          for (let i in item.ar) {
            tempArr.push(item.ar[i].name);
          }
        }
        let listAuthor = tempArr.join(" ");
        return {
          title: item.name,
          pic: pic,
          id: item.id,
          artist: listAuthor
        };
      });
      this.$store.dispatch("playList", listParams);
    }
  }
};
</script>

<style scoped lang="scss">
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
.music-list {
  .recom-item {
    display: flex;
    padding: 0.1rem;
    border-top: 1px solid #f6f6f6;
    .music-index {
      width: 0.4rem;
    }
    .music-intro {
      flex: 1;
      height: 0.8rem;
      font-size: 0.24rem;
      padding-left: 0.1rem;
      .music-title {
        flex: 1;
        font-size: 0.3rem;
      }
      .music-author {
        color: #333;
      }
    }
    img {
      width: 0.8rem;
      height: 0.8rem;
    }
  }
}
</style>