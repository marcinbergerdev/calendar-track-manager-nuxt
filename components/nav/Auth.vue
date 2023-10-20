<template>
  <li class="auth-item">
    <NuxtLink to="/" class="nav-animation" @click="logIn">log in</NuxtLink>
  </li>
  <li class="auth-item">
    <NuxtLink to="/" class="nav-animation" @click="signUp">sign up</NuxtLink>
  </li>
  <li class="auth-item">
    <button class="nav-animation" @click="signOut">sign out</button>
  </li>
</template>

<script setup lang="ts">
const userStatus = useUserLogStatus();

const email = ref("test@test.com");
const password = ref("test123456");

const logIn = () => {
  signInUser(email.value, password.value);
};

const signUp = () => {
  createUserAccount(email.value, password.value);
};

const signOut = () => {
  signOutUser();
};
</script>

<style scoped lang="scss">
.auth-item {
  margin: 0 1rem;
}
</style>
