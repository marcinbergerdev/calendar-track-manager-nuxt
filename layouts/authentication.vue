<template>
  <header class="auth-header">
    <h1 class="auth-header__title">Calendar Track Manager</h1>
  </header>

  <main class="auth-content-container">
    <section class="auth-box">
      <header class="auth-box-header">
        <h2 class="auth-box-header__title">Welcome</h2>
      </header>

      <!-- custom form -->
      <slot />
    </section>
  </main>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.auth-header {
  &__title {
  }
}

.auth-content-container {
}

.auth-box {
}

.auth-box-header {
  &__title {
  }
}
</style>
