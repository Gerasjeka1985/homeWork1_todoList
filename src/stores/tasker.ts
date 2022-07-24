import { defineStore } from 'pinia'



interface State {
  listOfTasks: Elem[]
}

interface Elem {
  title:string,
  isChacked:boolean
}

export const useTaskerStore = defineStore({
  id: 'tasker',
  state: function(){
    return{
      listOfTasks: [],
    } as State
  },
  getters: {
    actions: (state) => state.listOfTasks.sort()
  },
  actions: {
    addTask(n:number) {
      this.listOfTasks.push({
        title: `Задача ${n}`,
        isChacked: false
      })
  }
  }
})
