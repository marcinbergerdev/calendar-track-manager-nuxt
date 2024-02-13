<template>
  <HeaderContainer />

  <main class="main-content-container">
    <slot />
  </main>
</template>

<script setup lang="ts">
  useLanguageI18n();
</script>

<style scoped lang="scss">
.main-content-container {
  width: 100%;
  height: calc(100vh - 9.2rem);
  background-color: var(--bg-clr);

  @media (width >= 268px) {
    height: calc(100vh - 6.8rem);
  }

  @media (width >= 360px) {
    height: calc(100vh - 5rem);
  }
}
</style>
