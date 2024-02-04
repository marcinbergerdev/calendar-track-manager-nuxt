<template>
  <div class="details-container">
    <h3 class="details-container__title">{{ taskTitle }}</h3>

    <section class="details-content">
      <NotesManagerDetailsMessage v-if="!isTasksList" :message="content" />
      <NotesManagerDetailsTasks v-else :tasks="content" />
    </section>

    <section class="details-interaction">
      <BaseButton
        view="border-lt"
        class="details-interaction__button"
        @click="notes.closeModal()"
        >Close</BaseButton
      >
    </section>
  </div>
</template>

<script setup lang="ts">
import { useNotes } from "@/store/useNotes";
const notes = useNotes();
const selectedTask = notes.selectedTask;

const taskTitle = computed(() => {
  if (!!selectedTask) return selectedTask.title;
});

const isTasksList = computed(() => {
  if (!!selectedTask) return Array.isArray(selectedTask.content);
});

const content = computed(() => {
  if (!!selectedTask) {
    return selectedTask.content;
  }
});
</script>

<style scoped lang="scss">
.details-container {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  gap: 2rem 0;

  padding: 2rem 1rem;
  width: 100%;
  height: 100%;
  color: var(--text-clr);
  background-color: var(--primary-clr);
  border-radius: 2.7rem;

  &__title {
    font-size: 2rem;
  }
}
.details-content {
  width: 100%;
  padding: 0 2rem;
  flex-basis: 70%;
  overflow: auto;
}

.details-interaction {
  &__button {
    padding: 0.3rem 1.5rem;
    border-radius: 2rem;
  }
}
</style>
