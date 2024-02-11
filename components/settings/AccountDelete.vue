<template>
  <article class="settings-account-delete">
    <h3 class="settings-account-delete__title">Usuń konto</h3>
    <p class="settings-account-delete__message">
      W momencie gdy usuniesz konto, utracisz wszystkie zapisane zamówienia jak i dane.
      Upewnij się, że chcesz usunąć konto - Niestety nie będziemy mogli go przywrócic.
    </p>
    <BaseButton view="border-error" class="settings-account-delete__button"
      >Usuń konto</BaseButton
    >
  </article>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.settings-account-delete {
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
