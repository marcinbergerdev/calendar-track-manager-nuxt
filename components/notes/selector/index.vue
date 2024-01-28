<template>
  <Teleport to="body">
    <div class="background" @click="notes.closeModal()"></div>

    <div class="selector-modal-container">
      <NotesSelectorForm />
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { useNotes } from "@/store/useNotes";

const notes = useNotes();


</script>

<style scoped lang="scss">
.background {
  display: none;

  @media (width >= 768px) {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;

    display: block;
    width: 100%;
    height: 100vh;
    background-color: rgba(#000, 0.5);
  }
}

.selector-modal-container {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;

  width: min(95rem, 100%);
  height: 100vh;

  @media (width >= 768px) {
    inset: 50%;
    transform: translate(-50%, -50%);
    padding: 0 2rem;
    height: 80vh;
  }
}

</style>