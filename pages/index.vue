<template>
  <ClientOnly>
    <section class="calendar-container">
      <CalendarDateIndicator
        @previous="setPreviousMonth"
        @next="setNextMonth"
        :months-list="months"
        :date="date"
      ></CalendarDateIndicator>

      <div>
        <CalendarWeekdays :weekdays-list="weekdays"></CalendarWeekdays>

        <CalendarDaysOfTheMonth
          :selected-month="selectDaysInMonth"
        ></CalendarDaysOfTheMonth>
      </div>
    </section>
  </ClientOnly>
</template>

<script setup lang="ts">
import { Date, Month } from "@/types/Date";
import { uuid } from "vue-uuid";
import { useWeekDays, useMonthNames } from "~/composables/useState";

const dayjs = useDayjs();
const weekdays = useWeekDays();
const months = useMonthNames();

const date = reactive<Date>({
  id: dayjs().day(),
  day: dayjs().date(),
  week: dayjs().format("dddd"),
  month: dayjs().month(),
  year: dayjs().year(),
});
const { month, year } = toRefs(date);

const selectDaysInMonth = computed(() => {
  let days: Month[] = [];

  // days index = (1 - 31)  ,  week index  (0 - 6)   , month index = (0 - 11)
  const daysInLastMonth = dayjs(`${year.value}-${month.value}-01`).daysInMonth();
  const daysInCurrentMonth = dayjs(`${year.value}-${month.value + 1}-01`).daysInMonth();
  const daysInNextMonth = daysInCurrentMonth + setDayId(0, daysInLastMonth);

  const selectedLastMonth = selectLastMonth(daysInLastMonth);
  const selectedCurrentMonth = selectCurrentMonth(daysInCurrentMonth);
  const selectedNextMonth = selectNextMonth(daysInNextMonth);

  days.push(...selectedLastMonth, ...selectedCurrentMonth, ...selectedNextMonth);
  return days;
});

const setDayId = (increment: number, day: number) => {
  let dayId = dayjs(`${year.value}-${month.value + increment}-${day}`).day();
  dayId = dayId <= 0 ? 7 : dayId;
  return dayId;
};

const selectDays = (
  daysInMonth: number,
  increment: number,
  startingDay: number,
  inactive: boolean
) => {
  const daysList: Month[] = [];

  for (let day = startingDay; day <= daysInMonth; day++) {
    daysList.push({
      inactive: inactive,
      id: uuid.v1(),
      day: day,
      weekDayId: setDayId(increment, day),
    });
  }
  return daysList;
};

const selectLastMonth = (days: number) => {
  const dayId = setDayId(0, days);
  const monthIncrement = 0;
  const startingDay = days - dayId + 1;
  const inactive = true;
  const selectedDays = selectDays(days, monthIncrement, startingDay, inactive);

  return selectedDays;
};

const selectCurrentMonth = (days: number) => {
  const monthIncrement = 1;
  const startingDay = 1;
  const inactive = false;
  const selectedDays = selectDays(days, monthIncrement, startingDay, inactive);

  return selectedDays;
};

const selectNextMonth = (days: number) => {
  const allDaysInCalendar = 42;
  const daysOfNextMonth = allDaysInCalendar - days;
  const monthIncrement = 2;
  const startingDay = 1;
  const inactive = true;
  const selectedDays = selectDays(daysOfNextMonth, monthIncrement, startingDay, inactive);

  return selectedDays;
};

const changeDate = (update: number) => {
  const monthIdMin = 0;
  const monthIdMax = 11;

  month.value += update;

  if (month.value < monthIdMin) {
    --year.value;
    month.value = monthIdMax;
  } else if (month.value > monthIdMax) {
    ++year.value;
    month.value = monthIdMin;
  }
};

const setPreviousMonth = () => {
  changeDate(-1);
};

const setNextMonth = () => {
  changeDate(1);
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
