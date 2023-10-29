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
  link: boolean;
  mode?: string;
  path?: string;
}>();
</script>

<style scoped lang="scss"></style>
