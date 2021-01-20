<template>
  <div v-show="showHeader"><Header /></div>
  <!-- <keep-alive>
    <router-view v-if="route.meta.keepAlive"></router-view>
  </keep-alive>
  <router-view v-if="!route.meta.keepAlive"></router-view> -->
  <!-- <router-view v-slot="{ Component }">
    <keep-alive>
      <component :is="Component" v-if="route.meta.keepAlive" />
    </keep-alive>
    <component :is="Component" v-if="!route.meta.keepAlive" />
  </router-view> -->
  <router-view v-slot="{ Component }" v-show="!showPlay">
    <keep-alive include="Home,Play,User">
      <component :is="Component" />
    </keep-alive>
  </router-view>
  <div v-show="showTabBar"><tab-bar></tab-bar></div>
  <div v-show="showPlay" class="play-container"><Play /></div>
</template>

<script>
import Header from "@/components/header";
import tabBar from "@/components/tabBar";
import Play from "@/components/play";
import { useStore } from "vuex";
import { computed } from "vue";
export default {
  name: "App",
  components: {
    Header,
    tabBar,
    Play,
  },
  setup() {
    const store = useStore();
    let showHeader = computed(() => store.state.showHeader);
    let showTabBar = computed(() => store.state.showTabBar);
    let showPlay = computed(() => store.state.showPlay);
    return { showHeader, showTabBar, showPlay };
  },
};
</script>

<style lang="scss">
#app {
  height: 100%;
  position: relative;
  background: $bg_f6;
  .play-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}
</style>
