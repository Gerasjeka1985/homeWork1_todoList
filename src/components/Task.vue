<script setup lang="ts">
import { computed } from "vue";

//задаем значине для флага false
const props = defineProps<{
  //эта строка позволит при добавлении новый задач в стор не терять булевое значение
  checkbox: Boolean;
}>();

const emit = defineEmits(["update: checkValue"]);

// По checkValue будет определять завершено дело или нет
//Можно попробовать через v-if/ v-else
const checkValue = computed({
  get() {
    return props.checkbox;
  },
  set(value?: Boolean) {
    emit("update: checkValue", value);
  },
});
</script>

<template>
  <div class="task-container">
    <div class="task-item">
      <slot></slot>
      <div v-if="checkbox">Задача завершена</div>
      <input type="checkbox" v-model="checkbox" />
    </div>
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
