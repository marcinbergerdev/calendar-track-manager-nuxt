<template>
  <div class="notes-wrapper">
    <NotesSelector v-if="notes.isNoteSelector"></NotesSelector>

    <NotesSortingButtons />
    <NotesTasksAddButton />

    <NuxtErrorBoundary>
      <BaseLoadingSpinner mode="notes-spinner" :is-background="false" v-if="isSpinner"/>
      <NotesTasks v-else></NotesTasks>

      <template #error="{ error }">
        <ErrorNotesMessage :error="error" :is-close-button="false"></ErrorNotesMessage>
      </template>
    </NuxtErrorBoundary>
  </div>
</template>

<script setup lang="ts">
import { useNotes } from "@/store/useNotes";
import { NuxtError } from "nuxt/app";

const notes = useNotes();
const isSpinner = ref(false);

const getUserNotes = async () => {
  try {
    isSpinner.value = true;

    const response = await getUserNotesFetch();
    notes.tasks = response;

    isSpinner.value = false;

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

.notes-spinner{

}
</style>
