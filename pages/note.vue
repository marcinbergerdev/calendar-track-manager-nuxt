<template>
  <div class="notes-wrapper">
    <NotesSortingButtons />
    <NotesContainer></NotesContainer>
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
