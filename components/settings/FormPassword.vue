<template>
  <form class="settings-form" @submit.prevent="changePasswordHandler">
    <div class="settings-form-box">
      <input
        class="settings-form-box__input"
        type="password"
        placeholder="New password"
        v-model.trim="userNewPassword"
      />

      <input
        class="settings-form-box__input"
        type="password"
        placeholder="Confirm password"
        v-model.trim="userConfirmPassword"
      />

      <p class="settings-form-box__error-message" v-show="isErrorMessage">
        {{ errorMessage }}
      </p>
    </div>

    <BaseButton type="submit" view="filled" class="settings-form__modal-button"
      >Save</BaseButton
    >
  </form>

  <Teleport to="body">
    <BaseFormModal
      v-if="modal.isModal"
      :title="modal.values.title"
      :content="modal.values.content"
      :is-confirm="modal.values.confirm"
    ></BaseFormModal>
  </Teleport>
</template>

<script setup lang="ts">
import { NuxtError } from "nuxt/app";
import { useModal } from "~/store/useModal";

const modal = useModal();

const userNewPassword = ref("");
const userConfirmPassword = ref("");
const isErrorMessage = ref(false);
const errorMessage = ref("");

const changePasswordHandler = async () => {
  const newPassword = inputValidation();
  if (!!newPassword) {
    await changePassword(newPassword);
  }
};

const inputValidation = () => {
  if (userNewPassword.value.length < 6 || userConfirmPassword.value.length < 6) {
    errorMessage.value = "your password should contain 6 characters!";
    isErrorMessage.value = true;
  } else if (userNewPassword.value !== userConfirmPassword.value) {
    errorMessage.value = "your passwords are different!";
    isErrorMessage.value = true;
  } else {
    isErrorMessage.value = false;
    return userNewPassword.value;
  }
};

const changePassword = async (newPassword: string) => {
  try {
    await changeUserPassword(newPassword);
  } catch (err: unknown) {
    if (typeof err === "string") {
      throw createError(err);
    } else if (err === Object || err !== null) {
      throw createError(err as Partial<NuxtError>);
    } else {
      throw createError("Something goes wrong!, try later.");
    }
  }
};
</script>
