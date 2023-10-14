<template>
  <ClientOnly>
    <nav :class="`${view}-nav-container`">
      <ul class="nav-links" v-if="isDesktop || isMobile">
        <NavLinks />
      </ul>

      <section class="nav-options">
        <NavOptions :is-hamburger="isDesktop" :is-moon="isMobile"/>
      </section>

      <ul class="nav-auth-list" v-if="isDesktop || isMobile">
        <NavAuth />
      </ul>

      <section class="nav-settings" v-if="isDesktop || isMobile">
        <NavSettings />
      </section>
    </nav>
  </ClientOnly>
</template>

<script setup lang="ts">
import { useUserWidthSize } from "~/store/userWidthSize";

const userWidth = useUserWidthSize();

const { view, isDesktopView, isMobileView } = defineProps<{
  view: string;
  isDesktopView?: boolean;
  isMobileView?: boolean;
}>();

const isDesktop = computed<boolean>(() => {
  const width = userWidth.desktopWidth;

  return isDesktopView && width;
});

const isMobile = computed<boolean>(() => {
  const width = userWidth.mobileWidth;
  return isMobileView && width;
});
</script>

<style scoped lang="scss">
.desktop-nav-container {
  flex: 1;
  justify-content: flex-end;
}

.nav-links {
  flex: 1;
}

.nav-container {
}

.nav-links {
}

.nav-options {
}

.nav-auth-list {
}

.nav-settings {
}

.mobile-nav-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: var(--yellow);
  .nav-links {
    // flex: 1;
  }

  .nav-container {
  }

  .nav-links {
    // align-items: baseline;
  }

  .nav-options {
  }

  .nav-auth-list {
  }

  .nav-settings {
  }
}
</style>
