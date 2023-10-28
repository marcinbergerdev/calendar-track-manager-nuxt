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

  <div class="redirect-box">
    <p class="redirect-box__text">or</p>
    <p class="redirect-box__text">You don't have an account yet?</p>
    <NuxtLink class="redirect-box__link" to="/signup">Sign up</NuxtLink>
  </div>
  <!-- <button @click="logIn">dsaf</button> -->
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

<style scoped lang="scss">





.redirect-box {
  &__text {
  }

  &__link {
  }
}
</style>
