<template>
  <div class="container">
    <div class="item">
      <h1>
        <router-link :to="{ name: 'home' }" class="home"
          >Githubbers</router-link
        >
      </h1>
    </div>
    <div class="item">
      <app-search></app-search>
      <div class="toggle">
        <button v-if="!isList" @click="changeLayout" class="material-icons-round">
          reorder
        </button>
        <button v-if="isList" @click="changeLayout" class="material-icons-round">
          apps
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Search from "./Search";
export default {
  data() {
    return {
      isList: true,
    };
  },
  methods: {
    changeLayout() {
      this.isList = !this.isList;
      this.$root.$emit("changeLayout");
    },
  },
  components: {
    appSearch: Search,
  },
};
</script>

<style scoped>
.toggle {
  margin-left: 1rem;
}
button {
  background: white;
  border: 0
}
button:focus {
  outline: 0
}
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
}
div {
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.home {
  color: black;
}

.home:hover {
  color: #0072ce;
  text-decoration: none;
}
@media (max-width: 700px) {
  .item {
    justify-content: center;
    width: 100%;
  }
  h1 {
    margin-bottom: 3rem;
  }
}
</style>