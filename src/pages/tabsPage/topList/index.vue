<template>
  <div>
    排行榜
  </div>
</template>

<script>
export default {
  mounted() {
    this.$store.dispatch("setHeader", { title: "排行榜" });
  }
};
</script>

<style scoped>
</style>