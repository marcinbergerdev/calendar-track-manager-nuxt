<template>
  <ClientOnly>
    <section class="calendar-container">
      <CalendarDateIndicator
        @previous="setPreviousMonth"
        @next="setNextMonth"
        :updated-date="updateCurrentDate"
      ></CalendarDateIndicator>

      <div class="calendar-days">
        <CalendarWeekdays></CalendarWeekdays>

        <CalendarDaysOfTheMonth
          :previous-month="updatePreviousMonth"
          :current-month="updateCurrentDate"
          :next-month="updateNextMonth"
        ></CalendarDaysOfTheMonth>
      </div>
    </section>
  </ClientOnly>
</template>

<script setup lang="ts">
const dayjs = useDayjs();
const monthCounter = ref(0);

const updatePreviousMonth = computed(() => {
  const monthQuantity = 1;
  return dayjs().add(monthCounter.value - monthQuantity, "month"); 
});
const updateCurrentDate = computed(() => {
  return dayjs().add(monthCounter.value, "month");
});
const updateNextMonth = computed(() => {
  const monthQuantity = 1;
  return dayjs().add(monthCounter.value + monthQuantity, "month");
});

const changeDate = (increment: number) => {
  monthCounter.value += increment;
};

const setPreviousMonth = () => {
  changeDate(-1);
};

const setNextMonth = () => {
  changeDate(1);
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
