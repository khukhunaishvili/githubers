<template>
  <div class="flex-container">
    <div v-if="showNotFound">
      <user-not-found></user-not-found>
    </div>
    <div v-else-if="userFound" class="row">
      <div>
        <img :src="user.avatar" :alt="user.name" class="img-prof" />
      </div>
      <div class="title">
      <h1>
        <a :href="user.profileUrl" target="_blank">{{ user.name }}</a>
      </h1>
      </div>
      <div class="title-2">
        Type: <b>{{ user.type }}</b>
      </div>
      <div class="column">
        <div class="column-item">
          <div class="title-2">
          <h3>First three repository</h3>
          </div>
          <div v-if="user.repos" class="repo">
            <p v-for="repo in user.repos" :key="repo" class="list">
              {{ repo }}
            </p>
          </div>
          <div v-else>
            <p class="info">User doesn't have any repository</p>
          </div>
        </div>
        <div class="column-item">
          <div class="title-2">
          <h3>Organisations</h3>
          </div>
          <div v-if="user.orgs">
            <p v-for="org in user.orgs" :key="org.login" class="list">
              <img :src="org.avatar" :alt="org.login" class="img-org" />
              <a :href="org.url">{{ org.login }}</a>
            </p>
          </div>
          <div v-else>
            <p class="info">User doesn't belongs to any organisation</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UserNotFound from "@/components/UserNotFound.vue";
import { mapActions } from "vuex";

export default {
  name: "UserProfile",
  mounted() {
    this.getUser(this.requestedUsername).then(
      (response) => {
        this.userFound = true;
        this.user = response;
      },
      (error) => {
        this.showNotFound = true;
        this.userFound = false;
        console.error(error);
      }
    );
  },
  data() {
    return {
      userFound: false,
      user: {},
      showNotFound: false
    };
  },
  methods: {
    ...mapActions(["getUser"]),
  },
  computed: {
    requestedUsername() {
      return this.$route.params.user;
    },
  },
  watch: {
    $route() {
      this.getUser(this.requestedUsername);
    },
  },
  components: {
    UserNotFound,
  },
};
</script>

<style scoped>
.list {
  display: flex;
  align-items: center;
}
.info {
  color: #6c757d;
}
h3 {
  text-align: center;
}
.flex-container {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
}
.column-item {
  width: 49%;
}
.column {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  text-align: start;
}
.row {
  padding: 5px;
  margin: 10px;
  text-align: center;
  width: 500px;
}
.img-prof {
  width: 40%;
  height: auto;
  border-radius: 50%;
  margin-bottom: 2rem;
}
.img-org {
  max-height: 2rem;
  padding-right: 2rem;
  padding-left: 2rem;
}
p {
  height: 2rem;
}
.title {
  margin-bottom: 3rem;
}
.title-2 {
  margin-bottom: 2rem;
}
@media (max-width: 700px) {
  .repo {
    display: flex;
    flex-wrap: wrap;
  }
  .list {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin: 0;
  }
  .column-item {
    width: 100%;
  }
  .column {
    text-align: center;
  }
}
</style>
