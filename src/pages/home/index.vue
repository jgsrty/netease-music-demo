<template>
  <div class="has-tab-bar container">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="item in bannerList" :key="item.imageUrl">
        <img class="full-img" :src="item.imageUrl" alt="" />
      </van-swipe-item>
    </van-swipe>
    <div><p v-for="item in 100" :key="item">item</p></div>
    <p>我是底线</p>
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
    });
    // banner
    let data = reactive({
      bannerList: [],
    });
    let getBanner = async () => {
      let res = await HomeService.getBanner();
      data.bannerList = res.banners;
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
</style>
