<template>
  <ul class="days-list">
    <li class="days-list__day" v-for="day in daysOfTheMonth" :key="day">{{ day }}</li>
  </ul>
</template>

<script setup lang="ts">
import dayjs from "dayjs";

const daysOfTheMonth = ref(dayjs("2023-10-10").daysInMonth());
</script>

<style scoped lang="scss">
.days-list {
  &__day {
  }
}
</style>
