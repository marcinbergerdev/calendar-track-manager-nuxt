<template>
  <div class="settings-error-container" :class="view">
    <p class="settings-error-message">
      {{ error }}
    </p>

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
import { NuxtError } from "nuxt/app";

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
};
</script>

<style scoped lang="scss">
.settings-error-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3rem 0;

  padding: 2rem;
  width: 100%;
  height: 100%;
  text-align: center;
}
.settings-error-message {
  padding: 2rem 0;
  max-height: 50rem;
  font-size: 1.5rem;
  color: var(--text-clr);
  overflow: auto;
}

.error-close-button{
  padding: 0.2rem 2rem;
  border-radius: 3rem;
}
</style>
