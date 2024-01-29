<template>
  <ul class="tasks-list">
    <NotesTasksAddButton></NotesTasksAddButton>

    <li v-if="false"><p class="tasks-empty-list">Your list is empty.</p></li>

    <NotesTasksListItem
      v-for="({ color, content, isChecked, option, title}, id) in tasks"
      :key="id"
      :id="id"
      :title="title"
      :content="content"
      :color="color"
      :note-type="option"
      :isChecked="isChecked"
      v-else
    ></NotesTasksListItem>
  </ul>
</template>

<script setup lang="ts">
import { NuxtError } from "nuxt/app";
import { NoteResponse } from "@/types/Notes";

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

onMounted(async () => {
  await getUserNotes();
});
</script>

<style scoped lang="scss">
.tasks-empty-list {
  font-size: 2rem;
  color: var(--text-clr);
}

.tasks-list {
  display: flex;
  flex-flow: wrap row;
  align-items: center;
  justify-content: center;
  gap: 5rem 3rem;

  margin-top: 6rem;
  width: 100%;
}
</style>
