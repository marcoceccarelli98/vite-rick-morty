<script>
import CardsList from "./CardsList.vue";
import SearchBar from "./SearchBar.vue";
import AppLoader from "./AppLoader.vue";
import PrevPage from "./PrevPage.vue";
import NextPage from "./NextPage.vue";
import ItemsCounter from "./ItemsCounter.vue";
import axios from "axios";
import { store } from "../data/store.js";
export default {
  name: "AppMain",
  components: {
    CardsList,
    SearchBar,
    AppLoader,
    ItemsCounter,
    PrevPage,
    NextPage,
  },

  data() {
    return {
      store,
    };
  },
  methods: {
    getData(response) {
      setTimeout(function () {
        store.results = response.data.results;
        store.info = response.data.info;
        store.loading = false;
      }, 1000);
    },
    searchCharacter() {
      store.loading = true;
      axios
        .get(store.apiUrl, {
          params: {
            name: this.store.searchName,
            status: this.store.statusSelected,
          },
        })
        .then((response) => this.getData(response));
      console.log(store.info);
    },
    prevPage() {
      if (store.info.prev != null) {
        axios.get(store.info.prev).then((response) => this.getData(response));
      }
    },
    nextPage() {
      if (store.info.next != null) {
        axios.get(store.info.next).then((response) => this.getData(response));
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
        <AppLoader v-if="store.loading" />
        <CardsList v-else />
      </div>
      <div class="pageSelector">
        <PrevPage @prev="prevPage" />
        <NextPage @next="nextPage" />
      </div>
      <ItemsCounter :counter="store.info.count" />
    </div>
  </main>
</template>

<style>
.research {
  margin-bottom: 50px;
}

.pageSelector {
  margin-bottom: 10px;
}

.cardContainer {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  justify-content: center;
}
</style>
