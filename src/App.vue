<template>
  <div id="app">
    <app-header></app-header>
    <router-view :key="$route.fullPath"></router-view>
  </div>
</template>

<script>
import Header from "./components/Header";

export default {
  components: {
    appHeader: Header,
  },
};
</script>

<style>
body {
  display: flex;
  font-size: 15px;
  flex-direction: column;
  margin: 1rem;
  padding: 1rem;
  line-height: 0;
}
a,
a:visited {
  text-decoration: none;
  color: #0072ce;
}
a:hover {
  text-decoration: underline;
  text-decoration-color: #0072ce;
}
</style>
