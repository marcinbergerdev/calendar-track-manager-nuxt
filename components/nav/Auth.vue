<template>
  <li class="auth-item">
    <button class="nav-animation" @click="signOut">sign out</button>
  </li>
</template>

<script setup lang="ts">
const signOut = () => {
  signOutUser();
  navigateTo("/login");
};
</script>

<style scoped lang="scss">
.auth-item {
  margin: 0 1rem;
}
</style>
