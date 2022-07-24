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
  <div class="task-item">
    <slot></slot>
    <input type="checkbox" v-model="check" />
    <div v-if="modelValue">Задача завершена</div>
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
</style>
