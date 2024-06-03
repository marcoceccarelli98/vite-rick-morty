<script>
import CardsList from "./CardsList.vue";
import axios from "axios";
import { store } from "../data/store.js";
export default {
  name: "AppMain",
  components: {
    CardsList,
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
      <div class="research">RESEARCH BAR</div>
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
}
</style>
