<template>
  <div>
    <div :class="[isList ? 'flex-list' : '', !isList ? 'flex-grid' : '']">
      <main
        v-for="(value, name) in popularUsers"
        :key="name"
        :class="[isList ? 'list-row' : '']"
      >
        <user-list
          :userName="name"
          :userDetails="value"
          v-if="isList"
        ></user-list>
        <user-grid
          :userName="name"
          :userDetails="value"
          v-if="!isList"
        ></user-grid>
      </main>
    </div>
  </div>
</template>

<script>
import UserList from "@/components/UserList.vue";
import UserGrid from "@/components/UserGrid.vue";
import { mapActions, mapState } from "vuex";

export default {
  name: "Home",
  mounted() {
    this.getPopularUsers();
    this.$root.$on("changeLayout", () => {
      this.isList = !this.isList;
    });
  },
  data() {
    return {
      testdata: "",
      isList: true,
    };
  },
  computed: {
    ...mapState(["popularUsers"]),
  },
  methods: {
    ...mapActions(["getPopularUsers", "test"]),
  },
  components: {
    UserList,
    UserGrid,
  },
};
</script>

<style scoped>
.flex-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 4rem;
}
.flex-list {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  margin-top: 5rem;
}
.list-row {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
}

@media (max-width: 700px) {
  .child {
    min-width: 33.33%;
  }
}

@media (max-width: 400px) {
  .child {
    min-width: 50%;
  }
}
/* .row { 
  display:flex;
  flex-wrap: wrap;
}

.column {
  text-align: center;
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 1;
  
  margin: 10px;
  
  background-color: #efefef;
  border: 1px solid #dedede;
  padding: 10px;
  
} */

/* .col-1 {
  max-width: calc(100% / 12);
}
.col-2 {
  max-width: calc(100% / 12 * 2);
}
.col-3 {
  max-width: calc(100% / 12 * 3);
}
.col-4 {
  max-width: calc(100% / 12 * 4);
} */
</style>