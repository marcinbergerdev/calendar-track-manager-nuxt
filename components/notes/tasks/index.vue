<template>
  <ul class="tasks-list">
    <NotesTasksAddButton></NotesTasksAddButton>
    <NotesTasksListItem></NotesTasksListItem>
    <NotesTasksListItem></NotesTasksListItem>
    <NotesTasksListItem></NotesTasksListItem>
    <NotesTasksListItem></NotesTasksListItem>
  </ul>
</template>

<script setup lang="ts">
const tasks = ref([
  {
    id: 0,
    title: "Zakupy",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, sunt",
    color: '2159E9',
    type: 'message'
  },
]);
</script>

<style scoped lang="scss">
.tasks-list {
  display: flex;
  flex-flow: wrap row;
  align-items: center;
  justify-content: center;
  gap: 5rem;

  margin-top: 6rem;
  width: 100%;
}
</style>
