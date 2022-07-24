<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  modelValue?: boolean;
}>();

const emit = defineEmits(["update:modelValue"]);

const check = computed({
  get() {
    return props.modelValue;
  },
  set(value?: boolean) {
    emit("update:modelValue", value);
  },
});
</script>

<template>
  <div v-if="!modelValue" class="task-item">
    <slot></slot>
    <input type="checkbox" v-model="check" />
  </div>
  <div v-else class="task-done">
    <slot></slot>
    <input type="checkbox" v-model="check" />
    <div>Задача завершена</div>
  </div>
</template>

<style>
.task-item {
  margin-top: 10px;
  margin-left: 20px;
  width: 40%;
  height: 40px;
  background: none;
  color: rgb(9, 9, 105);
  border: 1px solid rgb(9, 9, 105);
  border-radius: 5px;
}

.task-done {
  margin-top: 10px;
  margin-left: 20px;
  width: 40%;
  height: 40px;
  background: none;
  color: rgb(56, 5, 12);
  border: 1px solid rgb(9, 9, 105);
  border-radius: 5px;
  text-decoration: line-through;
}
</style>
