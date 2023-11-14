<template>
  <ul class="days-list">
    <li
      class="days-list__day"
      v-for="(day, id) in daysData.days"
      :style="{ gridColumnStart: id === 0 ? daysData.startingWeeksDay : 'auto' }"
      :key="id"
    >
      {{ day }}
    </li>
  </ul>
</template>

<script setup lang="ts">
interface Date {
  startingWeeksDay: number;
  days: number;
}

defineProps<{
  daysData: Date;
}>();
</script>

<style scoped lang="scss">
.days-list {
  display: grid;
  grid-template-columns: repeat(7, 1fr);

  gap: 1rem 0;
  margin-top: 1rem;

  &__day {
    font-size: 1.5rem;
    justify-self: center;
  }
}
</style>
