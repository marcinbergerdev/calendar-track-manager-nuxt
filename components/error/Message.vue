<template>
  <div class="events-error-container">
    <p class="events-error">{{ error }}</p>

    <BaseButton
      view="filled-drk"
      class="events-close-error"
      v-if="isCloseButton"
      @click="handleError"
      >Close</BaseButton
    >
  </div>
</template>

<script setup lang="ts">
import { useEditor } from "@/store/useEditor";
const events = useEditor();

const { error, isCloseButton = true } = defineProps<{
  error: Object;
  isCloseButton: boolean;
}>();

const handleError = () => {
  clearError();
  events.closeEditorAndEvent();
};
</script>

<style scoped lang="scss">
.events-error-container {
  padding: 2rem;
  width: 100%;
  overflow-y: auto;
  text-align: center;
}

.events-error {
  font-size: 1.5rem;
  text-align: center;
  overflow-wrap: break-word;
}

.events-close-error {
  margin-top: 2rem;
  padding: 0.3rem 1rem;
  font-size: 1.5rem;
}
</style>
