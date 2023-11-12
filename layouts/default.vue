<template>
  <HeaderContainer />

  <main class="content-container">
    <slot />
  </main>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.content-container {
  display: grid;
  place-items: center;
  padding: 3rem 0;
  height: calc(100vh - 9.2rem);
  background-color: var(--bg-clr);
  overflow: auto;
  
  @media (width >= 268px) {
    height: calc(100vh - 6.8rem);
  }

  @media (width >= 360px) {
    height: calc(100vh - 5rem);
  }
}
</style>
