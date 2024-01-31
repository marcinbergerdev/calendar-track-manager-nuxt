<template>
  <div class="error-container" :class="view">
    <div class="error-box">
      <p class="error-box__message">
        {{ error }}
      </p>
    </div>

    <BaseButton
      view="border-lt"
      class="error-close-button"
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
  view?: string;
  error: Object;
  isCloseButton?: boolean;
}>();

const handleError = () => {
  clearError();
  notes.closeModal();
};
</script>

<style scoped lang="scss">
.error-container {
  width: 100%;
  height: 100%;
  text-align: center;
  color: var(--text-clr);
  overflow: auto;

  .error-box {
    display: flex;
    flex-direction: column;
    min-height: 10rem;
    overflow-y: auto;

    &__message {
      font-size: 1.6rem;
      text-align: center;
      overflow-wrap: break-word;
    }
  }

  .error-close-button {
    padding: 0.3rem 1rem;
    font-size: 1.5rem;
    border-radius: 1.5rem;
  }
}

.error-selector-form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem 0;

  padding: 3rem 1rem;
  background-color: var(--primary-clr);

  @media (width >= 768px) {
    padding: 4rem 5rem;
    border-radius: 2.7rem;
  }
}

.error-tasks-container {
  padding: 2rem 1rem 0 1rem;
}
</style>
