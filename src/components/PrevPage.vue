<script>
export default {
  name: "PrevPage",
  emits: ["prev"],
};
</script>

<template>
  <button @click="$emit('prev')">Prev</button>
</template>

<style scoped>
div {
  margin: 30px 0;
}

button {
  padding: 7px 10px;
  margin-right: 10px;
  border-radius: 5px;
  border: 0;
  margin-top: 10px;
  background-color: #0a6efd;
  color: white;
}
</style>
