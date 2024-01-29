<template>
  <div class="notes-wrapper">
    <NotesSelector v-if="notes.isNoteSelector"></NotesSelector>
    
    <NotesSortingButtons />

    <NuxtErrorBoundary>
      <NotesTasks></NotesTasks>

      <template #error="{ error }">
        <ErrorNotesMessage :error="error" :is-close-button="false"></ErrorNotesMessage>
      </template>
    </NuxtErrorBoundary>
  </div>
</template>

<script setup lang="ts">
import { useNotes } from '@/store/useNotes';

const notes = useNotes();

</script>

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
