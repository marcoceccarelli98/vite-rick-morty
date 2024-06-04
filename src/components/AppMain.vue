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

  created() {
    axios.get(store.apiUrl).then((response) => {
      this.store.results = response.data.results;
      console.log(this.store.results);
    });
  },
};
</script>

<template>
  <main>
    <div class="container">
      <SearchBar />
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
  /* gap: 15px; */
  justify-content: space-between;
}
</style>
