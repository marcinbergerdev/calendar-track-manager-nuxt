<template>
  <FormKit type="form" :submit-label="$t('auth.logIn.button')" @submit="logInHandler">
    <h3 class="formkit-form__title">{{ $t("auth.logIn.title") }}</h3>

    <FormKit
      type="email"
      name="email"
      validation="required|length:5|email"
      :placeholder="$t('auth.logIn.email')"
      v-model="email"
    ></FormKit>

    <FormKit
      type="password"
      name="password"
      validation="required:trim|length:5"
      :placeholder="$t('auth.logIn.password')"
      v-model="password"
    />
  </FormKit>

  <div class="redirect-box">
    <p class="redirect-box__text">{{ $t("auth.infoText.or") }}</p>
    <p class="redirect-box__text">{{ $t("auth.infoText.redirectToSignup") }}</p>

    <BaseButton :link="true" path="/signup" view="border" class="redirect-box__link">{{
      $t("auth.redirectToSignup")
    }}</BaseButton>
  </div>

  <BaseButton @click="logInTestUserHandler" view="border" class="redirect-box__link">{{
    $t("auth.testAccount")
  }}</BaseButton>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "authentication",
});

const emit = defineEmits<{
  (e: "test"): void;
}>();

const isLoadingSpinner = useLoadingSpinner();
const email = ref<string>("");
const password = ref<string>("");
const testEmail = ref<string>("test@test.com");
const testPassword = ref<string>("qwerty");

const logInHandler = () => {
  authLoginInit(email.value, password.value);
};

const logInTestUserHandler = () => {
  authLoginInit(testEmail.value, testPassword.value);
};

const authLoginInit = async (email: string, password: string) => {
  isLoadingSpinner.value = true;
  await signInUser(email, password);
  navigateTo("/");
  isLoadingSpinner.value = false;
};
</script>
