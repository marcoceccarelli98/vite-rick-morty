<script>
import CardsList from "./CardsList.vue";
import SearchBar from "./SearchBar.vue";
import ItemsCounter from "./ItemsCounter.vue";
import axios from "axios";
import { store } from "../data/store.js";
export default {
  name: "AppMain",
  components: {
    CardsList,
    SearchBar,
    ItemsCounter,
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
          store.results = response.data.results;
          store.info = response.data.info;
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
            store.results = response.data.results;
            store.info = response.data.info;
          });
      }
      console.log(store.info);
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
      <ItemsCounter :counter="store.info.count" />
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
