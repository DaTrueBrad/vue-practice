<script setup>
  import { ref } from 'vue';
  import {store} from '../state/store'
  let newTask = ref("")
  let inputField = ref()
  let globalId = 1

  const handleSubmit = (e) => {
    e.preventDefault()
    let obj = {name: newTask.value, id: globalId, complete: false}
    store.tasks = [obj, ...store.tasks]
    newTask.value = ""
    inputField.value.focus()
    globalId++
  }

</script>

<template>
  <form @submit="handleSubmit">
    <h2>Create a Task</h2>
    <input v-model="newTask" ref="inputField"/>
    <button>Add</button>
  </form>
</template>
<style scoped>
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px
  }
</style>