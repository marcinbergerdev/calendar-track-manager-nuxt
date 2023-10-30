<template>
  <FormKit type="form" submit-label="Sign up">
    <h3 class="formkit-form__title">Sign up</h3>
    <FormKit
      type="email"
      name="email"
      validation="required|email"
      placeholder="e-mail address"
    ></FormKit>

    <FormKit
      type="password"
      name="password"
      validation="required|?length:6"
      validation-visibility="live"
      placeholder="password"
    />
    <FormKit
      type="password"
      name="password_confirm"
      validation="required|confirm|?length:6"
      validation-visibility="live"
      validation-label="Password confirmation"
      placeholder="confirm password"
    />
  </FormKit>

  <div class="redirect-box">
    <p class="redirect-box__text">If you have an account log in here!</p>
    <BaseButton :link="true" path="/login" class="redirect-box__link" mode="border">Log in</BaseButton>
  </div>
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

<style scoped lang="scss"></style>
