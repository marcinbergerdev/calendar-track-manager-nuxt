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
    :options="dragAndDropDelayReaction"
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

const { notesList } = defineProps<{
  notesList: NoteResponse | null;
}>();

const { width } = useWindowSize();
const notes = useNotes();
const selectedNotes = ref<ConvertedNotesList>([]);

const updateUserTasks = inject("update-user-tasks", async () => {});

const updatedTasks = computed(() => {
  return selectedNotes.value;
});

const emptyList = computed(() => {
  return selectedNotes.value.length === 0 ? true : false;
});

const dragAndDropDelayReaction = computed(() => {
  const delayMobile = 100;
  const delayDesktop = 0;

  const selectedDelay = width.value > 768 ? delayDesktop : delayMobile;
  return {delay: selectedDelay};
});

const updateTasksOrder = (event: any) => {
  const newNotes = useCloneDeep(selectedNotes.value);
  const movedNotes = moveItemInArray(newNotes, event.oldIndex, event.newIndex);
  const updatedNotes = changeNotesId(movedNotes);
  updateNotes(updatedNotes);
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

const updateNotes = async (updatedNotes: ConvertedNotesList) => {
  const convertedTaskToObject = Object.fromEntries(updatedNotes);
  await saveSortedTasksFetch(convertedTaskToObject);
  updateUserTasks();
  selectedNotes.value = updatedNotes;
};

const tasksListConvertToArray = (response: NoteResponse | null) => {
  if (!!response) {
    const convertedTasks = Object.entries(response).map((task) => task);
    return convertedTasks;
  }
};

const notesSorting = (convertedTasks: ConvertedNotesList) => {
  const sortedTasks = convertedTasks.sort((a, b) => {
    const firstElement = a[1].id;
    const secondElement = b[1].id;
    return firstElement - secondElement;
  });

  return sortedTasks;
};

watch(
  () => notesList,
  (response) => {
    const convertedTasks: ConvertedNotesList = tasksListConvertToArray(response) || [];
    const sortedTask = notesSorting(convertedTasks);
    selectedNotes.value = sortedTask;
  }
);
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
