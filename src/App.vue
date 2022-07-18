<script setup lang="ts">
import AddTaskbutton from "./components/addTaskbutton.vue";
import Task from "./components/Task.vue";
</script>

<template>
  <header class="header">
    <div class="logo">
      <h2>toDo List</h2>
    </div>
  </header>
  <main>
    <AddTaskbutton>Добавить Задачу</AddTaskbutton>
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
</style>
