<template>
  <div class="flex-container">
    <div class="row">
      <form class="search" method="post" action="index.html" autocomplete="off">
        <input
          type="text"
          name="q"
          v-on:focusin="focus(true)"
          v-on:focusout="focus(false)"
          v-model="searchQuery"
          placeholder="Find GitHub user"
        />
        <div v-if="gotState">
          <div v-if="isSearching">
            <ul class="results">
              <li
                v-for="user in searchSuggestions"
                :key="user.login"
                @click="saveSearch(user); searchQuery = null;"
              >
                <router-link
                  :to="{ name: 'user-profile', params: { user: user.login } }"
                >
                  <img :src="user.avatar" :alt="user.login" class="img" />
                  <span>{{ user.login }}</span>
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  data() {
    return {
      searchQuery: "",
      suggestionAmount: 5,
      isSearching: false,
      gotState: false,
    };
  },
  methods: {
    ...mapActions([
      "generateSuggestions",
      "updateLastVisitedSearch",
      "loadLastVisitedSearch",
    ]),
    focus(boolean) {
      if (boolean) {
        this.isSearching = true;
        if (!this.searchQuery) {
          this.loadLastVisitedSearch();
        }
      } else if (!boolean) {
        setTimeout(() => (this.isSearching = false), 100);
      }
    },
    saveSearch(selectedUser) {
      this.updateLastVisitedSearch(selectedUser);
    },
  },
  computed: {
    ...mapState(["searchSuggestions"]),
    computedSuggestions() {
      return this.searchSuggestions;
    },
    githubApiUrl() {
      return `https://api.github.com/search/users?accept=application/vnd.github.v3+json&q=${this.searchTerm}+type%3Auser&type=Users&per_page=${this.suggestionAmount}`;
    },
    searchTerm() {
      return this.searchQuery ? this.searchQuery.split(" ").join("+") : this.searchQuery;
    },
  },
  watch: {
    searchQuery() {
      this.generateSuggestions({
        searchQuery: this.searchQuery,
        githubApiUrl: this.githubApiUrl,
      });
    },
    searchSuggestions() {
      this.gotState = true;
    },
  },
};
</script>

<style scoped>
.img {
  max-height: 2rem;
  border-radius: 50%;
  margin-right: 2rem;
}
.search {
  position: relative;
  margin: 0 auto;
}
.search input {
  height: 26px;
  width: 100%;
  padding: 0 12px 0 25px;
  border-width: 1px;
  border-style: solid;
  border-color: #a8acbc #babdcc #c0c3d2;
  border-radius: 13px;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  -ms-box-sizing: border-box;
  -o-box-sizing: border-box;
  box-sizing: border-box;
}
.search input:focus {
  outline: none;
  border-color: #66b1ee;
}
.search input:focus + .results {
  display: block;
}
.search .results {
  position: absolute;
  top: 35px;
  left: 0;
  right: 0;
  z-index: 10;
  padding: 0;
  margin: 0;
  border-width: 1px;
  border-style: solid;
  border-color: #cbcfe2 #c8cee7 #c4c7d7;
  border-radius: 3px;
  background-color: #fdfdfd;
}
.search .results li {
  display: block;
}
.search .results li:first-child {
  margin-top: -1px;
}
.search .results li:first-child:before,
.search .results li:first-child:after {
  display: block;
  content: "";
  position: absolute;
  left: 50%;
  border: 5px outset transparent;
}
.search .results li:first-child:before {
  border-bottom: 5px solid #c4c7d7;
  top: -11px;
}
.search .results li:first-child:after {
  border-bottom: 5px solid #fdfdfd;
  top: -10px;
}
.search .results li:first-child:hover:before,
.search .results li:first-child:hover:after {
  display: none;
}
.search .results a {
  display: flex;
  justify-content: start;
  align-items: center;
  position: relative;
  margin: 0 -1px;
  padding: 6px 40px 6px 10px;
  color: #0072ce;
  border: 1px solid transparent;
  border-radius: 3px;
  height: 2rem;
}
.search .results a:hover {
  text-decoration: none;
  color: #fff;
  text-shadow: 0 -1px rgba(0, 0, 0, 0.3);
  border-color: #2380dd #2179d5 #1a60aa;
  background-color: #338cdf;
}
:-moz-placeholder {
  color: #a7aabc;
  font-weight: 200;
}
::-webkit-input-placeholder {
  color: #a7aabc;
  font-weight: 200;
}
</style>