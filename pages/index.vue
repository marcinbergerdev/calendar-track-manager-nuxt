<template>
  <ClientOnly>
    <section class="calendar-container">
      <CalendarDateIndicator
        @previous="setPrevious"
        @next="setNext"
        :weekdays-list="weekdays"
        :months-list="months"
        :date="date"
      ></CalendarDateIndicator>

      <div>
        <CalendarWeekdays :weekdays-list="weekdays"></CalendarWeekdays>

        <CalendarDaysOfTheMonth :days-data="setDayIdAndDaysInMonth"></CalendarDaysOfTheMonth>
      </div>
    </section>
  </ClientOnly>
</template>

<script setup lang="ts">
import { Date } from "@/types/Date";

const dayjs = useDayjs();

const weekdays = ref<string[]>([
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
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

const date = reactive<Date>({
  id: dayjs().day(),
  day: dayjs().date(),
  month: dayjs().month(),
  year: dayjs().year(),
});
const { month, year } = toRefs(date);

const setDayIdAndDaysInMonth = computed(() => {
  const dayId = dayjs(`${year.value}-${month.value + 1}-01`).day();
  const daysInMonth = dayjs(`${year.value}-${month.value + 1}-01`).daysInMonth();

  return {
    startingWeeksDay: dayId,
    days: daysInMonth,
  };
});

const setPrevious = () => {
  if (month.value <= 0) {
    month.value = 11;
    --year.value;
    return;
  }
  --month.value;
};
const setNext = () => {
  if (month.value >= 11) {
    month.value = 0;
    ++year.value;
    return;
  }
  ++month.value;
};
</script>

<style scoped lang="scss">
.calendar-container {
  display: flex;
  flex-direction: column;

  padding: 2rem 0.9rem;
  width: min(70rem, 95%);
  height: 45rem;

  color: var(--text-clr);
  background-color: var(--primary-clr);
  border-radius: 2rem;

  @media (width >= 350px) {
    padding: 2.5rem 3.5rem;
    border-radius: 4rem;
  }
}
</style>
