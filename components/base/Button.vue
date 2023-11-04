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
  color: var(--text-clr);

  @media (width >= 768px) {
    opacity: 0.7;
    &:hover {
      opacity: 1;
      transition: 0.15s ease-in-out;
    }
  }
}

.border {
  background-color: transparent;
  color: var(--auth-title-clr);
  border: 2px solid var(--primary-clr);

  &:hover {
    background-color: var(--primary-clr);
    color: var(--text-clr);
    transition: 0.15s ease-in-out;
  }
}

.filled {
  background-color: var(--primary-clr);
  color: var(--text-clr);
  opacity: 0.7;
  transition: 0.15s ease-in-out;

  &:hover {
    opacity: 1;
    transition: 0.15s ease-in-out;
  }
}
</style>
