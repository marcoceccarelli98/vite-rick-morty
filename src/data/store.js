import { reactive } from "vue";

export const store = reactive({
  loading: false,

  info: [],
  results: [],
  apiUrl: "https://rickandmortyapi.com/api/character",

  searchName: "",
  statusSelected: "",
});
