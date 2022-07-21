import { defineStore } from 'pinia'

interface State {
  listOfTasks: string[];
  taskNumber: Number
}

export const useTaskerStore = defineStore({
  id: 'tasker',
  state: function(){
    return{
      listOfTasks: [],
      taskNumber:0
    } as State
  },
  getters: {
    actions: (state) => state.listOfTasks 
  },
  actions: {
    addTask() {
      this.listOfTasks.push(`Задача`)
  }
  }
})
