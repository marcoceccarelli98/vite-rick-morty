<script>
export default {
  name: "AppCards",
  props: {
    image: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
    species: {
      type: String,
      required: true,
    },
  },
};
</script>

<template>
  <div class="cardContent">
    <div class="imageContent">
      <img :src="image" :alt="name" />
    </div>
    <div class="textContent">
      <h2>{{ name }}</h2>
      <h3>{{ status }}</h3>
      <h3>{{ species }}</h3>
    </div>
  </div>
</template>

<style>
.cardContent {
  margin-bottom: 50px;
}

img {
  border-radius: 50%;
}

.textContent {
  max-width: 250px;
  margin: 0 auto;
}

h2 {
  margin: 10px 0 30px 0;
}
</style>
