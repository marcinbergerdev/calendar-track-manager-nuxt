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
import { Day } from "@/types/Date";

const dayjs = useDayjs();

const { previousMonth, currentMonth, nextMonth } = defineProps<{
  previousMonth: any;
  currentMonth: object;
  nextMonth: any;
}>();

const calculateDaysInMonth = computed(() => {
  let days: Day[] = [];

  const selectedPreviousDays = selectPreviousDays(previousMonth);
  const selectedCurrenDays = selectCurrentDays(currentMonth);
  const selectedNextDays = selectNextDays(
    selectedPreviousDays.length,
    selectedCurrenDays.length,
    nextMonth
  );

  days.push(...selectedPreviousDays, ...selectedCurrenDays, ...selectedNextDays);
  return days;
});

const setDays = (
  month: any,
  daysInMonth: number,
  startingDay: number,
  isActive: boolean
) => {
  let days: Day[] = [];

  for (let d = startingDay; d <= daysInMonth; d++) {
    const dayId = month.date(d);
    const id = dayId.format("YYYY-MM-DD");
    const day = dayId.format("D");
    const selectedWeekDayId = setWeekdayId(dayId);

    days.push({
      isActive: isActive,
      id: id,
      day: day,
      weekdayId: selectedWeekDayId,
    });
  }
  return days;
};

const setWeekdayId = (id: number) => {
  const weekdayId = dayjs(id).day();
  const dayId = weekdayId <= 0 ? 7 : weekdayId;
  return dayId;
};

const selectPreviousDays = (previousMonth: any) => {
  const lastDayOfMonthId = previousMonth.endOf("month").day();
  const daysInMonth: number = previousMonth.daysInMonth();
  const startingDay: number = daysInMonth - lastDayOfMonthId + 1;
  const isActive: boolean = false;

  const selectedDays = setDays(previousMonth, daysInMonth, startingDay, isActive);
  return selectedDays;
};

const selectCurrentDays = (currentMonth: any) => {
  const daysInMonth: number = currentMonth.daysInMonth();
  const startingDay: number = 1;
  const isActive: boolean = true;

  const selectedDays = setDays(currentMonth, daysInMonth, startingDay, isActive);
  return selectedDays;
};

const selectNextDays = (previousMonth: number, currentMonth: number, nextMonth: any) => {
  const allDays = 42;
  const daysInMonth: number = allDays - (previousMonth + currentMonth);
  const startingDay: number = 1;
  const isActive: boolean = false;

  const selectedDays = setDays(nextMonth, daysInMonth, startingDay, isActive);
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
