<template>
  <header class="header-container">
    <HeaderLogo />

    <!-- <Teleport to="body">
      <BaseNav view="mobile" />
    </Teleport> -->

    <BaseNav view="desktop" />
  </header>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.header-container {
  justify-content: space-between;
  background-color: var(--yellow);
}
</style>
