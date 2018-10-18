<template>
  <div>
    私人FM
  </div>
</template>

<script>
export default {
  mounted() {
    this.$store.dispatch("setHeader", { title: "私人FM" });
  }
};
</script>

<style scoped>
</style>