<template>
  <div class="notes-error-container">
    <div class="notes-error-box">
      <p class="notes-error-box__message">
        {{ error }}
      </p>
    </div>

    <BaseButton
      view="border-lt"
      class="notes-close-error"
      v-if="isCloseButton"
      @click="handleError"
      >Close</BaseButton
    >
  </div>
</template>

<script setup lang="ts">
import { useNotes } from "@/store/useNotes";
const notes = useNotes();

const { error, isCloseButton = true } = defineProps<{
  error: Object;
  isCloseButton: boolean;
}>();

const handleError = () => {
  clearError();
  notes.closeModal();
};
</script>

<style scoped lang="scss">
.notes-error-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem 0;

  padding: 3rem 1rem;
  width: 100%;
  height: 100%;
  background-color: var(--primary-clr);
  color: var(--text-clr);
  text-align: center;
  overflow: auto;
  
  @media (width >= 768px) {
    padding: 4rem 1rem;
    border-radius: 2.7rem;
  }
}

.notes-error-box {
  display: flex;
  flex-direction: column;
  min-height: 10rem;
  padding: 0 2rem;
  overflow-y: auto;
  
  &__message {
    font-size: 1.5rem;
    text-align: center;
    overflow-wrap: break-word;
  }
}

.notes-close-error {
  padding: 0.3rem 1rem;
  font-size: 1.5rem;
  border-radius: 1.5rem;
}
</style>
