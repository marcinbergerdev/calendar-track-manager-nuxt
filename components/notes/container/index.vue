<template>
  <NuxtErrorBoundary>
    <NotesList></NotesList>

    <template #error="{ error }">
      <ErrorMessage :error="error" :is-close-button="false"></ErrorMessage>
    </template>
  </NuxtErrorBoundary>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss"></style>
