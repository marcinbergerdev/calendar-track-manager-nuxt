<template>
  <li v-for="({ path, name }, id) in menuLinks" :key="id">
    <BaseButton :link="true" :path="path" view="empty">{{ name }}</BaseButton>
  </li>
</template>

<script setup lang="ts">
const menuLinks = ref([
  { path: "/note", name: "note" },
]);
</script>
