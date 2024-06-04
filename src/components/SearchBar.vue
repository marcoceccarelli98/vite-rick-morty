<script>
export default {
  name: "SearchBar",
};
</script>

<template>
  <div>
    <input type="text" placeholder="Search character" />
    <select name="" id="">
      <option selected disabled>Select status</option>
      <option value="">1</option>
      <option value="">2</option>
      <option value="">3</option>
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
