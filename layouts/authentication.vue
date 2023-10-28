<template>
  <div class="auth-container">
    <AuthHeader />

    <main class="auth-content-container">
      <section class="auth-box">
        <header class="auth-box-header">
          <h2 class="auth-box-header__title">Welcome</h2>
        </header>
        <!-- custom form -->
        <slot />
      </section>
    </main>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.auth-container {
  flex-direction: column;
  width: 100%;
  height: 100vh;
  overflow: auto;
  background-color: var(--white);

  @media (width >= 768px) {
  }
}

.auth-content-container {
  flex: 1;
  width: 100%;
  justify-content: center;
  display: flex;
  @media (width >= 768px) {
  }
}

.auth-box {
  width: min(90%, 50rem);
  flex-direction: column;
  justify-content: space-evenly;

  @media (width >= 768px) {
  }
}

.auth-box-header {
  display: flex;
  align-self: flex-end;
  @media (width >= 768px) {
  }

  &__title {
    color: var(--yellow);
    font-weight: 400;

    @media (width >= 768px) {
    }
  }
}
</style>
