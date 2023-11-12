<template>
  <ClientOnly>
    <section class="calendar-container">
      <CalendarDateIndicator
        @previous="setPrevious"
        @next="setNext"
        :selected-date="date"
      ></CalendarDateIndicator>

      <div>
        <CalendarWeekdays></CalendarWeekdays>

        <CalendarDaysOfTheMonth
          :days-of-the-month="setDaysInMonth"
        ></CalendarDaysOfTheMonth>
      </div>
    </section>
  </ClientOnly>
</template>

<script setup lang="ts">
import dayjs from "dayjs";

const date = reactive({
  year: dayjs().year(),
  month: dayjs().month(),
});
const { year, month } = toRefs(date);

const setDaysInMonth = computed(() => {
  return dayjs(`${year.value}-${month.value}-01`).daysInMonth();
});

const setPrevious = () => {
  if (month.value <= 0) {
    month.value = 11;
    year.value--;
    return;
  }

  month.value--;
};

const setNext = () => {
  if (month.value >= 11) {
    month.value = 0;
    year.value++;
    return;
  }
  month.value++;
};
</script>

<style scoped lang="scss">
.calendar-container {
  display: flex;
  flex-direction: column;

  padding: 2rem 0.9rem;
  width: min(70rem, 95%);
  height: 45rem;

  color: var(--text-clr);
  background-color: var(--primary-clr);
  border-radius: 2rem;

  @media (width >= 350px) {
    padding: 2.5rem 3.5rem;
    border-radius: 4rem;
  }
}
</style>
