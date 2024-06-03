<script>
import AppCards from "./AppCards.vue";
import { store } from "../data/store.js";
export default {
  name: "CardsList",
  components: { AppCards },
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <ul>
    <li v-for="card in store.results">
      <AppCards
        :image="card.image"
        :name="card.name"
        :status="card.status"
        :species="card.species"
      />
    </li>
  </ul>
</template>

<style></style>
