<template>
  <header class="calendar-header">
    <h2 class="calendar-current-date">
      {{ extractedDate.day }} {{ extractedDate.name }}
    </h2>

    <div class="calendar-selector">
      <button class="calendar-selector__button previous" @click="emit('previous')">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
          <path
            fill="currentColor"
            d="M8.2 751.4c0 8.6 3.4 17.401 10 24.001c13.2 13.2 34.8 13.2 48 0l451.8-451.8l445.2 445.2c13.2 13.2 34.8 13.2 48 0s13.2-34.8 0-48L542 251.401c-13.2-13.2-34.8-13.2-48 0l-475.8 475.8c-6.8 6.8-10 15.4-10 24.2z"
          />
        </svg>
      </button>

      <Transition name="fade">
        <span class="calendar-selector__month" :key="extractedDate.month">{{ extractedDate.month }} {{ extractedDate.year }}</span>
      </Transition>

      <button class="calendar-selector__button next" @click="emit('next')">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
          <path
            fill="currentColor"
            d="M8.2 751.4c0 8.6 3.4 17.401 10 24.001c13.2 13.2 34.8 13.2 48 0l451.8-451.8l445.2 445.2c13.2 13.2 34.8 13.2 48 0s13.2-34.8 0-48L542 251.401c-13.2-13.2-34.8-13.2-48 0l-475.8 475.8c-6.8 6.8-10 15.4-10 24.2z"
          />
        </svg>
      </button>
    </div>
  </header>
</template>

<script setup lang="ts">
import { Extracted } from "@/types/Date";

const dayjs = useDayjs();

const emit = defineEmits<{
  previous: [];
  next: [];
}>();

const { updatedDate } = defineProps<{
  updatedDate: any;
}>();

const extractedDate = computed<Extracted>(() => {
  const dateGroup: Extracted = {
    day: dayjs().format("DD"),
    name: dayjs().format("dddd"),
    month: updatedDate.format("MMMM"),
    year: updatedDate.format("YYYY"),
  };
  return dateGroup;
});
</script>

<style scoped lang="scss">
.fade-enter-from{
  overflow: hidden;
  transform: translateX(-120px);
}
.fade-enter-active{
  transition: 1s ease-in-out;
}
.fade-enter-to{
  overflow: hidden;
  transform: translateX(120px);

}

.fade-leave-from{

}
.fade-leave-active {

}
.fade-leave-to{

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
  position: relative;
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
    position: absolute;
      left: 0;
      top: 0;
    display: block;
    width: 17rem;
    text-align: center;
    font-size: 2rem;
  }
}
</style>
