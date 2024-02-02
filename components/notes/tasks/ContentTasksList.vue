<template>
  <ul class="task-checklist">
    <li class="task-checklist-item" v-if="!isChecklist">
      <p class="task-checklist-item__emptyMessage">Brak zadania</p>
    </li>

    <li class="task-checklist-item" v-else v-for="(task, id) in tasks">
      <p class="task-checklist-item__text">{{ id + 1 }}. {{ task.name }}</p>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { Task } from "~/types/Notes";

const { tasksList } = defineProps<{
  tasksList: string | Task[];
}>();

const isChecklist = computed(() => Array.isArray(tasksList));

const tasks = computed(() => {
  return isChecklist ? (tasksList as Task[]) : [];
});
</script>

<style scoped lang="scss">
.task-checklist {
  display: flex;
  flex-direction: column;
  gap: 1rem 0;
}

.task-checklist {
  display: flex;
  flex-direction: column;
  gap: 1rem 0;
}

.task-checklist-item {
  &__text,
  &__emptyMessage {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    font-size: 1.5rem;
  }
}
</style>
