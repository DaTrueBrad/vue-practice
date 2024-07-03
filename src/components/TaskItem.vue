<script setup>
import {useTaskStore} from '../state/store'
const tasks = useTaskStore()
const props = defineProps({
  task: Object,
  index: Number,
})

const handleComplete = () => tasks.completeTask(props.index)

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