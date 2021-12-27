<template>
  <div class="header">
    <div class="user">user</div>
    <div class="search">
      <var-input placeholder="请输入文本" clearable v-model="searchValue" />
    </div>
    <div class="play">play</div>
  </div>
</template>

<script setup>
import { ref } from "vue";

defineProps({
  msg: String,
});

let searchValue = ref("");
</script>

<style scoped lang="scss">
.header {
  height: 50px;
  padding: 0 5px;
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
}
</style>
