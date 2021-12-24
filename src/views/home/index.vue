<template>
  <div class="home">home</div>
  <div>
    {{ count }}
    {{ countPlus }}
  </div>
  <button @click="multiCount">add count</button>
</template>

<script setup>
import { useStore } from "vuex";
import { computed } from "vue";
let store = useStore();
const count = computed(() => store.getters.count);
const countPlus = computed(() => count.value + 1);
const multiCount = () => {
  store.dispatch("multiCount", 3);
};
</script>

<style lang="scss" scoped>
.home {
  color: $primaryColor;
  font-size: $font14;
}
</style>
