<template>
  <div class="test-viewport">测试转换</div>
  <van-tabs>
    <van-tab v-for="index in 8" :title="'标签 ' + index" :key="index">
      内容 {{ index }}
    </van-tab>
  </van-tabs>
  <router-view></router-view>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
.test-viewport {
  width: 750px;
  height: 100px;
  font-size: 14px;
  text-align: center;
  line-height: 100px;
  background: #13b5b1;
}
</style>
