<template>
  <ul class="weeks-list">
    <li class="weeks-list__week" v-for="(day, id) in weekdays" :key="id">
      {{ day.substring(0, 3) }}
    </li>
  </ul>
</template>

<script setup lang="ts">
const weekdays = useWeekDays();

</script>

<style scoped lang="scss">
.weeks-list {
  display: grid;
  grid-template-columns: repeat(7, 1fr);

  margin-top: 5rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid var(--text-clr);

  &__week {
    justify-self: center;
    font-size: 1.4rem;

    @media (width > 300px) {
      font-size: 1.8rem;
    }
  }
}
</style>
