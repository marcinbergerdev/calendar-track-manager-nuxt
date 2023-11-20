<template>
  <ClientOnly>
    <section class="calendar-container">
      <CalendarDateIndicator
        @previous="setPrevious"
        @next="setNext"
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
  let listOfDays: Month[] = [];

  const lastMonth = dayjs(`${year.value}-${month.value}-01`).daysInMonth(); // days in the last month
  const currentMonth = dayjs(`${year.value}-${month.value + 1}-01`).daysInMonth();
  const nextMonth = currentMonth + setDayId(0, lastMonth);

  const selectedLastMonth = selectLastMonth(lastMonth);
  const selectedCurrentMonth = selectCurrentMonth(currentMonth);
  const selectedNextMonth = selectNextMonth(nextMonth);

  listOfDays = [...selectedLastMonth, ...selectedCurrentMonth, ...selectedNextMonth];
  return listOfDays;
});

const setDayId = (increment: number, day: number) => {
  let dayId = dayjs(`${year.value}-${month.value + increment}-${day}`).day();
  dayId = dayId <= 0 ? 7 : dayId;
  return dayId;
};

const selectDays = (startingDay: number, month: number, monthId: number, inactive: boolean) => {
  const daysList: Month[] = [];

  for (let day = startingDay; day <= month; day++) {
    daysList.push({
      inactive: inactive,
      id: uuid.v1(),
      day: day,
      weekDayId: setDayId(monthId, day),
    });
  }
  return daysList;
};

const selectLastMonth = (lastMonth: number) => {
  const dayId = setDayId(0, lastMonth);
  const startingDay = lastMonth - dayId + 1;
  const monthId = 0;
  const inactive = true;

  const selectedDays = selectDays(startingDay, lastMonth, monthId, inactive);

  return selectedDays;
};

const selectCurrentMonth = (currentMonth: number) => {
  const startingDay = 1;
  const monthId = 1;
  const inactive = false;

  const selectedDays = selectDays(startingDay, currentMonth, monthId, inactive);

  return selectedDays;
};

const selectNextMonth = (currentDays: number) => {
  const allDays = 42;
  const daysOfNextMonth = allDays - currentDays;
  const startingDay = 1;
  const monthId = 2;
  const inactive = true;

  const selectedDays = selectDays(startingDay, daysOfNextMonth, monthId, inactive);
  return selectedDays;
};

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
