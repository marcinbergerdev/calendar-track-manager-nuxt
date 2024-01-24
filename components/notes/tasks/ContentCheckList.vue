<template>
  <ul class="task-checklist">
    <li class="task-checklist-item">
      <p class="task-checklist-item__text">1. Lorem ipsum dolor sit ametasdasdsadas asdasd assa d.</p>
    </li>
    <li class="task-checklist-item">
      <p class="task-checklist-item__text">1. Lorem ipsum dolor sit amet.</p>
    </li>
    <li class="task-checklist-item">
      <p class="task-checklist-item__text">1. Lorem ipsum dolor sit amet.</p>
    </li>
    <li class="task-checklist-item">
      <p class="task-checklist-item__text">1. Lorem ipsum dolor sit amet.</p>
    </li>
    <li class="task-checklist-item">
      <p class="task-checklist-item__text">1. Lorem ipsum dolor sit amet asdasd asdasddasd asdsa  das.</p>
    </li>
    <li class="task-checklist-item">
      <p class="task-checklist-item__text">1. Lorem ipsum dolor sit amet asdasd asdasddasd asdsa  das.</p>
    </li>
    <li class="task-checklist-item">
      <p class="task-checklist-item__text">1. Lorem ipsum dolor sit amet asdasd asdasddasd asdsa  das.</p>
    </li>
    <li class="task-checklist-item">
      <p class="task-checklist-item__text">1. Lorem ipsum dolor sit amet asdasd asdasddasd asdsa  das.</p>
    </li>
    <li class="task-checklist-item">
      <p class="task-checklist-item__text">1. Lorem ipsum dolor sit amet asdasd asdasddasd asdsa  das.</p>
    </li>
    <li class="task-checklist-item">
      <p class="task-checklist-item__text">1. Lorem ipsum dolor sit amet asdasd asdasddasd asdsa  das.</p>
    </li>
  </ul>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.task-checklist {
  display: flex;
  flex-direction: column;
  gap: 1rem 0;
}

.task-checklist {
  display: flex;
  flex-direction: column;
  gap: 1rem 0;
}

.task-checklist-item {
  &__text {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    font-size: 1.5rem;
  }
}
</style>
