
import { BaseButton } from '#build/components';
<template>
  <div class="events-error-container">
    <p class="events-error">{{ error }}</p>

    <BaseButton @click="handleError">Back</BaseButton>
  </div>
</template>

<script setup lang="ts">
import { useEditor } from "@/store/useEditor";
const events = useEditor();

const props = defineProps({
  error: Object,
});

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
}

.events-error {
  font-size: 1.5rem;
  text-align: center;
  overflow-wrap: break-word;
}
</style>
