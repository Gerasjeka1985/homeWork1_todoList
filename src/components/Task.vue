<script setup lang="ts">
const props = defineProps<{
  isDone: Boolean;
}>();
</script>

<template>
  <div class="task-item">
    <slot></slot>
  </div>
</template>

<style>
.task-item {
  margin-top: 100px;
  margin-left: 20px;
  width: 40%;
  height: 40px;
  background: none;
  color: rgb(9, 9, 105);
  border: 1px solid rgb(9, 9, 105);
  border-radius: 5px;
}
</style>
