<template>
  <div class="auth-container">
    <BaseLoadingSpinner v-if="isLoadingSpinner" />
    <BaseModal
      v-if="modal.isModal"
      :title="modal.values.title"
      :content="modal.values.content"
      :is-confirm="modal.values.confirm"
    ></BaseModal>

    <AuthHeader />

    <main class="auth-content-container">
      <section class="auth-box">
        <header class="auth-box-header">
          <h2 class="auth-box-header__title">Welcome</h2>
        </header>
        <!-- here -->
        <slot />
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
import { useModal } from "~/store/useModal";

const isLoadingSpinner = useLoadingSpinner();
const modal = useModal();

</script>

<style scoped lang="scss">
.auth-container {
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background-color: var(--auth-bg-clr);
  overflow: auto;
}

.auth-content-container {
  flex: 1;
  padding: 2rem 0;
  width: 100%;
  justify-content: center;
  display: flex;

  @media (width >= 1000px) {
    align-items: center;
  }
}

.auth-box {
  width: min(90%, 60rem);
  flex-direction: column;
  justify-content: space-evenly;

  @media (width >= 1000px) {
    padding: 6rem;

    border: 1px solid var(--primary-clr);
    box-shadow: 0 0 5px var(--primary-clr);
    border-radius: 1rem;
  }
}

.auth-box-header {
  display: flex;
  align-self: flex-end;

  &__title {
    font-size: 1.8rem;
    font-weight: 400;
    color: var(--auth-title-clr);
  }
}
</style>
