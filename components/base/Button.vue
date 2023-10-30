<template>
  <NuxtLink v-if="link" :class="mode" :to="path">
    <slot />
  </NuxtLink>

  <button v-else :class="mode">
    <slot />
  </button>
</template>

<script setup lang="ts">
defineProps<{
  link?: boolean;
  mode?: string | object;
  path?: string;
}>();
</script>

<style scoped lang="scss">
.empty,
.border,
.filled {
  border-radius: 1.5rem;
  transition: 0.15s ease-in-out;
}

.empty {
  color: var(--white);
  opacity: 0.7;

  @media (width >= 768px) {
    &:hover {
      opacity: 1;
      transition: 0.15s ease-in-out;
    }
  }
}

.border {
  background-color: transparent;
  color: var(--yellow);
  border: 1px solid var(--yellow);

  &:hover {
    background-color: var(--yellow);
    color: var(--white);
    transition: 0.15s ease-in-out;
  }
}

.filled {
  background-color: var(--yellow);
  color: var(--white);

  &:hover {
    opacity: 1;
    transition: 0.15s ease-in-out;
  }
}
</style>
