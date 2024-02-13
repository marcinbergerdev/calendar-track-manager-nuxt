<template>
  <textarea
    name="message"
    id="message"
    :placeholder="$t('notes.tasks.emptyList')"
    v-model.trim="noteMessage"
    @input="$emit('update-message', noteMessage)"
  ></textarea>
</template>

<script setup lang="ts">
import { useNotes } from "~/store/useNotes";

const notes = useNotes();
const noteMessage = ref("");

defineEmits<{
  (e: "update-message", message: string): void;
}>();

const setMessageIfEditedIsSelected = () => {
  const selectedTask = notes.selectedTask;

  if (!!selectedTask && typeof selectedTask.content === "string") {
    noteMessage.value = selectedTask.content;
  }
};

onMounted(() => {
  setMessageIfEditedIsSelected();
});
</script>

<style scoped lang="scss">
textarea {
  padding: 0.9rem 1.5rem;
  width: 100%;
  height: 100%;
  font-size: 1.8rem;
  color: var(--text-clr);
  background: transparent;
  border-radius: 1rem;
  border: 0;
  outline: 2px solid var(--text-clr);
  resize: none;

  &:focus {
    box-shadow: 0px 0px 10px rgba(#fff, 0.8);
  }
}
</style>
