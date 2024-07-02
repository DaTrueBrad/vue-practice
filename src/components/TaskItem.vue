<script setup>
import {store} from '../state/store'

const props = defineProps({
  task: Object,
  index: Number,
})

const handleComplete = () => {
  console.log('click')
  let newTasks = [...store.tasks]
  newTasks[props.index] = {...newTasks[props.index], complete: !newTasks[props.index].complete}
  store.tasks = [...newTasks]
}
console.log(store.tasks)
</script>

<template>
  <div class="task">
    <input type="checkbox" :checked="task.complete" @click="handleComplete" />
    <h5>{{ task.name }}</h5>
  </div>
</template>

<style scoped>
.task {
  display: flex;
  flex-direction: row;
  height: 50px;
  width: 400px;
  gap: 8px;
}
</style>