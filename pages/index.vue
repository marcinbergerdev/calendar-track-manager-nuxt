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

  padding: 2rem 0.9rem;
  width: min(70rem, 95%);
  height: 45rem;
  
  color: var(--text-clr);
  background-color: var(--primary-clr);
  border-radius: 2rem;

  @media (width >= 350px) {
    padding: 2.5rem 3.5rem;
    border-radius: 4rem;
  }
}
</style>
