<template>
  <div>{{ bannerList }}</div>
</template>

<script>
import { onMounted, toRefs, reactive } from "vue";
import HomeService from "@/api/Home";
export default {
  setup() {
    let data = reactive({
      bannerList: [],
    });
    onMounted(async () => {
      let res = await HomeService.getBanner();
      data.bannerList = res.banners;
    });
    return { ...toRefs(data) };
  },
};
</script>

<style lang="scss" scoped></style>
