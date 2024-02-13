<template>
  <li v-for="({ path }, id) in menuLinks" :key="id">
    <BaseButton :link="true" :path="path" view="empty">{{ $t(`nav.links[${id}]`) }}</BaseButton>
  </li>
</template>

<script setup lang="ts">
const menuLinks = ref([
  { path: "/note" },
]);
</script>
