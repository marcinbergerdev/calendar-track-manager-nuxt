<template>
  <li class="day-container">
    <BaseButton
      mode="border-calendar-day"
      class="day-item"
      :class="setClasses"
      @click="selectDay"
    >
      {{ day }}
    </BaseButton>

    <CalendarManagerOptions
      v-if="isSelected && editor.isEditorOptions"
    ></CalendarManagerOptions>
  </li>
</template>

<script setup lang="ts">
import { useEditor } from "../../../store/useEditor";
const editor = useEditor();

const {
  id,
  day,
  year,
  weekdayId,
  isActive,
  isCurrent,
  isSelected,
  isEvent,
} = defineProps<{
  id: number;
  day: number;
  year: number;
  weekdayId: number;
  isActive: boolean;
  isCurrent: boolean;
  isSelected: boolean;
  isEvent?: boolean;
}>();

const setClasses = computed(() => {
  const classes = [];
  const lastWeekdayId = 7;

  if (!isActive) {
    classes.push("inactive-day");
  }

  if (weekdayId === lastWeekdayId) {
    classes.push("active-weekdays");
  }

  if (isCurrent) {
    classes.push("active-current-day");
  }

  if (isSelected) {
    classes.push("selected-day");
  }

  if (isEvent) {
    classes.push("selected-day");
  }

  return classes;
});

const selectDay = () => {
  editor.toggleEditorAndSetDay(id, year);
};
</script>

<style scoped lang="scss">
.day-container {
  position: relative;
}

.day-item {
  display: grid;
  place-items: center;
  width: 100%;
  height: 2.9rem;
  font-size: 1.6rem;

  @media (width >= 370px) {
    height: 3.5rem;
    font-size: 2rem;
  }

  @media (width >= 768px) {
    height: 4.2rem;
  }
}

.active-weekdays {
  color: var(--red);
}

.inactive-day {
  opacity: 0.4;
}

.active-current-day {
  background-color: var(--text-clr);
  color: var(--black);
}

.event-day {
  box-shadow: 0px 0px 8px rgba(#197f8f, 0.8);
  border: 2px solid #197f8f;
}

.selected-day {
  box-shadow: 0px 0px 6px rgba(#fff, 0.8);
  border: 4px solid #000;
}
</style>
