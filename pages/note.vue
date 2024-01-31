<template>
  <div class="notes-wrapper">
    <NuxtErrorBoundary>
      <NotesTasks />

      <template #error="{ error }">
        <ErrorNotesMessage
          view="error-tasks-container"
          :error="error"
          :is-close-button="false"
        ></ErrorNotesMessage>
      </template>
    </NuxtErrorBoundary>
  </div>
</template>

<style scoped lang="scss">
.notes-wrapper {
  padding: 2rem 1rem;
  width: 100%;
  height: 100%;
  overflow: auto;

  &::-webkit-scrollbar {
    width: 0.8rem;
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--primary-clr);
  }
}

.notes-error-container {

}
</style>
