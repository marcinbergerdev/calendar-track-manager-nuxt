<template>
  <article class="settings-account-delete">
    <h3 class="settings-account-delete__title">{{ $t("settings.deleteTitle") }}</h3>
    <p class="settings-account-delete__message">
      {{ $t("settings.deleteMessage") }}
    </p>

    <BaseButton
      view="border-error"
      class="settings-account-delete__button"
      @click="deleteAccountHandler"
    >
      {{ $t("settings.deleteButton") }}</BaseButton
    >
  </article>
</template>

<script setup lang="ts">
import { NuxtError } from "nuxt/app";

const { t } = useI18n();

const deleteAccountHandler = async () => {
  try {
    await deleteUserAccount();
  } catch (err: unknown) {
    if (typeof err === "string") {
      throw createError(err);
    } else if (err === Object || err !== null) {
      throw createError(err as Partial<NuxtError>);
    } else {
      throw createError(t("settings.modal.errorMessage"));
    }
  }
};
</script>

<style scoped lang="scss">
.settings-account-delete {
  grid-area: delete;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  padding: 0 2rem;

  &__title {
    font-size: 2rem;
    @media (width > 768px) {
      font-size: 3rem;
    }
  }

  &__message {
    font-size: 1.2rem;
    opacity: 0.7;

    @media (width > 768px) {
      max-width: 50rem;
      font-size: 2rem;
    }
  }

  &__button {
    align-self: center;
    margin-top: 3rem;
    width: min(100%, 30rem);
    padding: 0.7rem 0;
    font-size: 2rem;
    border: 1px solid var(--error-clr);
    border-radius: 2rem;

    @media (width > 768px) {
      align-self: flex-start;
    }
  }
}
</style>
