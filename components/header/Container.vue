<template>
  <header class="header-container">
    <HeaderLogo />

    <!-- Nav menu for mobile and teleported to body -->

    <ClientOnly>
      <Teleport to="body">
        <BaseNav
          view="mobile"
          v-if="menu.mobile"
          :menu-visibility="isMenu"
          :is-moon="menu.mobile"
        />
      </Teleport>
    </ClientOnly>

    <!-- Nav menu for desktop -->
    <BaseNav view="desktop" />
  </header>
</template>

<script setup lang="ts">
import { useUserWidthSize } from "~/store/userWidthSize";
const menu = useUserWidthSize();
const isMenu = useMenuVisibility();
</script>

<style scoped lang="scss">
.header-container {
  padding: 1rem;
  justify-content: space-between;
  background-color: var(--yellow);

  @media (width >= 768px) {
    padding: 1.150rem 1rem;
  }
}
</style>
