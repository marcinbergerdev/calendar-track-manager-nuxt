<template>
  <Teleport to="body">
    <div class="background" @click="notes.closeModal()"></div>

    <div class="manager-container">
      <NuxtErrorBoundary>

        <div class="manager-box">
          <NotesManagerEditorForm v-if="notes.isComponent !== 'details'"></NotesManagerEditorForm>
          <NotesManagerDetails v-else></NotesManagerDetails>
        </div>


        <template #error="{ error }">
          <ErrorNotesMessage
            view="error-editor-form"
            :error="error"
          ></ErrorNotesMessage>
        </template>

      </NuxtErrorBoundary>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { useNotes } from "~/store/useNotes";

const notes = useNotes();
</script>

<style scoped lang="scss">
.background {
  display: none;

  @media (width >= 768px) {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 15;

    display: block;
    width: 100%;
    height: 100vh;
    background-color: rgba(#000, 0.5);
    cursor: pointer;
  }
}

.manager-container {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 20;

  width: min(95rem, 100%);
  height: 100vh;

  @media (width >= 768px) {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    padding: 0 3rem;
    height: 80vh;
  }
}


.manager-box {
  width: min(95rem, 100%);
  height: 100vh;
  background-color: var(--primary-clr);

  @media (width >= 768px) {
    height: 80vh;
    border-radius: 2.7rem;
  }
}
</style>
