<template>
  <div class="notes-wrapper">
    <NotesSelector
      v-if="notes.isNoteSelector"
    ></NotesSelector>

    <NotesSortingButtons />

    <NuxtErrorBoundary>
      <NotesTasks :tasks="tasks"></NotesTasks>

      <template #error="{ error }">
        <ErrorNotesMessage :error="error" :is-close-button="false"></ErrorNotesMessage>
      </template>
    </NuxtErrorBoundary>
  </div>
</template>

<script setup lang="ts">
import { useNotes } from "@/store/useNotes";
import { NuxtError } from "nuxt/app";
import { NoteResponse } from "@/types/Notes";

const notes = useNotes();
const tasks = ref<NoteResponse[]>([]);

const getUserNotes = async () => {
  try {
    const response = await getUserNotesFetch();
    tasks.value = response;
  } catch (err: unknown) {
    if (typeof err === "string") {
    } else if (err === Object || err !== null) {
      throw createError(err as Partial<NuxtError>);
    } else {
      throw createError("Something goes wrong!, try later.");
    }
  }
};

provide('update-user-tasks', async () => {
  await getUserNotes();
});

onMounted(async () => {
  await getUserNotes();
});
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
