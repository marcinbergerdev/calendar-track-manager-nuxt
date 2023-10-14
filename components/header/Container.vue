<template>
  <header class="header-container">
    <HeaderLogo />

    <!-- Nav menu for mobile and teleported to body -->
    <!-- <ClientOnly>
      <Teleport to="body" v-if="width.mobileWidth">
        <BaseNav view="mobile" :is-mobile-view="true" />
      </Teleport>
    </ClientOnly> -->

    <!-- Nav menu for desktop -->
    <BaseNav view="desktop" :is-desktop-view="true" />
  </header>
</template>

<script setup lang="ts">
import { useUserWidthSize } from "~/store/userWidthSize";
const width = useUserWidthSize();
</script>

<style scoped lang="scss">
.header-container {
  justify-content: space-between;
  background-color: var(--yellow);
}
</style>
