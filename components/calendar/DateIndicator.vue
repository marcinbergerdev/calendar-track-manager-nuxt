<template>
  <header class="calendar-header">
    <h2 class="calendar-current-date">
      {{ extractedDate.day }} {{ extractedDate.name }}
    </h2>

    <div class="calendar-selector">
      <BaseButton class="calendar-selector__button previous" @click="setPreviousMonth">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
          <path
            fill="currentColor"
            d="M8.2 751.4c0 8.6 3.4 17.401 10 24.001c13.2 13.2 34.8 13.2 48 0l451.8-451.8l445.2 445.2c13.2 13.2 34.8 13.2 48 0s13.2-34.8 0-48L542 251.401c-13.2-13.2-34.8-13.2-48 0l-475.8 475.8c-6.8 6.8-10 15.4-10 24.2z"
          />
        </svg>
      </BaseButton>

      <Transition :name="animationName" mode="out-in">
        <span class="calendar-selector__month" :key="extractedDate.monthId"
          >{{ extractedDate.month }} {{ extractedDate.year }}</span
        >
      </Transition>

      <BaseButton class="calendar-selector__button next" @click="setNextMonth">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
          <path
            fill="currentColor"
            d="M8.2 751.4c0 8.6 3.4 17.401 10 24.001c13.2 13.2 34.8 13.2 48 0l451.8-451.8l445.2 445.2c13.2 13.2 34.8 13.2 48 0s13.2-34.8 0-48L542 251.401c-13.2-13.2-34.8-13.2-48 0l-475.8 475.8c-6.8 6.8-10 15.4-10 24.2z"
          />
        </svg>
      </BaseButton>
    </div>
  </header>
</template>

<script setup lang="ts">
import { Dayjs } from "dayjs";
import { Extracted } from "@/types/Date";

const dayjs = useDayjs();

const emit = defineEmits<{
  previous: [];
  next: [];
}>();

const { updatedDate } = defineProps<{
  updatedDate: Dayjs;
}>();

const animationName = ref("");

const extractedDate = computed<Extracted>(() => {
  return {
    monthId: updatedDate.month(),
    day: dayjs().format("DD"),
    name: dayjs().format("dddd"),
    month: updatedDate.format("MMMM"),
    year: updatedDate.format("YYYY"),
  };
});

const setPreviousMonth = () => {
  animationName.value = "previous";
  emit("previous");
};

const setNextMonth = () => {
  animationName.value = "next";
  emit("next");
};
</script>

<style scoped lang="scss">
.previous-enter-from,
.next-leave-to {
  transform: translateX(2rem);
  opacity: 0;
}

.previous-leave-to,
.next-enter-from {
  transform: translateX(-2rem);
  opacity: 0;
}

.previous-enter-to,
.previous-leave-from,
.next-enter-to,
.next-leave-from {
  transform: translateX(0rem);
  opacity: 1;
}

.previous-enter-active,
.previous-leave-active,
.next-enter-active,
.next-leave-active {
  transition: 0.22s ease-in-out;
}

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
  gap: 0 1rem;
  overflow: hidden;

  &__button {
    width: 3rem;
    height: 3rem;
    color: var(--text-clr);

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
