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

        <CalendarDaysOfTheMonth
          :days-of-the-month="setDaysInMonth"
        ></CalendarDaysOfTheMonth>
      </div>
    </section>
  </ClientOnly>
</template>

<script setup lang="ts">
import dayjs from "dayjs";
import { Date } from '@/types/Date'


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
const { id, day, month, year } = toRefs(date);

const setDaysInMonth = computed(() => {
  // console.log(month.value);
  const dayId = dayjs().month(month.value).year(year.value);

  const setDay = {
    start: dayId.date(1).day(),
    amountOfDays: dayjs(`${year.value}-${day.value}-01`).daysInMonth(),
  };

  return setDay;
});

const setPrevious = () => {
  if (date.month <= 0) {
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
