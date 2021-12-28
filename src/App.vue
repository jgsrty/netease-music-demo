<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import Header from "./components/header.vue";
import Login from "@/components/login.vue";
</script>

<template>
  <Login />
  <Header msg="header" />
  <div class="content">
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
html,
body {
  height: 100%;
  background: $grayBack;
}
#app {
  position: relative;
  padding-top: 50px;
}
</style>
