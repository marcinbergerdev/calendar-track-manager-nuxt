<template>
  <FormKit type="form" submit-label="Log in" @submit="logInHandler">
    <h3 class="formkit-form__title">Log in</h3>

    <FormKit
      type="email"
      name="email"
      validation="required|length:5|email"
      placeholder="e-mail address"
      v-model="email"
    ></FormKit>

    <FormKit
      type="password"
      name="password"
      validation="required:trim|length:5"
      validation-visibility="live"
      placeholder="password"
      v-model="password"
    />
  </FormKit>

  <div class="redirect-box">
    <p class="redirect-box__text">or</p>
    <p class="redirect-box__text">You don't have an account yet?</p>

    <BaseButton :link="true" path="/signup" class="redirect-box__link" mode="border"
      >Sign up</BaseButton
    >
  </div>

  <BaseButton @click="logInTestUserHandler" class="redirect-box__link" mode="border"
    >Try test account</BaseButton
  >

</template>

<script setup lang="ts">
import { useLoadingSpinner } from "~/composables/useState";


definePageMeta({
  layout: "authentication",
});

const emit = defineEmits<{
  (e: "test"): void;
}>();

const isLoadingSpinner = useLoadingSpinner();
const email = ref<string>("");
const password = ref<string>("");

const logInHandler = async () => {
  isLoadingSpinner.value = true;
  await signInUser(email.value, password.value);
  navigateTo("/");
  isLoadingSpinner.value = false;
};

const logInTestUserHandler = async () => {
  isLoadingSpinner.value = true;
  const testEmail = ref<string>("test@test.com");
  const testPassword = ref<string>("qwerty");
  await signInUser(testEmail.value, testPassword.value);
  navigateTo("/");
  isLoadingSpinner.value = false;
};
</script>

<style scoped lang="scss"></style>
