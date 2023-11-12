<template>
  <header class="calendar-header">
    <h2 class="calendar-current-date">{{ day }} {{ selectDay }}</h2>

    <div class="calendar-selector">
      <button class="calendar-selector__button previous" @click="$emit('previous')">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
          <path
            fill="currentColor"
            d="M8.2 751.4c0 8.6 3.4 17.401 10 24.001c13.2 13.2 34.8 13.2 48 0l451.8-451.8l445.2 445.2c13.2 13.2 34.8 13.2 48 0s13.2-34.8 0-48L542 251.401c-13.2-13.2-34.8-13.2-48 0l-475.8 475.8c-6.8 6.8-10 15.4-10 24.2z"
          />
        </svg>
      </button>

      <span class="calendar-selector__month">{{ selectMonth }} {{ selectYear }}</span>

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
import dayjs from "dayjs";

interface Date {
  dayId: number;
  day: number;
}

const emit = defineEmits<{
  previous: [];
  next: [];
}>();

const props = defineProps<{
  selectedDate: any;
}>();

const weekdays = ref<string[]>([
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
]);

const months = ref<string[]>([
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
]);

const { dayId, day }: Date = reactive({
  dayId: dayjs().day(),
  day: dayjs().date(),
});

const selectDay = computed(() => {
  return weekdays.value[dayId];
});

const selectMonth = computed(() => {
  return months.value[props.selectedDate.month];
});

const selectYear = computed(() => {
  return props.selectedDate.year;
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
