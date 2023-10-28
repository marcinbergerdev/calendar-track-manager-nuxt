<template>
  <FormKit type="form" submit-label="Sign up">
    <h3>Sign up</h3>
    <FormKit
      type="email"
      name="email"
      validation="required|length:5|email"
    ></FormKit>

    <FormKit
      type="password"
      name="password"
      validation="required"
      validation-visibility="live"
    />
    <FormKit
      type="password"
      name="password_confirm"
      validation="required|confirm"
      validation-visibility="live"
      validation-label="Password confirmation"
    />
  </FormKit>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "authentication",
});

const email = ref("test@test.com");
const password = ref("test123456");

const signUp = () => {
  createUserAccount(email.value, password.value);
};

</script>

<style scoped></style>
