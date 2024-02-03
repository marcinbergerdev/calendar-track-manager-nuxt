<template>
  <NuxtErrorBoundary>
    <NotesTasks></NotesTasks>

    <template #error="{ error }">
      <ErrorNotesMessage :error="error" view="error-tasks-list" redirect-to="/"></ErrorNotesMessage>
    </template>
  </NuxtErrorBoundary>
</template>