<template>
  <NuxtErrorBoundary>

    <CalendarDaysList
      :previous-month="previousMonth"
      :current-month="currentMonth"
      :next-month="nextMonth"
    ></CalendarDaysList>


    <template #error="{ error }">
      <ErrorCalendarMessage :error="error" :is-close-button="false"></ErrorCalendarMessage>
    </template>
    
  </NuxtErrorBoundary>
</template>

<script setup lang="ts">
import { Dayjs } from "dayjs";

defineProps<{
  previousMonth: Dayjs;
  currentMonth: Dayjs;
  nextMonth: Dayjs;
}>();
</script>
