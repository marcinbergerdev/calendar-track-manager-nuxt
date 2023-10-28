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
  height: 100vh;
  background-color: var(--white);

  @media (width >= 768) {
  }
}

.auth-content-container {
  @media (width >= 768) {
  }
}

.auth-box {
  @media (width >= 768) {
  }
}

.auth-box-header {
  @media (width >= 768) {
  }
  &__title {
    @media (width >= 768) {
    }
  }
}
</style>
