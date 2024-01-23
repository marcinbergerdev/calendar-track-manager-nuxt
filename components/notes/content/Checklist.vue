<template>
  <ul class="note-checklist">
    <li class="note-checklist-item">
      <p class="note-checklist-item__text">1. Lorem ipsum dolor sit amet.</p>
    </li>
    <li class="note-checklist-item">
      <p class="note-checklist-item__text">1. Lorem ipsum dolor sit amet.</p>
    </li>
    <li class="note-checklist-item">
      <p class="note-checklist-item__text">1. Lorem ipsum dolor sit amet.</p>
    </li>
    <li class="note-checklist-item">
      <p class="note-checklist-item__text">1. Lorem ipsum dolor sit amet.</p>
    </li>
  </ul>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.note-checklist {
  display: flex;
  flex-direction: column;
  gap: 1rem 0;
}

.note-checklist-item {
  &__text {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    font-size: 1.5rem;
  }
}
</style>
