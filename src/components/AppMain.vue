<script>
import CardsList from "./CardsList.vue";
import SearchBar from "./SearchBar.vue";
import axios from "axios";
import { store } from "../data/store.js";
export default {
  name: "AppMain",
  components: {
    CardsList,
    SearchBar,
  },

  data() {
    return {
      store,
    };
  },
  methods: {
    searchCharacter() {
      if (store.searchName == "" && store.statusSelected == "") {
        axios.get(store.apiUrl).then((response) => {
          this.store.results = response.data.results;
        });
      } else {
        axios
          .get(
            store.apiUrl +
              "?name=" +
              store.searchName +
              "&status=" +
              store.statusSelected
          )
          .then((response) => {
            this.store.results = response.data.results;
          });
      }
    },
  },
  created() {
    this.searchCharacter();
  },
};
</script>

<template>
  <main>
    <div class="container">
      <SearchBar @search="searchCharacter" />
      <div class="cardContainer">
        <CardsList />
      </div>
    </div>
  </main>
</template>

<style>
.research {
  margin-bottom: 50px;
}

.cardContainer {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  justify-content: center;
}
</style>
