<script setup lang="ts">
import AddTaskbutton from "./components/addTaskbutton.vue";
import Task from "./components/Task.vue";
import { useTaskerStore } from "@/stores/tasker";
import { computed } from "@vue/reactivity";
const store = useTaskerStore();
//счетчик задач
const n = 1;

const listOfTasks = computed(() => store.getState);

//для генерирования случайного и не повторяющегося key
function genKey() {
  let key = `azv-${Math.random() * (2 - 1) + 1}`;
  return key;
}
</script>

<template>
  <header class="header">
    <div class="logo">
      <h2>toDo List</h2>
    </div>
  </header>
  <main>
    <AddTaskbutton @click="store.addTask(n++)">Добавить Задачу</AddTaskbutton>
    <div v-if="listOfTasks.length > 0" class="task-list">
      <ul>
        <li v-for="elem in listOfTasks">
          <Task v-model="elem.isChacked" :key="genKey()">
            {{ elem.title }}</Task
          >
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
