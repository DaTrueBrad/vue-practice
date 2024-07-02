<script setup>
import TaskItem from "@/components/TaskItem.vue";
import {store} from '../state/store'

const toggle = (index) => {
  store.tasks[index] = {...store.tasks[index], complete: !store.tasks[index].complete}
}

</script>

<template>
  <div>
    <h2>All Tasks</h2>
    <ul>
      <task-item v-for="(task, index) in store.tasks" :task="task" :key="task.id" :index="index" :toggle="toggle"/>
    </ul>
  </div>
</template>

<style scoped>
div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px
  }
</style>
