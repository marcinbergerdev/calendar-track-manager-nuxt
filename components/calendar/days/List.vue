<template>
  <Transition :name="monthAnimationName" mode="out-in">
    <ul class="days-list" :key="currentMonth.month()">
      <CalendarDaysItem
        v-for="({id, day, weekdayId, isActive, isCurrent}) in calculateDaysInMonth"
        :key="id"
        :id="id"
        :day="day"
        :weekdayId="weekdayId"
        :is-active="isActive"
        :is-current="isCurrent"
        :is-selected="id === selectedDay"
        @select-day="selectDayAndOpenEditor"
      ></CalendarDaysItem>
    </ul>
  </Transition>

  <CalendarToolsEditor v-if="false"></CalendarToolsEditor>
  <CalendarToolsEventsList v-if="false"></CalendarToolsEventsList>
</template>

<script setup lang="ts">
import { Dayjs } from "dayjs";
import { Day } from "@/types/Date";

const dayjs = useDayjs();
const monthAnimationName = useMonthAnimationName();
const selectedDay = useSelectedDayId();


const selectDayAndOpenEditor = (id: string) => {
  selectedDay.value = id;
}














const { previousMonth, currentMonth, nextMonth } = defineProps<{
  previousMonth: Dayjs;
  currentMonth: Dayjs;
  nextMonth: Dayjs;
}>();

const calculateDaysInMonth = computed<Day[]>(() => {
  const selectedPreviousDays = setPreviousDays(previousMonth);
  const selectedCurrenDays = setCurrentDays(currentMonth);
  const selectedNextDays = setNextDays(
    [...selectedPreviousDays, ...selectedCurrenDays],
    nextMonth
  );

  const days: Day[] = [
    ...selectedPreviousDays,
    ...selectedCurrenDays,
    ...selectedNextDays,
  ];
  return days;
});

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

const setNextDays = (amountOfPreviousAndCurrentDays: Day[], nextMonth: Dayjs) => {
  const allDays: number = 42;
  const daysInMonth: number = allDays - amountOfPreviousAndCurrentDays.length;
  const startingDay: number = nextMonth.startOf("month").date();
  const isActive: boolean = false;

  const selectedDays: Day[] = setDays(nextMonth, daysInMonth, startingDay, isActive);
  return selectedDays;
};

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
    const day: number = Number(dayId.format("D"));
    const selectedWeekDayId: number = setWeekdayId(dayId);
    const isCurrent = setCurrentDay(id);

    days.push({
      id: id,
      day: day,
      weekdayId: selectedWeekDayId,
      isActive: isActive,
      isCurrent: isCurrent,
    });
  }
  return days;
};

const setWeekdayId = (day: Dayjs) => {
  const weekdayId: number = day.day();
  const dayId: number = weekdayId <= 0 ? 7 : weekdayId;
  return dayId;
};

const setCurrentDay = (id: string) => {
  const currentDate = dayjs().format("YYYY-MM-DD");
  return currentDate === id ? true : false;
};
</script>

<style scoped lang="scss">
.days-list {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(6, 1fr);
  gap: 0.8rem;
  margin: 2rem 0 4rem 0;

  @media (width >= 370px) {
    gap: 1.1rem;
  }
}
</style>
