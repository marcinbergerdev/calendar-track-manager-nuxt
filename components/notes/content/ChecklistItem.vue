<template>
  <li class="note-checklist-item">
    <p class="note-checklist-item__text">1. Lorem ipsum dolor sit amet.</p>
  </li>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.note-checklist-item {
  &__text {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    font-size: 1.5rem;
  }
}
</style>
