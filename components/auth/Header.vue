<template>
  <header class="auth-header">
    <h1 class="auth-header__title">Calendar Track Manager</h1>

    <BaseOptions :is-moon="true" :is-hamburger="false"></BaseOptions>
  </header>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.auth-header {
  justify-content: space-between;
  width: 100%;
  padding: 1.5rem;
  
  &__title {
    font-size: 2.3rem;
    font-weight: 400;
    color: var(--auth-title-clr);

    @media (width >= 768px) {
    }
  }
}
</style>
