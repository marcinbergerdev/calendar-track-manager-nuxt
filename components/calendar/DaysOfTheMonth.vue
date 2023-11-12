<template>
  <ul class="days-list">
    <li class="days-list__day" v-for="day in daysOfTheMonth" :key="day">{{ day }}</li>
  </ul>

  {{ daysOfTheMonth }}
</template>

<script setup lang="ts">


const { daysOfTheMonth } = defineProps<{
  daysOfTheMonth: number;
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
