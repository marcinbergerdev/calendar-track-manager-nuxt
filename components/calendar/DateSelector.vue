<template>
  <div class="date-selector-container" v-if="false">
    <ul class="month-selector-list" v-if="false">
      <li class="month-element" v-for="(month, id) in selectedMonth" :key="id">
        <span> {{ month }} </span>
      </li>
    </ul>

    <ul class="year-selector-list" v-else ref="years">
      <li class="year-element" v-for="(year, id) in selectListOfYear" :key="id">
        <span> {{ year }} </span>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
const dayjs = useDayjs();

const selectedMonth = computed<string[]>(() => {
  return dayjs.monthsShort();
});

const selectListOfYear = computed(() => {
  const yearDifference = 100;
  const firstYear = dayjs().year() - yearDifference;
  const lastYear = dayjs().year() + yearDifference;
  const selectedYears: number[] = [];

  for (let year = firstYear; year <= lastYear; year++) {
    selectedYears.push(year);
  }


  return selectedYears;
});
</script>

<style scoped lang="scss">
.date-selector-container {
  position: absolute;
  top: 4rem;
  left: 50%;
  translate: -50%;
  z-index: 10;

  width: 70%;
  height: 15rem;
  overflow-y: auto;

  background-color: var(--primary-clr);
  border: 2px solid var(--text-clr);
  border-radius: 0.7rem;
}

.month-selector-list,
.year-selector-list {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding: 0.5rem;
  height: 100%;
  border-radius: 1rem;
}

.month-selector-list {
  grid-template-columns: repeat(4, 1fr);
}
.year-selector-list {
  grid-template-columns: repeat(3, 1fr);
}

.month-element,
.year-element {
  display: grid;
  place-items: center;
  font-size: 1.2rem;

  &:hover {
    font-weight: 600;
    color: var(--primary-clr);
    background-color: var(--text-clr);
    cursor: pointer;
  }
}

.year-element {
  padding: 1rem;
}

.active-year {
  font-weight: 600;
  color: var(--primary-clr);
  background-color: var(--text-clr);
  cursor: pointer;
}
</style>
