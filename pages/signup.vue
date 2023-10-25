<template>
  <div>
    <li class="auth-item">
    <NuxtLink to="/" class="nav-animation" @click="signUp">sign up</NuxtLink>
  </li>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'authentication'
});


const email = ref("test@test.com");
const password = ref("test123456");



const signUp = () => {
  createUserAccount(email.value, password.value);
};


</script>

<style scoped>

</style>