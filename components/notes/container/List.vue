<template>
  <ul class="notes-list">
    <NotesContainerListItem></NotesContainerListItem>
    <NotesContainerListItem></NotesContainerListItem>
    <NotesContainerListItem></NotesContainerListItem>
    <NotesContainerListItem></NotesContainerListItem>
    <NotesContainerListItem></NotesContainerListItem>
    <NotesContainerListItem></NotesContainerListItem>
    <NotesContainerListItem></NotesContainerListItem>
    <NotesContainerListItem></NotesContainerListItem>
    <NotesContainerListItem></NotesContainerListItem>
    <NotesContainerListItem></NotesContainerListItem>

  </ul>
</template>

<script setup lang="ts">


const notes = ref([]);


</script>

<style scoped lang="scss">
.notes-list{
  display: flex;
  flex-flow: wrap row;
  align-items: center;
  justify-content: center;
  gap: 5rem;

  margin-top: 6rem;
  width: 100%;
}


</style>
