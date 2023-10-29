<template>
  <li class="auth-item">
    <BaseButton mode="nav-animation" @click="signOut">sign out</BaseButton>
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
