<template>
  <li v-for="({ path, name }, id) in authLinks" :key="id">
    <NuxtLink class="nav-animation" :to="path">{{ name }}</NuxtLink>
  </li>
  <li>
    <button class="nav-animation" href="#">sign out</button>
  </li>
</template>

<script setup lang="ts">
const authLinks = ref([
  { path: "#", name: "log in" },
  { path: "#", name: "sign up" },
]);
</script>

<style scoped lang="scss"></style>
