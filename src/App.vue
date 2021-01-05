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
  <router-view v-slot="{ Component }">
    <keep-alive include="Home,Play,User">
      <component :is="Component" />
    </keep-alive>
  </router-view>
  <tab-bar v-show="showTabBar"></tab-bar>
</template>

<script>
import Header from "@/components/header";
import tabBar from "@/components/tabBar";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { computed } from "vue";
export default {
  name: "App",
  components: {
    Header,
    tabBar,
  },
  setup() {
    const router = useRouter();
    const store = useStore();
    router.beforeEach((to) => {
      store.dispatch("commitActiveTab", to.name);
      to.meta.header === undefined
        ? store.dispatch("commitShowHead", true)
        : store.dispatch("commitShowHead", false);
      to.meta.tabbar === undefined
        ? store.dispatch("commitShowTabBar", true)
        : store.dispatch("commitShowTabBar", false);
    });
    let showHeader = computed(() => store.state.showHeader);
    let showTabBar = computed(() => store.state.showTabBar);
    return { showHeader, showTabBar };
  },
};
</script>

<style lang="scss">
#app {
  height: 100%;
  position: relative;
  background: $bg_f6;
}
</style>
