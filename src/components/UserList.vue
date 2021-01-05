<template>
  <div class="container">
    <div class="column-1">
      <img :src="userDetails.avatar" alt="" class="img" />
    </div>
    <div class="column-2">
      <h2 class="row">
        <router-link
          :to="{ name: 'user-profile', params: { user: userName } }"
          >{{ userName }}</router-link
        >
        <!-- <a :href="userDetails.profileUrl">{{ userName }}</a> -->
      </h2>
      <p class="row">
        <span class="title">Type:</span>
        <b class="item">{{ userDetails.type }}</b>
      </p>
      <div class="row repo">
        <p class="title title-repo">First three repository:</p>
        <p v-for="repo in userDetails.repos" :key="repo" class="item">
          <b>{{ repo }}</b>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["userName", "userDetails"],
};
</script>

<style scoped>
.title {
  margin-right: 0.7rem;
}
.repo {
  display: flex;
  flex-wrap: wrap;
}
.item {
  margin-right: 0.7rem;
}
.row {
  display: flex;
  justify-content: start;
  align-items: center;
  width: 100%;
}
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
}
.column-1 {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1rem 2rem;
  width: 10rem;
}
.column-2 {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  width: 50%;
}
.img {
  height: 7rem;
  border-radius: 50%;
}
@media (max-width: 700px) {
  .row {
    flex-wrap: wrap;
    justify-content: center;
    text-align: center;
  }
  .column-1 {
    justify-content: center;
    margin-left: 2rem;
    width: 100%;
  }
  .column-2 {
    width: 100%;
  }
  .title-repo {
    display: flex;
    width: 100%;
    justify-content: center;
    margin-bottom: 1rem;
  }
}
@media (max-width: 1000px) {
  .container {
    margin-bottom: 1rem;
  }
}
</style>