<template>
  <div class="container">
    <van-icon name="arrow-left" size="24" @click="backRoute" />
    play
  </div>
</template>

<script>
import { useRouter } from "vue-router";
export default {
  name: "Play",
  setup() {
    const router = useRouter();
    let backRoute = () => {
      router.back();
    };
    return { backRoute };
  },
};
</script>

<style lang="scss" scoped></style>
