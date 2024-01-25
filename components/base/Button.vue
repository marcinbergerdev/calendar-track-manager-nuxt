<template>
  <NuxtLink v-if="link" :class="view" :to="path">
    <slot />
  </NuxtLink>

  <button v-else :class="view">
    <slot />
  </button>
</template>

<script setup lang="ts">
defineProps<{
  link?: boolean;
  view?: string | object;
  path?: string;
}>();
</script>

<style scoped lang="scss">
.empty,
.border,
.filled,
.filled-lt,
.filled-drk {
  border-radius: 1.5rem;
  transition: 0.15s ease-in-out;
}

.filled,
.filled-lt,
.filled-drk,
.border-lt {
  opacity: 0.7;

  &:hover {
    opacity: 1;
    transition: 0.15s ease-in-out;
  }
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

.border-lt {
  background-color: transparent;
  color: var(--auth-title-clr);
  border: 2px solid var(--auth-title-clr);
}

.filled {
  background-color: var(--primary-clr);
  color: var(--text-clr);
}
.filled-lt {
  background-color: var(--bg-clr);
}

.filled-drk {
  background-color: var(--bg-clr);
  color: var(--text-clr-drk);
}

.border-calendar-day {
  color: var(--text-clr);
  border-radius: 0.5rem;
  border: 1px solid var(--text-clr);

  @media (width >= 570px) {
    border-radius: 1.3rem;
  }

  @media (width >= 768px) {
    &:hover {
      box-shadow: 0px 0px 8px rgba(#fff, 0.8);
      border: 2px solid var(--text-clr);
    }
  }
}
</style>
