<script>
import { store } from "../data/store.js";
export default {
  name: "SearchBar",
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <div>
    <input
      type="text"
      placeholder="Search character"
      v-model="store.searchCharacter"
    />
    <select name="" v-model="store.statusSelected">
      <option selected hidden>Select status</option>
      <option value="Alive">Alive</option>
      <option value="Dead">Dead</option>
      <option value="unknown">unknown</option>
    </select>
    <button>Search</button>
    <button>Reset</button>
  </div>
</template>

<style scoped>
div {
  margin: 30px 0;
}

input {
  padding: 5px;
  margin-right: 10px;
}

select {
  padding: 5px;
  margin-right: 10px;
}

button {
  padding: 7px 10px;
  margin-right: 10px;
  border-radius: 5px;
  border: 0;
}

button:first-of-type {
  background-color: #0a6efd;
  color: white;
}

button:last-of-type {
  background-color: #ffc106;
}
</style>
