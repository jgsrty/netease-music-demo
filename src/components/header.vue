<template>
  <div class="header">
    <div class="play">play</div>
    <div class="search">search</div>
    <div class="user" v-if="userInfo.userId">
      <img :src="userInfo.avatarUrl" alt="" />
    </div>
    <div class="user" v-else>user2</div>
  </div>
</template>

<script setup>
// defineProps({
//   msg: String,
// });
import { useStore } from "vuex";
import { computed } from "vue";

const store = useStore();
const userInfo = computed(() => store.getters.userInfo);

console.log(userInfo.value);
</script>

<style scoped lang="scss">
.header {
  height: 50px;
  padding: 0 10px;
  box-sizing: border-box;
  background: $grayBack;
  opacity: 0.9;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .user {
    img {
      display: block;
      width: 35px;
      height: 35px;;
      border-radius: 50%;
    }
  }
}
</style>
