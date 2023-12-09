<template>
  <div class="date-selector-container">
    <ul class="month-selector-list">
      <li class="month-element" v-for="(month, id) in selectedMonth" :key="id">
        <span> {{ month }} </span>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
const dayjs = useDayjs();

const selectedMonth = computed<string[]>(() => {
  return dayjs.monthsShort();
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

  background-color: var(--primary-clr);
  border: 1px solid var(--text-clr);
  border-radius: 1rem;
}

.month-selector-list {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 1fr);
  padding: 0.5rem;
  height: 100%;
  border-radius: 1rem;
}

.month-element {
  display: grid;
  place-items: center;
  width: 100%;
  height: 100%;
  font-size: 1.2rem;
  font-weight: 600;

  &:hover {
    background-color: var(--text-clr);
    color: var(--primary-clr);
    cursor: pointer;
  }
}
</style>
