<template>
  <div class="error-container" :class="view">
    <p class="error-message">
      {{ error }}
    </p>

    <BaseButton
      view="border-lt"
      class="error-close-button"
      v-if="isCloseButton"
      @click="handleError"
      >{{$t('error.closeButton')}}</BaseButton
    >
  </div>
</template>

<script setup lang="ts">
import { NuxtError } from "nuxt/app";
import { useNotes } from "@/store/useNotes";
const notes = useNotes();

const { error, redirectTo, isCloseButton = true } = defineProps<{
  error: NuxtError;
  view?: string;
  redirectTo?: string;
  isCloseButton?: boolean;
}>();

const handleError = () => {
  if (!!redirectTo) {
    clearError({ redirect: redirectTo });
    return;
  }

  clearError();
  notes.isManager = false;
};
</script>

<style scoped lang="scss">
.error-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3rem 0;

  padding: 2rem;
  width: 100%;
  height: 100%;
  text-align: center;

  .error-message {
    padding: 2rem 0;
    max-height: 50rem;
    font-size: 1.5rem;
    color: var(--text-clr);
    overflow: auto;
  }
}

.error-editor-form {
  overflow: auto;
  border-radius: 2.7rem;
  background-color: var(--primary-clr);
}

.error-tasks-list {
  .error-message {
    width: min(90rem, 100%);
  }
}

.error-close-button {
  padding: 0.3rem 1.4rem;
  border-radius: 2rem;
}
</style>
