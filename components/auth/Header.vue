<template>
  <header class="auth-header">
    <h1 class="auth-header__title">Calendar Track Manager</h1>

    <BaseOptions :is-moon="true" :is-hamburger="false"></BaseOptions>
  </header>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.auth-header {
  display: flex;

  @media (width >= 768px) {
  }

  &__title {
    @media (width >= 768px) {
    }
  }

  &__link {
    @media (width >= 768px) {
    }
  }
}
</style>
