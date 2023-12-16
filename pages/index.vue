<template>
  <ClientOnly>
    <section class="calendar-container">
      <CalendarDateIndicator
        @previous="setPreviousMonth"
        @next="setNextMonth"
        :updated-date="updateCurrentData"
      ></CalendarDateIndicator>

      <div class="calendar-days">
        <CalendarWeekdays></CalendarWeekdays>

        <CalendarDaysOfTheMonth
          :previous-month="updatePreviousData"
          :current-month="updateCurrentData"
          :next-month="updateNextData"
        ></CalendarDaysOfTheMonth>
      </div>
    </section>
  </ClientOnly>
</template>

<script setup lang="ts">
const dateSelector = useSelectedData();

const dayjs = useDayjs();

const updatePreviousData = computed(() => {
  const date = dateSelector.value;
  const monthCounter = -1;
  return updateDate(date.year, date.month, monthCounter);
});

const updateCurrentData = computed(() => {
  const date = dateSelector.value;
  const monthCounter = 0;
  return updateDate(date.year, date.month, monthCounter);
});

const updateNextData = computed(() => {
  const date = dateSelector.value;
  const monthCounter = 1;
  return updateDate(date.year, date.month, monthCounter);
});

const updateDate = (year: number | null, month: number, monthCounter: number) => {
  if (!!year) {
    return setDateFromSelector(year, month, monthCounter);
  }
  return changeDate(monthCounter, month);
};

const setDateFromSelector = (year: number, month: number, monthCounter: number) => {
  return dayjs().set("year", year).set("month", month).add(monthCounter, "month");
};

const changeDate = (monthCounter: number, month: number) => {
  return dayjs().add(monthCounter + month, "month");
};

const setPreviousMonth = () => {
  changeMonth(-1);
};

const setNextMonth = () => {
  changeMonth(1);
};

const changeMonth = (increment: number) => {
  dateSelector.value.month += increment;
};
</script>

<style scoped lang="scss">
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
}

.calendar-days {
  width: min(40rem, 100%);
  margin: 0 auto;
}
</style>
