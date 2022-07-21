import { defineStore } from 'pinia'

interface State {
  listOfTasks: string[];
}

export const useTaskerStore = defineStore({
  id: 'tasker',
  state: function(){
    return{
      listOfTasks: [],
    } as State
  },
  getters: {
    //filter  здесь
    actions: (state) => state.listOfTasks 
  },
  actions: {
    addTask() {
      this.listOfTasks.push(`Задача`)
  }
  }
})
