<template>
  <ClientOnly>
    <div class="calendar-wrapper">
      <section class="calendar-container">
        <CalendarDateIndicator :updated-date="updateCurrentDate"></CalendarDateIndicator>

        <div class="calendar-days">
          <CalendarDaysWeekdays></CalendarDaysWeekdays>

          <CalendarDaysContainer
            :previous-month="updatePreviousDate"
            :current-month="updateCurrentDate"
            :next-month="updateNextDate"
          ></CalendarDaysContainer>
        </div>
      </section>
    </div>
  </ClientOnly>
</template>

<script setup lang="ts">
const dateSelector = useSelectedData();
const dayjs = useDayjs();

const updatePreviousDate = computed(() => {
  const monthCounter = -1;
  const previousMonth = updateDate(monthCounter);
  return previousMonth;
});

const updateCurrentDate = computed(() => {
  const monthCounter = 0;
  const currentMonth = updateDate(monthCounter);
  return currentMonth;
});

const updateNextDate = computed(() => {
  const monthCounter = 1;
  const nextMonth = updateDate(monthCounter);
  return nextMonth;
});

const updateDate = (monthCounter: number) => {
  const date = dateSelector.value;
  return setDate(date.year, date.month, monthCounter);
};

const setDate = (year: number, month: number, monthCounter: number) => {
  return dayjs().set("year", year).set("month", month).add(monthCounter, "month");
};

const setCurrentDate = () => {
  dateSelector.value.year = dayjs().year();
  dateSelector.value.month = dayjs().month();
};

onMounted(() => {
  setCurrentDate();
});
</script>

<style scoped lang="scss">
.calendar-wrapper {
  display: grid;
  place-items: center;
  padding: 3rem 0;
  height: 100%;
  overflow: auto;
}

.calendar-container {
  padding: 2rem 0.9rem;
  width: min(70rem, 95%);

  color: var(--text-clr);
  background-color: var(--primary-clr);
  border-radius: 2rem;

  @media (width >= 350px) {
    padding: 2.5rem 3.5rem;
    border-radius: 4rem;
  }

  @media (width >= 950px) {
    position: relative;
  }
}

.calendar-days {
  width: min(40rem, 100%);
  margin: 0 auto;
}
</style>
