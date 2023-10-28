<template>
    <form>
    
    </form>
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
