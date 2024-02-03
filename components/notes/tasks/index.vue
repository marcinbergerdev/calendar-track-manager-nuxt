<template>
  <div class="notes-wrapper">
    <NotesManager v-if="notes.isManager"></NotesManager>

    <NotesTasksAddButton></NotesTasksAddButton>

    <NotesTasksList :tasks="tasks"></NotesTasksList>
  </div>
</template>

<script setup lang="ts">
import { useNotes } from "~/store/useNotes";
import { NoteResponse } from "~/types/Notes";
const notes = useNotes();

import { NuxtError } from "nuxt/app";

const tasks = ref<NoteResponse[]>([]);

const getUserNotes = async () => {
  try {
    notes.isSpinner = true;

    const response = await getUserNotesFetch();
    tasks.value = response;

    notes.isSpinner = false;
  } catch (err: unknown) {
    if (typeof err === "string") {
    } else if (err === Object || err !== null) {
      throw createError(err as Partial<NuxtError>);
    } else {
      throw createError("Something goes wrong!, try later.");
    }
  } finally {
    notes.isSpinner = false;
  }
};

provide("update-user-tasks", async () => {
  await getUserNotes();
});
onMounted(async () => {
  await getUserNotes();
});
</script>

<style scoped lang="scss">
.notes-wrapper {
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
