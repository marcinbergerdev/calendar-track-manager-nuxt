<template>
  <div class="date-selector-container" ref="selectorContainer" v-if="isDateSelector">
    <Transition name="selector" mode="out-in">
      <ul class="year-selector-list" v-if="!isYearOrMonthSelector">
        <li
          class="year-element"
          :class="isActiveYear(year)"
          v-for="(year, id) in selectListOfYear"
          :key="id"
          @click="setYearAndMoveToMonth(year)"
        >
          <span> {{ year }} </span>
        </li>
      </ul>

      <ul class="month-selector-list" v-else>
        <li
          class="month-element"
          v-for="(month, id) in selectedMonth"
          :key="id"
          @click="setMonth(id)"
        >
          <span> {{ month }} </span>
        </li>
      </ul>
    </Transition>
  </div>
</template>

<script setup lang="ts">
const dayjs = useDayjs();
const isDateSelector = useDateSelectorVisibility();
const setDate = useSelectedData();
const monthAnimationName = useMonthAnimationName();
const selectorContainer = ref<HTMLElement | null>(null);
const isYearOrMonthSelector = ref(false);
const newSelectedData = { month: 0, year: 0 };

const selectedMonth = computed<string[]>(() => {
  return dayjs.monthsShort();
});

const selectListOfYear = computed(() => {
  const yearDifference = 100;
  const firstYear = dayjs().year() - yearDifference;
  const lastYear = dayjs().year() + yearDifference;

  scrollToCurrentYear();

  const selectedYears = selectYears(firstYear, lastYear);
  return selectedYears;
});

const isActiveYear = computed(() => {
  return (year: number) => (year === dayjs().year() ? "active-year" : null);
});

const scrollToCurrentYear = () => {
  const containerElement = selectorContainer.value;
  const middleOfElement = 1425;

  containerElement?.scrollTo({
    top:
      (containerElement.scrollHeight - containerElement.clientHeight) / 2 ||
      middleOfElement,
  });
};

const selectYears = (firstYear: number, lastYear: number) => {
  const selectedYears: number[] = [];
  for (let year = firstYear; year <= lastYear; year++) {
    selectedYears.push(year);
  }
  return selectedYears;
};

const setYearAndMoveToMonth = (year: number) => {
  newSelectedData.year = year;
  isYearOrMonthSelector.value = true;
  setAnimationDirectionByDataUpdate(year);
};

const setAnimationDirectionByDataUpdate = (year: number) => {
  year >= dayjs().year()
    ? (monthAnimationName.value = "next")
    : (monthAnimationName.value = "previous");
};

const setMonth = (monthId: number) => {
  newSelectedData.month = monthId;
  setDate.value = { ...newSelectedData };
  closeDataSelector();
};

const closeDataSelector = () => {
  isDateSelector.value = false;
  isYearOrMonthSelector.value = false;
};
onClickOutside(selectorContainer, closeDataSelector);
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
  padding: 0.2rem 0 0.3rem 0.5rem;
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
  padding: 1.5rem 0;
}

.active-year {
  font-weight: 600;
  color: var(--primary-clr);
  background-color: var(--text-clr);
  cursor: pointer;
}
</style>
