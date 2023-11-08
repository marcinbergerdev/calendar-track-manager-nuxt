<template>
  <HeaderContainer />

  <main class="content-container">
    <slot />
  </main>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.content-container {
  height: calc(100vh - 5rem);
  overflow: auto;
  background-color: var(--bg-clr);

}
</style>
