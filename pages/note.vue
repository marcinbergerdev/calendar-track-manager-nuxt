<template>
  <div class="notes-wrapper">
    <NotesSortingButtons />

    <NotesSelector></NotesSelector>

    <NuxtErrorBoundary>
      <NotesTasks></NotesTasks>

      <template #error="{ error }">
        <ErrorMessage :error="error" :is-close-button="false"></ErrorMessage>
      </template>
    </NuxtErrorBoundary>
  </div>
</template>

<script setup lang="ts"></script>

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
</style>
