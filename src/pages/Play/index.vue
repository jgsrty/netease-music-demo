<template>
  <div class="container">
    <van-icon name="arrow-left" size="24" @click="router.go(-1)" />
    <div @click="pause">pause</div>
    {{currentMusic}}
  </div>
</template>

<script>
import { computed } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
export default {
  name: "Play",
  setup() {
    const router = useRouter();
    const store = useStore();
    let currentMusic = computed(() => store.state.currentMusic);
    let pause = () => {
      store.dispatch('commitPlayState',false)
    }
    return { router, currentMusic,pause };
  },
};
</script>

<style lang="scss" scoped></style>
