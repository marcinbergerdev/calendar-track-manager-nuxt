<template>
  <BaseButton mode="empty" @click="signOut">sign out</BaseButton>
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
