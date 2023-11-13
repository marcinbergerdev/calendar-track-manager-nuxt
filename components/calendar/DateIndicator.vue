<template>
  <header class="calendar-header">
    <h2 class="calendar-current-date">{{ day }} {{ setDayName }}</h2>

    <div class="calendar-selector">
      <button class="calendar-selector__button previous" @click="$emit('previous')">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
          <path
            fill="currentColor"
            d="M8.2 751.4c0 8.6 3.4 17.401 10 24.001c13.2 13.2 34.8 13.2 48 0l451.8-451.8l445.2 445.2c13.2 13.2 34.8 13.2 48 0s13.2-34.8 0-48L542 251.401c-13.2-13.2-34.8-13.2-48 0l-475.8 475.8c-6.8 6.8-10 15.4-10 24.2z"
          />
        </svg>
      </button>

      <span class="calendar-selector__month">{{ selectedMonth }} {{ year }}</span>

      <button class="calendar-selector__button next" @click="$emit('next')">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
          <path
            fill="currentColor"
            d="M8.2 751.4c0 8.6 3.4 17.401 10 24.001c13.2 13.2 34.8 13.2 48 0l451.8-451.8l445.2 445.2c13.2 13.2 34.8 13.2 48 0s13.2-34.8 0-48L542 251.401c-13.2-13.2-34.8-13.2-48 0l-475.8 475.8c-6.8 6.8-10 15.4-10 24.2z"
          />
        </svg>
      </button>
    </div>
  </header>
</template>

<script setup lang="ts">
import { Date } from '@/types/Date'

const { weekdaysList, monthsList, date } = defineProps<{
  weekdaysList: string[];
  monthsList: string[];
  date: Date;
}>();
const { id, day, month, year } = toRefs(date);

const emit = defineEmits<{
  previous: [];
  next: [];
}>();

const setDayName = computed(() => {
  return weekdaysList[id.value - 1]; // weeks begin from 0 - 6 index
});

const selectedMonth = computed(() => {
  return monthsList[month.value];
});

</script>

<style scoped lang="scss">
.calendar-header {
  flex-direction: column;
  justify-content: center;
  gap: 3rem 0;

  @media (width >= 570px) {
    flex-direction: row;
    justify-content: space-between;
    gap: 0 2rem;
  }
}

.calendar-current-date {
  font-size: 3.3rem;
  font-weight: 400;
  text-align: center;
}

.calendar-selector {
  gap: 0 1rem;

  &__button {
    width: 3rem;
    height: 3rem;
    color: var(--text-clr);

    &.previous {
      rotate: -90deg;
    }
    &.next {
      rotate: 90deg;
    }
  }

  &__month {
    width: 17rem;
    text-align: center;
    font-size: 2rem;
  }
}
</style>
