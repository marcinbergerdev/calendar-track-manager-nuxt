<template>
  <header class="header-container">
    <HeaderLogo />

    <!-- Nav menu for mobile and teleported to body -->
    <Teleport to="body">
      <BaseNav view="mobile" v-if="userDevice" :menu-visibility="isMenu"/>
    </Teleport>

    <!-- Nav menu for desktop -->
    <BaseNav view="desktop"/>
  </header>
</template>

<script setup lang="ts">
const userDevice = useUserDeviceStatus();
const isMenu = useMenuVisibility();
</script>

<style scoped lang="scss">
.header-container {
  padding: 1rem;
  justify-content: space-between;
  background-color: var(--yellow);

  @media (width >= 768px) {
    padding: 0.5rem 1rem;
  }
}
</style>
