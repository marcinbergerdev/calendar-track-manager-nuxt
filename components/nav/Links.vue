<template>
  <li v-for="({ path, name }, id) in menuLinks" :key="id">
    <BaseButton :link="true" :path="path" mode="empty">{{ name }}</BaseButton>
  </li>
</template>

<script setup lang="ts">
const menuLinks = ref([
  { path: "/calendar", name: "calendar" },
  { path: "/note", name: "note" },
  { path: "/list", name: "list" },
]);
</script>

<style scoped lang="scss"></style>
