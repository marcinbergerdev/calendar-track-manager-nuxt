<template>
  <div>
    <li class="auth-item">
      <button to="/" class="nav-animation" @click="logIn">log in</button>
    </li>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "authentication",
});
const email = ref("test@test.com");
const password = ref("test123456");

const logIn = async () => {
  await signInUser(email.value, password.value);
  navigateTo('/');
};
</script>

<style scoped></style>
