<template>
  <li v-for="({ path, name }, id) in menuLinks" :key="id">
    <NuxtLink class="nav-animation" :to="path">{{ name }}</NuxtLink>
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
