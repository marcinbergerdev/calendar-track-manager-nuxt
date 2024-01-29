<template>
  <p class="task-message-text">
    {{ message }}
  </p>
</template>

<script setup lang="ts">
defineProps<{
  message: string;
}>();
</script>

<style scoped lang="scss">
.task-message-text {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 13;
  white-space: pre-wrap;
  word-break: break-word;
  font-size: 1.4rem;
}
</style>
