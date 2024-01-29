<template>
  <h3 class="selector-checklist-title">Tasks</h3>

  <div view="empty" class="selector-add-task">
    <input
      class="selector-add-task__addInput"
      type="text"
      placeholder="Add..."
      v-model="taskName"
    />

    <BaseButton
      type="button"
      view="empty"
      class="selector-add-task__box"
      @click="addTaskHandler"
    >
      <svg
        class="selector-add-task__box-icon"
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
      >
        <path fill="currentColor" d="M11.5 12.5H6v-1h5.5V6h1v5.5H18v1h-5.5V18h-1z" />
      </svg>
    </BaseButton>
  </div>

  <ul class="selector-checklist">
    <li v-if="checklist.length === 0">
      <p class="selector-empty-checklist">Your list is empty.</p>
    </li>

    <NotesSelectorCheckListItem
      v-for="({ name }, id) in checklist"
      :key="id"
      :id="id"
      :name="name"
      v-else
      @delete-task="deleteTask"
    ></NotesSelectorCheckListItem>
  </ul>
</template>

<script setup lang="ts">
import { Task } from "@/types/Notes";

const emit = defineEmits<{
  (e: "update-note-content", content: Task[]): void;
}>();

const checklist = ref<Task[]>([]);
const taskName = ref("");

const addTaskHandler = () => {
  checklist.value.push({
    name: taskName.value,
  });
  resetAddInput();
};

const deleteTask = (id: number) => {
  let updatedCheckList: Task[] = [...checklist.value];
  updatedCheckList.splice(id, 1)
  checklist.value = updatedCheckList;
};

const resetAddInput = () => {
  taskName.value = "";
};

watchEffect(() => {
  emit("update-note-content", checklist.value);
});
</script>

<style scoped lang="scss">
.selector-checklist-title {
  font-size: 2.3rem;
  color: var(--text-clr);
}

.selector-add-task {
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0.5rem 1.5rem;
  width: min(100%, 20rem);
  color: var(--text-clr);
  border: 2px solid var(--text-clr);
  border-radius: 2.5rem;

  &__addInput {
    width: 100%;
    font-size: 1.6rem;
    color: var(--text-clr);
    background-color: transparent;
    border: 0;
    outline: none;
  }

  &__box {
    display: block;
    border: 1px solid var(--text-clr);
    border-radius: 2.5rem;

    &-icon {
      display: flex;
      font-size: 2.5rem;
    }
  }

  @media (width >= 768px) {
    border-radius: 3rem;
    margin: 0;
  }
}

.selector-empty-checklist {
  margin-top: 6rem;
  width: 100%;
  font-size: 2rem;
  text-align: center;
  color: var(--text-clr);
}

.selector-checklist {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;

  margin-top: 2rem;
  width: 100%;
  height: 100%;
  overflow: auto;

  @media (width >= 768px) {
    align-items: flex-start;
    justify-content: center;
    flex-flow: wrap row;
  }
}
</style>
