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
  const selectedPreviousDays = setPreviousDays(previousMonth);
  const selectedCurrenDays = setCurrentDays(currentMonth);
  const selectedNextDays = setNextDays(
    selectedPreviousDays.length,
    selectedCurrenDays.length,
    nextMonth
  );

  const days: Day[] = [
    ...selectedPreviousDays,
    ...selectedCurrenDays,
    ...selectedNextDays,
  ];
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
  const lastDayOfWeekId: number = previousMonth.endOf("month").day();
  const daysInMonth: number = previousMonth.daysInMonth();
  const startingDay: number = daysInMonth - lastDayOfWeekId + 1;
  const isActive: boolean = false;

  const selectedDays: Day[] = setDays(previousMonth, daysInMonth, startingDay, isActive);
  return selectedDays;
};

const setCurrentDays = (currentMonth: Dayjs) => {
  const daysInMonth: number = currentMonth.daysInMonth();
  const startingDay: number = currentMonth.startOf("month").date();
  const isActive: boolean = true;

  const selectedDays: Day[] = setDays(currentMonth, daysInMonth, startingDay, isActive);
  return selectedDays;
};

const setNextDays = (
  amountOfPreviousDays: number,
  amountOfCurrentDays: number,
  nextMonth: Dayjs
) => {
  const allDays: number = 42;
  const daysInMonth: number = allDays - (amountOfPreviousDays + amountOfCurrentDays);
  const startingDay: number = nextMonth.startOf("month").date();
  const isActive: boolean = false;

  const selectedDays: Day[] = setDays(nextMonth, daysInMonth, startingDay, isActive);
  return selectedDays;
};
</script>

<style scoped lang="scss">
.days-list {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(7, 1fr);
  gap: 1.1rem;
  margin-top: 2rem;

  &__day {
    display: grid;
    place-items: center;
    height: 2.9rem;
    font-size: 1.4rem;
    border-radius: 0.5rem;
    border: 1px solid var(--text-clr);

    @media (width >= 570px) {
      height: 4.2rem;
      font-size: 2rem;
      border-radius: 1.3rem;
    }

    @media (width >= 768px) {
      &:hover {
        box-shadow: 0px 0px 8px rgba(#fff, 0.8);
        border: 2px solid var(--text-clr);
        cursor: pointer;
      }
    }
  }
}

.weekdays {
  color: var(--red);
}

.isActive {
  opacity: 0.4;
}
</style>
