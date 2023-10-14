<template>
  <li class="auth-item" v-for="({path, name}, id) in authLinks" :key="id">
    <NuxtLink class="auth-item__link nav-animation" :to="path" >{{ name }}</NuxtLink>
  </li>
  <li class="auth-item">
    <button class="auth-item__link nav-animation" href="#">sign out</button>
  </li>
</template>

<script setup lang="ts">
const authLinks = ref([
  { path: "#", name: "log in" },
  { path: "#", name: "sign up" },
]);



</script>

<style scoped lang="scss">
.auth-item{

  &__link{

  }
}



</style>
