<template>
  <ul class="days-list">
    <li
      v-for="{ isActive, id, day, weekdayId } in calculateDaysInMonth"
      class="days-list__day"
      :class="{
        isActive: !isActive,
        weekdays: weekdayId === 7 ? true : false,
      }"
      :key="id"
    >
      {{ day }}
    </li>
  </ul>
</template>

<script setup lang="ts">
import { Dayjs } from "dayjs";
import { Day } from "@/types/Date";

const dayjs = useDayjs();

const { previousMonth, currentMonth, nextMonth } = defineProps<{
  previousMonth: Dayjs;
  currentMonth: Dayjs;
  nextMonth: Dayjs;
}>();

const calculateDaysInMonth = computed<Day[]>(() => {
  let days: Day[] = [];

  const selectedPreviousDays = setPreviousDays(previousMonth);
  const selectedCurrenDays = setCurrentDays(currentMonth);
  const selectedNextDays = setNextDays(
    selectedPreviousDays.length,
    selectedCurrenDays.length,
    nextMonth
  );

  days.push(...selectedPreviousDays, ...selectedCurrenDays, ...selectedNextDays);
  return days;
});

const setDays = (
  month: Dayjs,
  daysInMonth: number,
  startingDay: number,
  isActive: boolean
) => {
  let days: Day[] = [];


  for (let d = startingDay; d <= daysInMonth; d++) {
    const dayId: Dayjs = month.date(d);
    const id: string = dayId.format("YYYY-MM-DD");
    const day: string = dayId.format("D");
    const selectedWeekDayId: number = setWeekdayId(dayId);

    days.push({
      isActive: isActive,
      id: id,
      day: day,
      weekdayId: selectedWeekDayId, 
    });
  }
  return days;
};

const setWeekdayId = (day: Dayjs) => {
  const weekdayId: number = dayjs(day).day();
  const dayId: number = weekdayId <= 0 ? 7 : weekdayId;
  return dayId;
};

const setPreviousDays = (previousMonth: Dayjs) => {
  const lastDayOfMonthId: number = previousMonth.endOf("month").day();
  const daysInMonth: number = previousMonth.daysInMonth();
  const startingDay: number = daysInMonth - lastDayOfMonthId + 1;
  const isActive: boolean = false;

  const selectedDays: Day[] = setDays(previousMonth, daysInMonth, startingDay, isActive);
  return selectedDays;
};

const setCurrentDays = (currentMonth: Dayjs) => {
  const daysInMonth: number = currentMonth.daysInMonth();
  const startingDay: number = 1;
  const isActive: boolean = true;

  const selectedDays: Day[] = setDays(currentMonth, daysInMonth, startingDay, isActive);
  return selectedDays;
};

const setNextDays = (
  amountOfPreviousDays: number,
  amountOfCurrentDays: number,
  nextMonth: Dayjs
) => {
  const allDays:number  = 42;
  const daysInMonth: number = allDays - (amountOfPreviousDays + amountOfCurrentDays);
  const startingDay: number = 1;
  const isActive: boolean = false;

  const selectedDays: Day[] = setDays(nextMonth, daysInMonth, startingDay, isActive);
  return selectedDays;
};
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

.weekdays {
  color: var(--red);
}

.isActive {
  opacity: 0.3;
}
</style>
