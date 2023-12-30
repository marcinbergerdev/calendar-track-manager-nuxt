<template>
  <li class="day-container">
    <BaseButton
      mode="border-calendar-day"
      class="day-item"
      :class="setClasses"
      @click="$emit('select-day', id)"
    >
      {{ day }}
    </BaseButton>

    <CalendarToolsOptions v-if="isSelected"></CalendarToolsOptions>
  </li>
</template>

<script setup lang="ts">
const props = defineProps<{
  id: string;
  day: number;
  weekdayId: number;
  isActive: boolean;
  isCurrent: boolean;
  isSelected: boolean;
}>();
const { id, day, weekdayId, isActive, isCurrent, isSelected } = toRefs(props);

const setClasses = computed(() => {
  const classes = [];
  const lastWeekdayId = 7;

  if (!isActive.value) {
    classes.push("inactive-day");
  }

  if (weekdayId.value === lastWeekdayId) {
    classes.push("active-weekdays");
  }

  if (isCurrent.value) {
    classes.push("active-current-day");
  }

  if (isSelected.value) {
    classes.push("selected-day");
  }

  return classes;
});

onUpdated(() => {
  console.log("----");
  console.log("Update " + id.value);
  console.log("Update " + day.value);
  console.log("Update " + weekdayId.value);
  console.log("Update " + isActive.value);
  console.log("Update " + isCurrent.value);
  console.log("Update " + isSelected.value);
  console.log("----");
});
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

.selected-day {
  // @media (width >= 768px) {
  box-shadow: 0px 0px 8px rgba(#fff, 0.8);
  border: 2px solid var(--text-clr);
  // }
}
</style>
