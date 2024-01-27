<template>
  <li class="selector-task">
    <p class="selector-task__title">{{te}}Zakupy</p>

    <BaseButton view="empty" class="selector-delete-task">
      <svg
        class="selector-delete-task__icon"
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6v12M8 9h8v10H8V9m7.5-5l-1-1h-5l-1 1H5v2h14V4h-3.5Z"
        />
      </svg>
    </BaseButton>
  </li>
</template>

<script setup lang="ts">

defineProps<{
  te: number
}>();


</script>

<style scoped lang="scss">

.selector-task {
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0.7rem 1rem;
  width: min(100%, 22rem);
  border: 1px solid var(--text-clr);

  &__title {
    font-size: 1.5rem;
    color: var(--text-clr);
  }
}

.selector-delete-task {
  &__icon {
    display: flex;
    color: var(--error-clr);
  }
}
</style>
