<template>
  <div class="events-container">
    <NuxtErrorBoundary>
      <CalendarManagerEventsList />

      <template #error="{ error }">
        <ErrorMessage :error="error"></ErrorMessage>
      </template>
    </NuxtErrorBoundary>
  </div>
</template>

<style scoped lang="scss">
.events-container {
  position: absolute;
  top: 0;
  right: 0;
  z-index: 20;

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem 0;

  padding: 0 0.3rem;
  width: 100%;
  height: 100vh;
  background-color: var(--primary-clr);

  @media (width >= 950px) {
    top: 50%;
    right: -13%;
    z-index: 25;
    transform: translate(13%, -50%);

    width: 26rem;
    height: 40rem;
    border: 2px solid var(--bg-clr);
    border-radius: 1.5rem;
  }
}
</style>
