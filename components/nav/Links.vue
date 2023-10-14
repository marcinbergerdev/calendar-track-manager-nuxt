<template>
  <li class="link-item " v-for="({path, name}, id) in menuLinks" :key="id">
    <NuxtLink class="link-item__link nav-animation" :to="path">{{ name }}</NuxtLink>
  </li>
</template>

<script setup lang="ts">
const menuLinks = ref([
  { path: "#", name: "calendar" },
  { path: "#", name: "note" },
  { path: "#", name: "list" },
]);
</script>

<style scoped lang="scss">

.link-item{

  &__link{
    font-size: 2.7rem;
  }

}


</style>
