<script setup>
import TaskItem from "@/components/TaskItem.vue";
import {useTaskStore} from '../state/store'
const tasks = useTaskStore()

const toggle = (index) => tasks.completeTasks(index)

</script>

<template>
  <div>
    <h2>All Tasks</h2>
    <ul>
      <task-item v-for="(task, index) in tasks.tasks" :task="task" :key="task.id" :index="index" :toggle="toggle"/>
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
