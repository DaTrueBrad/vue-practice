<script setup>
import axios from "axios";
import { onMounted, ref, computed } from "vue";
import { useVirtualList } from "@vueuse/core";
let loading = ref(true);
let pokemon = ref([]);
let search = ref("")
const filteredList = computed(() =>
  pokemon.value.filter((p) => p.name.toLowerCase().includes(search.value.toLowerCase()))
);
const { list, containerProps, wrapperProps } = useVirtualList(filteredList, {
  itemHeight: 22,
  itemWidth: 100
});

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
  <h3>I'm using a virtualized list for performance</h3>
  <p v-if="loading">Loading...</p>
  <div v-else>
    <input v-model="search" placeholder="Search"/>

    <div v-bind="containerProps">
      <div v-bind="wrapperProps">
        <h5 v-for="p of list" :key="p.data.url">{{ p.data.name }}</h5>
      </div>
    </div>
  </div>
</template>

<style scoped>
h5 {
  height: 22px;
}
</style>
