<template>
  <div class="container">
    <div class="item">User wasn't found</div>
    <div class="item">
      <button @click="goHome">Go to home page</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goHome() {
      this.$router.push({ name: "home" });
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
}
.item {
  width:100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem;
}
</style>