<template>
  <BaseLoadingSpinner mode="notes-spinner" :is-background="false" v-if="notes.isSpinner" />


  <p v-if="!tasks" class="tasks-empty-list">Your list is empty.</p>
  
  <ul v-else class="tasks-list">
    <NotesTasksListItem
      v-for="({ color, content, isChecked, option, title }, id) in tasks"
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
import { useNotes } from "~/store/useNotes";
import { NoteResponse } from '~/types/Notes';
import { Sortable } from "sortablejs-vue3";


  



const notes = useNotes();

defineProps<{
  tasks: NoteResponse
}>();
</script>

<style scoped lang="scss">
.tasks-empty-list {
  text-align: center;
  font-size: 2rem;
  color: var(--text-clr);
}

.tasks-list {
  display: flex;
  flex-flow: wrap row;
  align-items: center;
  justify-content: center;
  gap: 5rem 3rem;

  padding: 3rem 0;
  width: 100%;
}
</style>
