<template>
  <ul class="weeks-list">
    <li class="weeks-list__week" v-for="(day, id) in calculatedWeekdays" :key="id">
      {{ day }}
    </li>
  </ul>
</template>

<script setup lang="ts">
const dayjs = useDayjs();

const calculatedWeekdays = computed<string[]>(() => {
  const originalWeekdays: string[] = dayjs.weekdaysMin(true);
  const version = "en";
  const isEnglishVersion = dayjs.locale() === version;

  return isEnglishVersion
    ? moveSundayToLastElement([...originalWeekdays])
    : originalWeekdays;
});

const moveSundayToLastElement = (weekdays: string[]) => {
  const sundayShortName = "Su";
  const extractedDay = weekdays.shift() || sundayShortName;

  weekdays.push(extractedDay);
  return weekdays;
};
</script>

<style scoped lang="scss">
.weeks-list {
  display: grid;
  grid-template-columns: repeat(7, 1fr);

  margin-top: 5rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid var(--text-clr);

  &__week {
    justify-self: center;
    font-size: 1.4rem;

    @media (width > 300px) {
      font-size: 1.8rem;
    }
  }
}
</style>
