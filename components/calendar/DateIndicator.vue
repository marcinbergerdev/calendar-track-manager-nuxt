<template>
  <header class="calendar-header">
    <h2 class="calendar-current-date">
      {{ extractedDate.day }} {{ extractedDate.name }}
    </h2>

    <section class="calendar-selector">
      <BaseButton class="calendar-selector__button previous" @click="setPreviousMonth">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
          <path
            fill="currentColor"
            d="M8.2 751.4c0 8.6 3.4 17.401 10 24.001c13.2 13.2 34.8 13.2 48 0l451.8-451.8l445.2 445.2c13.2 13.2 34.8 13.2 48 0s13.2-34.8 0-48L542 251.401c-13.2-13.2-34.8-13.2-48 0l-475.8 475.8c-6.8 6.8-10 15.4-10 24.2z"
          />
        </svg>
      </BaseButton>

      <Transition :name="monthAnimationName" mode="out-in">
        <BaseButton
          class="calendar-selector__month"
          :key="extractedDate.monthId"
          @click="openDateSelector"
          >{{ extractedDate.month }} {{ extractedDate.year }}</BaseButton
        >
      </Transition>

      <CalendarDateSelector></CalendarDateSelector>

      <BaseButton class="calendar-selector__button next" @click="setNextMonth">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
          <path
            fill="currentColor"
            d="M8.2 751.4c0 8.6 3.4 17.401 10 24.001c13.2 13.2 34.8 13.2 48 0l451.8-451.8l445.2 445.2c13.2 13.2 34.8 13.2 48 0s13.2-34.8 0-48L542 251.401c-13.2-13.2-34.8-13.2-48 0l-475.8 475.8c-6.8 6.8-10 15.4-10 24.2z"
          />
        </svg>
      </BaseButton>
    </section>
  </header>
</template>

<script setup lang="ts">
import { Dayjs } from "dayjs";
import { Extracted } from "@/types/Date";

const isDateSelector = useDateSelectorVisibility();
const monthAnimationName = useMonthAnimationName();
const dayjs = useDayjs();
const dateLang = dayjs.locale();

const emit = defineEmits<{
  previous: [];
  next: [];
}>();

const { updatedDate } = defineProps<{
  updatedDate: Dayjs;
}>();


const extractedDate = computed<Extracted>(() => {
  return {
    monthId: updatedDate.month(),
    day: dayjs().locale(dateLang).format("DD"),
    name: dayjs().locale(dateLang).format("dddd"),
    month: updatedDate.format("MMMM"),
    year: updatedDate.format("YYYY"),
  };
});

const setPreviousMonth = () => {
  monthAnimationName.value = "previous";
  emit("previous");
};

const setNextMonth = () => {
  monthAnimationName.value = "next";
  emit("next");
};

const openDateSelector = () => (isDateSelector.value = true);
</script>

<style scoped lang="scss">
.calendar-header {
  flex-direction: column;
  justify-content: center;
  gap: 3rem 0;

  @media (width >= 570px) {
    flex-direction: row;
    justify-content: space-between;
    gap: 0 2rem;
  }
}

.calendar-current-date {
  font-size: 3.3rem;
  font-weight: 400;
  text-align: center;
}

.calendar-selector {
  position: relative;
  gap: 0 1rem;

  &__button {
    width: 3rem;
    height: 3rem;
    z-index: 5;

    &.previous {
      rotate: -90deg;
    }
    &.next {
      rotate: 90deg;
    }
  }

  &__month {
    display: block;
    width: 17rem;
    text-align: center;
    font-size: 2rem;
  }
}
</style>