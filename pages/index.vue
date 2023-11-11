<template>
  <ClientOnly>
    <section class="calendar-container">
      <CalendarDateIndicator></CalendarDateIndicator>

      <div>
        <CalendarWeekdays></CalendarWeekdays>

        <CalendarDaysOfTheMonth></CalendarDaysOfTheMonth>
      </div>
    </section>
  </ClientOnly>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.calendar-container {
  display: flex;
  flex-direction: column;

  padding: 2.5rem 3.5rem;
  width: min(80rem, 90%);
  height: 50rem;
  
  color: var(--text-clr);
  background-color: var(--primary-clr);
  border-radius: 4rem;
}
</style>
