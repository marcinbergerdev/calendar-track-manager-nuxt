<template>
  <article class="settings-data-container">
    <div class="settings-data-box">
      <span class="settings-data-box__title">Hasło</span>

      <div class="settings-details-box">
        <span class="settings-details-box__data">••••••••</span>
        <BaseButton
          view="empty"
          class="settings-details-box__button"
          @click="$emit('set-option', 'password')"
          >Zmień</BaseButton
        >
      </div>
    </div>
  </article>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.settings-data-container {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem 0;
  width: 100%;
}

.settings-data-box {
  width: 100%;

  &__title {
    font-size: 1.8rem;
  }

  @media (width >= 768px) {
    width: 40rem;
  }
}

.settings-details-box {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1rem;
  padding: 1rem 1.5rem;
  border: 1px solid var(--text-clr-drk);
  border-radius: 2rem;

  &__data {
    font-size: 1.4rem;
  }

  &__button {
    font-size: 1.5rem;
    color: var(--edit-clr);
  }
}
</style>
