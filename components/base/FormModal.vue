<template>
  <div class="modal-container">
    <div class="background"></div>

    <dialog open class="window-dialog">
      <header class="header-dialog">
        <h2 class="header-dialog__title">{{ title }}</h2>
      </header>

      <section class="content-dialog">
        <p class="content-dialog__description">
          {{ content }}
        </p>
      </section>

      <footer class="footer-dialog">
        <BaseButton class="footer-dialog__button" mode="filled" @click="closeModal"
          >Cancel</BaseButton
        >
        <BaseButton
          class="footer-dialog__button"
          mode="border"
          v-if="isConfirm"
          @click="confirmModal"
          >Ok</BaseButton
        >
      </footer>
    </dialog>
  </div>
</template>

<script setup lang="ts">
import { useModal } from "~/store/useModal";

defineProps<{
  title?: string;
  content?: string;
  isConfirm?: boolean;
}>();

const modal = useModal();

const closeModal = () => {
  modal.isModal = false;
  resetModal();
};

const confirmModal = () => {
  navigateTo("/");
  resetModal();
};

const resetModal = () => {
  modal.resetValues();
};
</script>

<style scoped lang="scss">
.modal-container {
  position: absolute;
  top: 0;
  z-index: 100;
  width: 100%;
  height: 100vh;
}

.background {
  width: 100%;
  height: 100%;
  background-color: color-mix(in srgb, var(--bg-clr) 60%, transparent);
}

.window-dialog {
  position: absolute;
  inset: 50%;
  translate: -50% -50%;

  width: min(35rem, 90%);
  background-color: var(--bg-clr);
  border-radius: 3rem;
  border: 2px solid var(--primary-clr);
}

.header-dialog {
  padding: 1.2rem;
  text-align: center;
  background-color: var(--primary-clr);
  color: var(--text-clr);
  border-radius: 2.8rem 2.8rem 0 0;

  &__title {
    font-size: 1.7rem;
    font-weight: 400;
    letter-spacing: 1px;
  }
}

.content-dialog {
  padding: 1.5rem;
  &__description {
    font-size: 1.2rem;
    color: var(--auth-form-text-color);
  }
}

.footer-dialog {
  display: flex;
  gap: 0 2rem;
  justify-content: center;
  padding: 1.5rem;

  &__button {
    width: 9rem;
    padding: 0.4rem 0;
    font-size: 1.6rem;
  }
}
</style>
