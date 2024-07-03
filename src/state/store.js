import { defineStore } from "pinia";

export const useTaskStore = defineStore('tasks', {
  state: () => {
    return {tasks: [], globalId: 1}
  },
  actions: {
    addTask(t) {
      let newTask = {
        name: t,
        id: this.globalId,
        complete: false
      }
      this.tasks = [newTask, ...this.tasks]
      this.globalId++
    },
    completeTask(index) {
      this.tasks[index] = {...this.tasks[index], complete: !this.tasks[index].complete}
    }
  },
})