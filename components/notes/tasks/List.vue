<template>
  <BaseLoadingSpinner
    mode="notes-spinner"
    :is-background="false"
    v-if="notes.isSpinner"
  />

  <p v-else-if="emptyList" class="tasks-empty-list">Your list is empty.</p>

  <Sortable v-else class="tasks-list" :list="convertedTasks" item-key="id" tag="ul">
    <template #item="{ element }">
      <NotesTasksListItem
        :id="element[0]"
        :title="element[1].title"
        :content="element[1].content"
        :color="element[1].color"
        :note-type="element[1].option"
        :isChecked="element[1].isChecked"
      ></NotesTasksListItem>
    </template>
  </Sortable>

</template>

<script setup lang="ts">
import { useNotes } from "~/store/useNotes";
import { NoteResponse, ConvertedTasksList} from "~/types/Notes";
import { Sortable } from "sortablejs-vue3";

const notes = useNotes();

const { tasksResponse } = defineProps<{
  tasksResponse: NoteResponse;  
}>();

const convertedTasks = computed(() => {
  if(!tasksResponse) return []
  const selectedTasks: ConvertedTasksList = Object.entries(tasksResponse).map((task) => task);
  return selectedTasks;
});

const emptyList = computed(() => {
  return convertedTasks.value.length === 0 ? true : false;
});

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
