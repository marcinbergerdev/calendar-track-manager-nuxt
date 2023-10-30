<template>
  <FormKit type="form" submit-label="Log in">
    <h3 class="formkit-form__title">Log in</h3>

    <FormKit
      type="email"
      name="email"
      validation="required|length:5|email"
      placeholder="e-mail address"
    ></FormKit>

    <FormKit
      type="password"
      name="password"
      validation="required|length:5"
      validation-visibility="live"
      placeholder="password"
    />
  </FormKit>

  <div class="redirect-box">
    <p class="redirect-box__text">or</p>
    <p class="redirect-box__text">You don't have an account yet?</p>
    <BaseButton :link="true" path="/signup" class="redirect-box__link" mode="border"
      >Sign up</BaseButton
    >
  </div>

  <button @click="logIn">dsaf</button>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "authentication",
});
const email = ref("test@test.com");
const password = ref("test123456");

const logIn = async () => {
  await signInUser(email.value, password.value);
  navigateTo("/calendar");
};
</script>

<style scoped lang="scss"></style>
