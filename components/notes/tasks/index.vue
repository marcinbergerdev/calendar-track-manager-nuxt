<template>
  <p v-if="isEmptyTasksList" class="tasks-empty-list">Your list is empty.</p>

  <ul class="tasks-list">
    <NotesTasksListItem
      v-for="({ color, content, isChecked, option, title }, id) in notes.tasks"
      :key="id"
      :id="id"
      :title="title"
      :content="content"
      :color="color"
      :note-type="option"
      :isChecked="isChecked"
    ></NotesTasksListItem>
  </ul>
</template>

<script setup lang="ts">
import { useNotes } from "@/store/useNotes";
const notes = useNotes();

const isEmptyTasksList = computed(() => {
  return !!notes.tasks ? false : true;
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

  width: 100%;
}
</style>
