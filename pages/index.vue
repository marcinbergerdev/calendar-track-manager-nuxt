<template>
  <ClientOnly>
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
  </ClientOnly>
</template>

<script setup lang="ts">
const dateSelector = useSelectedData();
const dayjs = useDayjs();

const updatePreviousDate = computed(() => {
  const monthCounter = -1;
  return updateDate(monthCounter);
});

const updateCurrentDate = computed(() => {
  const monthCounter = 0;
  const currentMonth = updateDate(monthCounter);

  dateSelector.value.month = currentMonth.month();
  dateSelector.value.year = currentMonth.year();

  return currentMonth;
});

const updateNextDate = computed(() => {
  const monthCounter = 1;
  return updateDate(monthCounter);
});

const updateDate = (monthCounter: number) => {
  const date = dateSelector.value;
  if (!!date.year) {
    return setDateFromSelector(date.year, date.month, monthCounter);
  }
  return setDate(monthCounter, date.month);
};

const setDateFromSelector = (year: number, month: number, monthCounter: number) => {
  return dayjs().set("year", year).set("month", month).add(monthCounter, "month");
};

const setDate = (monthCounter: number, month: number) => {
  return dayjs().add(monthCounter + month, "month");
};

onMounted(() => {
  dateSelector.value.year = dayjs().year();
});
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

  @media (width >= 950px) {
    position: relative;
  }
}

.calendar-days {
  width: min(40rem, 100%);
  margin: 0 auto;
}
</style>
