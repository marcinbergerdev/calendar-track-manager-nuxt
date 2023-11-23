<template>
  <ul class="days-list">
    <li
      v-for="{ id, day, weekDayId, inactive } in selectedMonth"
      class="days-list__day"
      :class="{
        inactive: inactive,
        weekdays: weekDayId === 7 ? true : false,
      }"
      :key="id"
    >
      {{ day }}
    </li>
  </ul>
</template>

<script setup lang="ts">
import { Month } from "@/types/Date";

defineProps<{
  selectedMonth: Month[];
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

.weekdays {
  color: var(--red);
}

.inactive {
  opacity: 0.3;
}
</style>
