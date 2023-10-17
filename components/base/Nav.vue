<template>
  <ClientOnly>
    <nav :class="[`${view}-nav-container`, { opened: menuVisibility }]">
      <ul class="nav-links" v-if="isDesktop || isMobile">
        <NavLinks />
      </ul>

      <section class="nav-options">
        <NavOptions :is-hamburger="isDesktop" :is-moon="isMobile" />
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
  menuVisibility?: boolean;
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
.mobile-nav-container,
.desktop-nav-container {
  .nav-links {
    grid-area: links;
  }
  .nav-options {
    grid-area: options;
  }

  .nav-auth-list {
    grid-area: auth;
  }

  .nav-settings {
    grid-area: settings;
  }
}

.mobile-nav-container {
  position: absolute;
  top: 0;
  left: -100%;

  padding: 0.5rem 2rem;
  width: 100%;
  height: 100vh;
  background-color: var(--yellow);
  transition: transform .35s ease-in-out;

  @include default-grid;
  grid-template-areas:
    "options"
    "links"
    "settings"
    "auth";
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 2fr 1fr 2fr;

  .nav-links {
    flex-direction: column;
    align-self: center;
    gap: 4rem 0;
  }
  .nav-options {
    justify-self: flex-end;
  }

  .nav-auth-list {
    gap: 0 3rem;
  }

  .nav-settings {
    align-self: flex-end;
  }
}
.opened {
  transform: translateX(100%);
  transition: .35s ease-in-out;
}

.desktop-nav-container {
  flex: 1;
  justify-content: flex-end;
  gap: 2rem;

  .nav-links {
    flex: 1;
    gap: 3rem;
    @media (width >= 768px) {
    }
  }

  .nav-options {
    gap: 0 2rem;

    @media (width >= 768px) {
      gap: 0;
    }
  }
}
</style>
