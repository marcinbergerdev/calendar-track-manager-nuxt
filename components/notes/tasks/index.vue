<template>
  <NotesSelector v-if="notes.isNoteSelector"></NotesSelector>

  <NotesSortingButtons />
  
  <NotesTasksAddButton />

  <BaseLoadingSpinner mode="notes-spinner" :is-background="false" v-if="isSpinner" />
  <NotesTasksList v-else></NotesTasksList>
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
  } finally {
    isSpinner.value = false;
  }
};

provide("update-user-tasks", async () => {
  await getUserNotes();
});

onMounted(async () => {
  await getUserNotes();
});
</script>

<style scoped lang="scss"></style>
