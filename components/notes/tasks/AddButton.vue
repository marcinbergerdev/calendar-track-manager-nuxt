<template>
  <li class="note-item-create">

    <BaseButton view="empty" class="note-create-button" @click="openNoteSelector">
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
    
  </li>
</template>

<script setup lang="ts">
import { useNotes } from '@/store/useNotes';

const notes = useNotes();

const openNoteSelector = () => {
  notes.isNoteSelector = true;
}
</script>

<style scoped lang="scss">
.note-item-create {
  width: min(30rem, 90%);


}

.note-create-button {
  display: grid;
  place-items: center;
  
  width: 100%;
  border: 2px solid var(--text-clr);
  border-radius: 2rem;

  @media (width >= 670px) {

    padding: 1rem 1.5rem;
    height: 35rem;
    border-radius: 2.5rem;
    cursor: pointer;
  }

  &__icon {
    font-size: 2rem;
    width: 5rem;
    height: 5rem;

    @media (width >= 670px) {
      width: 10rem;
      height: 10rem;
    }
  }
}
</style>
