<template>
  <BaseLoadingSpinner
    mode="notes-spinner"
    :is-background="false"
    v-if="notes.isSpinner"
  />

  <p v-else-if="emptyList" class="tasks-empty-list">Your list is empty.</p>

  <Sortable
    class="tasks-list"
    v-else
    tag="ul"
    item-key="id"
    :list="updatedTasks"
    @sort="updateTasksOrder"
  >
    <template #item="{ element }">
      <NotesTasksListItem
        :note-id="element[0]"
        :id="element[1].id"
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
import { NoteResponse, ConvertedNotesList } from "~/types/Notes";
import { Sortable } from "sortablejs-vue3";

const { tasksResponse } = defineProps<{
  tasksResponse: NoteResponse | null;
}>();

const notes = useNotes();
const notesList = ref<ConvertedNotesList>([]);

const updateUserTasks = inject("update-user-tasks", async () => {});

const updatedTasks = computed(() => {
  return notesList.value;
});

const emptyList = computed(() => {
  return notesList.value.length === 0 ? true : false;
});

const updateTasksOrder = (event: any) => {
  const newNotes = useCloneDeep(notesList.value);
  const movedNotes = moveItemInArray(newNotes, event.oldIndex, event.newIndex);
  const updatedTasks = changeNotesId(movedNotes);
  updateNotes(updatedTasks);
};

const moveItemInArray = (newNotes: ConvertedNotesList, from: number, to: number) => {
  const item = newNotes.splice(from, 1)[0];
  newNotes.splice(to, 0, item);
  return newNotes;
};

const changeNotesId = (newNotes: ConvertedNotesList) => {
  return newNotes.map((task, id) => {
    task[1].id = id;
    return task;
  });
};

const updateNotes = async (updatedTasks: ConvertedNotesList) => {
  const convertedTaskToObject = Object.fromEntries(updatedTasks);
  await saveSortedTasksFetch(convertedTaskToObject);
  updateUserTasks();
  notesList.value = updatedTasks;
}

const tasksListConvertToArray = () => {
  if (!!tasksResponse) {
    const convertedTasks = Object.entries(tasksResponse).map((task) => task);
    return convertedTasks;
  }
  return [];
};

const tasksSorting = (selectedTasks: ConvertedNotesList) => {
  const sortedTasks = selectedTasks.sort((a, b) => {
    const firstElement = a[1].id;
    const secondElement = b[1].id;
    return firstElement - secondElement;
  });

  return sortedTasks;
};

watchEffect(() => {
  const convertedTasks: ConvertedNotesList = tasksListConvertToArray();
  const sortedTask = tasksSorting(convertedTasks);
  notesList.value = sortedTask;
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
