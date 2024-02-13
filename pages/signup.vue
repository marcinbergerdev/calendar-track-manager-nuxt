<template>
  <FormKit type="form" :submit-label="$t('auth.signUp.button')" @submit="signUpHandler">
    <h3 class="formkit-form__title">{{ $t("auth.signUp.title") }}</h3>
    <FormKit
      type="email"
      name="email"
      validation="required|email"
      :placeholder="$t('auth.signUp.email')"
      v-model="email"
    ></FormKit>

    <FormKit
      type="password"
      name="password"
      validation="required:trim|?length:6"
      :placeholder="$t('auth.signUp.password')"
      v-model="password"
    />
    <FormKit
      type="password"
      name="password_confirm"
      validation="required:trim|confirm|?length:6"
      validation-label="Password confirmation"
      :placeholder="$t('auth.signUp.passwordConfirm')"
    />
  </FormKit>

  <div class="redirect-box">
    <p class="redirect-box__text">{{ $t("auth.infoText.redirectToLogin") }}</p>
    <BaseButton :link="true" path="/login" view="border" class="redirect-box__link">{{
      $t("auth.redirectToLogin")
    }}</BaseButton>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "authentication",
});

const email = ref<string>("");
const password = ref<string>("");

const signUpHandler = () => {
  createUserAccount(email.value, password.value);
};
</script>

<style scoped lang="scss"></style>
