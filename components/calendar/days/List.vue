<template>
  <Transition :name="monthAnimationName" mode="out-in">
    <ul class="days-list" :key="currentMonth.month()">

      <CalendarDaysItem
        v-for="{
          id,
          day,
          year,
          weekdayId,
          isActive,
          isCurrent,
          isEvent,
        } in calculateDaysInMonth"
        :key="id"
        :id="id"
        :day="day"
        :year="year"
        :weekdayId="weekdayId"
        :is-active="isActive"
        :is-current="isCurrent"
        :is-selected="id === editor.selectedDay.id"
        :is-event="isEvent"
      ></CalendarDaysItem>
      
    </ul>
  </Transition>

  <Component :is="showManagerOptions"></Component>
</template>

<script setup lang="ts">
import { Dayjs } from "dayjs";
import { Day, Events } from "@/types/Date";
import { useEditor } from "../../../store/useEditor";

const CalendarManagerEditor = resolveComponent("CalendarManagerEditor");
const CalendarManagerEvents = resolveComponent("CalendarManagerEvents");

const dayjs = useDayjs();
const monthAnimationName = useMonthAnimationName();
const dateSelector = useSelectedData();
const editor = useEditor();

const days = ref<Day[]>([]);

const { previousMonth, currentMonth, nextMonth } = defineProps<{
  previousMonth: Dayjs;
  currentMonth: Dayjs;
  nextMonth: Dayjs;
}>();

const showManagerOptions = computed(() => {
  if (editor.isEditor) return CalendarManagerEditor;
  if (editor.isEvents) return CalendarManagerEvents;
});

const calculateDaysInMonth = computed<Day[]>(() => {
  return days.value || [];
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
    const id = Number(dayId.format("YYYYMMDD"));
    const day = Number(dayId.format("D"));
    const year = Number(dayId.format("YYYY"));
    const selectedWeekDayId = setWeekdayId(dayId);
    const isCurrent = setCurrentDay(id);

    days.push({
      id: id,
      day: day,
      year: year,
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

const setCurrentDay = (id: number) => {
  const currentDate = Number(dayjs().format("YYYYMMDD"));
  return currentDate === id ? true : false;
};

const getUserSavedEvents = async (year: number) => {
  try {
    const response = await getUserListOfSavedEventsInSelectedYear(year);
    return response;
  } catch (err: any) {
    throw createError(err);
  }
};

const setClassToRecordedEvents = async (recordedEvents: Events) => {
  const eventsInMonth = days.value;
  const savedEvents = Object.keys(recordedEvents).map(Number);

  eventsInMonth.forEach((event) => {
    savedEvents.forEach((el) => {
      if (event.id === el) {
        event.isEvent = true;
      }
    });
  });

  return eventsInMonth;
};

watchEffect(async () => {
  const selectedPreviousDays = setPreviousDays(previousMonth);
  const selectedCurrenDays = setCurrentDays(currentMonth);
  const selectedNextDays = setNextDays(
    [...selectedPreviousDays, ...selectedCurrenDays],
    nextMonth
  );

  const selectedDays: Day[] = [
    ...selectedPreviousDays,
    ...selectedCurrenDays,
    ...selectedNextDays,
  ];

  days.value = selectedDays;
  if (!!editor.recordedEvents) setClassToRecordedEvents(editor.recordedEvents);
});

onMounted(async () => {
  const events = await getUserSavedEvents(dateSelector.value.year);
  editor.recordedEvents = events;
});
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
