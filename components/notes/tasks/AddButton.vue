<template>
  <section class="note-item-create">
    <BaseButton view="empty" class="note-create-button" @click="notes.openAndSetModal('editor')">
      <svg
        class="note-create-button__icon"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path fill="currentColor" d="M11.5 12.5H6v-1h5.5V6h1v5.5H18v1h-5.5V18h-1z" />
      </svg>
    </BaseButton>
  </section>
</template>

<script setup lang="ts">
import { useNotes } from '~/store/useNotes';
const notes = useNotes();
</script>

<style scoped lang="scss">
.note-item-create {
  display: flex;
  justify-content: center;
  margin: 4rem 0;

  @media (width >= 768px) {
    margin: 4rem 2rem;
    justify-content: flex-start;
  }
}

.note-create-button {
  display: flex;
  justify-content: center;

  width: min(30rem, 100%);
  border: 2px solid var(--text-clr);
  border-radius: 2rem;
  
  @media (width >= 768px) {
    width: 15rem;
    cursor: pointer;
  }
  
  &__icon {
    width: 4rem;
    height: 4rem;
  }
}
</style>
