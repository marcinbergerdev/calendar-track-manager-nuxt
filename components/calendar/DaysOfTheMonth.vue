<template>
  <Transition :name="monthAnimationName" mode="out-in">
    <ul class="days-list" :key="currentMonth.month()">
      <li
        v-for="{ isActive, isCurrent, id, day, weekdayId } in calculateDaysInMonth"
        :key="id"
      >
        <BaseButton
          mode="border-calendar-day"
          class="days-list__day"
          :class="setClasses(id, isActive, isCurrent, weekdayId)"
          @click="selectDayAndOpenEditor(id, day, weekdayId)"
        >
          {{ day }}
        </BaseButton>
      </li>
    </ul>
  </Transition>

  <CalendarDayEditor></CalendarDayEditor>
</template>

<script setup lang="ts">
import { Dayjs } from "dayjs";
import { Day } from "@/types/Date";

const dayjs = useDayjs();
const isEditor = useEditorVisibility();
const monthAnimationName = useMonthAnimationName();
const selectedDayId = useSelectedDayId();

const { previousMonth, currentMonth, nextMonth } = defineProps<{
  previousMonth: Dayjs;
  currentMonth: Dayjs;
  nextMonth: Dayjs;
}>();

const selectDayAndOpenEditor = (id: string, day: number, weekdayId: number) => {
  isEditor.value = !isEditor.value;
  selectedDayId.value = id;
};

const setClasses = computed(() => {
  return (id: string, isActive: boolean, isCurrent: boolean, weekdayId: number) => {
    const classes = [];
    const lastWeekdayId = 7;

    if (!isActive) {
      classes.push("inactive-day");
    }

    if (weekdayId === lastWeekdayId) {
      classes.push("active-weekdays");
    }

    if (isCurrent) {
      classes.push("active-current-day");
    }

    if (selectedDayId.value === id) {
      classes.push("selected-day");
    }

    return classes;
  };
});

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
      isActive: isActive,
      isCurrent: isCurrent,
      id: id,
      day: day,
      weekdayId: selectedWeekDayId,
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

  &__day {
    display: grid;
    place-items: center;
    width: 100%;
    height: 2.9rem;
    font-size: 1.6rem;

    @media (width >= 370px) {
      height: 3.5rem;
      font-size: 2rem;
    }

    @media (width >= 768px) {
      height: 4.2rem;
    }
  }
}

.active-weekdays {
  color: var(--red);
}

.inactive-day {
  opacity: 0.4;
}

.active-current-day {
  background-color: var(--text-clr);
  color: var(--black);
}

.selected-day {
  @media (width >= 768px) {
    box-shadow: 0px 0px 8px rgba(#fff, 0.8);
    border: 2px solid var(--text-clr);
  }
}
</style>
