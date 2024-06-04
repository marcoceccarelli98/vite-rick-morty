<script>
export default {
  name: "ItemsCounter",
  props: ["counter"],
  computed: {
    printItemsCount() {
      return "Characters found : " + this.counter;
    },
  },
};
</script>

<template>
  <div>
    <span>{{ printItemsCount }}</span>
  </div>
</template>

<style scoped>
div {
  margin-bottom: 20px;
}
</style>
