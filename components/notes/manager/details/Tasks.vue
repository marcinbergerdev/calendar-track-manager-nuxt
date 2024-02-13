<template>
  <ul class="details-task-list">
    <li class="details-task" v-for="({ name }, id) in tasks" :key="id">
      <p class="details-task__name">{{ id + 1 }}. {{ name }}</p>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { Task } from '~/types/Notes';

defineProps<{
  tasks: Task[];
}>();
</script>

<style scoped lang="scss">
.details-task-list {
  display: flex;
  flex-direction: column;
  gap: 2rem;

  margin: 2rem auto 0 auto;
  width: min(60rem, 100%);
}

.details-task {
  &__name {
    font-size: 2.3em;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    @media (width >= 768px) {
      font-size: 2rem;
    }
  }
}
</style>
