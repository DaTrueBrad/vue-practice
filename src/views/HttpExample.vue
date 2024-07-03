<script setup>
import axios from "axios";
import { onMounted, ref } from "vue";

let loading = ref(true);

let pokemon = ref([]);

const getData = () => {
  axios
    .get("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
    .then((res) => {
      pokemon.value = res.data.results;
      loading.value = false;
    })
    .catch((err) => {
      console.error(err);
    });
};

onMounted(getData);
</script>
<template>
  <h2>Here are some results of the HTTP Request</h2>
  <p v-if="loading">Loading...</p>
  <div v-else>
    <h5 v-for="p of pokemon" :key="p.url">{{ p.name }}</h5>
  </div>
</template>

<style scoped></style>
