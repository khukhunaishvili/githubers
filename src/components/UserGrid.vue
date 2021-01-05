<template>
  <div class="card">
    <div class="row">
      <img :src="userDetails.avatar" alt="" class="img" />
    </div>
    <div class="row">
      <h2>
        <a :href="userDetails.profileUrl">{{ userName }}</a>
      </h2>
    </div>
    <div class="row">
      <p>
        Type: <b>{{ userDetails.type }}</b>
      </p>
    </div>
    <div class="row">
      <p>First three repository:</p>
    </div>
    <div class="row repo">
      <p v-for="repo in userDetails.repos" :key="repo" class="repo">
        <b>{{ repo }}</b>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["userName", "userDetails"],
};
</script>

<style scoped>
.card {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  height: 21rem;
  width: 16rem;
  margin-right: 2rem;
  margin-left: 2rem;
  margin-top: 2rem;
  border: grey 1px solid;
  border-radius: 10px;
  align-content: space-around;
}
.row {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}
.row.repo {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.img {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 7rem;
  justify-content: center;
  border-radius: 50%;
}
</style>