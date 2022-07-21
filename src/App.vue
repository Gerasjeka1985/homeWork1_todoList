<script setup lang="ts">
import AddTaskbutton from "./components/addTaskbutton.vue";
import Task from "./components/Task.vue";
import { useTaskerStore } from "@/stores/tasker";
import { computed, ref } from "@vue/reactivity";
const store = useTaskerStore();

const listOfTasks = computed(() => store.actions);

const chek = ref(false);
</script>

<template>
  <header class="header">
    <div class="logo">
      <h2>toDo List</h2>
    </div>
  </header>
  <main>
    <AddTaskbutton @click="store.addTask">Добавить Задачу</AddTaskbutton>
    <div v-if="listOfTasks.length > 0" class="task-list">
      <ul>
        <li v-for="(action, index) in listOfTasks" :key="listOfTasks[index]">
          <Task v-model="chek"> {{ listOfTasks[index] }} {{ index }} </Task>
        </li>
      </ul>
    </div>
    <div v-else class="noElems">
      <h3>Still no tasks here</h3>
    </div>
  </main>
</template>

<style scoped>
.header {
  width: 100%;
  height: 50px;
  background: linear-gradient(45deg, rgb(175, 168, 224), rgb(2, 2, 79));
  color: aliceblue;
}
.logo {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-left: 20px;
}

.noElems {
  display: flex;
  justify-content: center;
  align-items: center;
}
.noElems h3 {
  color: rgb(100, 14, 14);
}
</style>
