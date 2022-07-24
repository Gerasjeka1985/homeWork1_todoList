import { defineStore } from 'pinia'

interface Elem {
  title:string,
  isChacked:boolean
}

interface State {
  listOfTasks: Elem[]
}

export const useTaskerStore = defineStore({
  id: 'tasker',
  state: function(){
    return{
      listOfTasks: [],
    } as State
  },
  getters: {
    getState: (state) => state.listOfTasks.sort((prev,next)=>{
      if(prev["isChacked"] < next["isChacked"]){
        return -1
      }
      else if(prev["isChacked"] > next["isChacked"]){
        return 1
      }
      else{
        return 0
      }
    })
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
