<template>
  <FormKit type="form" submit-label="Log in">
    <h3>Log in</h3>

    <FormKit type="email" name="email" validation="required|length:5|email"></FormKit>

    <FormKit
      type="password"
      name="password"
      validation="required|length:5"
      validation-visibility="live"
    />
  </FormKit>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "authentication",
});
const email = ref("test@test.com");
const password = ref("test123456");

const logIn = async () => {
  await signInUser(email.value, password.value);
  navigateTo("/");
};
</script>

<style scoped></style>
