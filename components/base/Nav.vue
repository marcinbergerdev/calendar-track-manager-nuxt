<template>
  <nav :class="[`${view}-nav-container`, { opened: menuVisibility }]">
    <ul class="nav-links">
      <NavLinks />
    </ul>

    <section class="nav-options">
      <BaseOptions :is-moon="isMoon" :is-hamburger="isHamburger"/>
    </section>

    <ul class="nav-auth-list">
      <NavAuth />
    </ul>

    <section class="nav-settings">
      <NavSettings />
    </section>
  </nav>
</template>

<script setup lang="ts">
const { view } = defineProps<{
  view: string;
  menuVisibility?: boolean;
  isMoon?: boolean;
  isHamburger?: boolean;
}>();
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
  z-index: 100;

  padding: 0.5rem 2rem;
  width: 100%;
  height: 100vh;
  background-color: var(--yellow);
  transition: transform 0.35s ease-in-out;

  @include default-grid;
  grid-template-areas:
    "settings options"
    "links links"
    "auth auth";
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 2fr 1fr;

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
    align-self: center;
    justify-self: flex-start;
  }
}
.opened {
  transform: translateX(100%);
  transition: 0.35s ease-in-out;
}

.desktop-nav-container {
  flex: 1;
  justify-content: flex-end;
  gap: 2rem;

  .nav-links {
    display: none;

    @media (width >= 768px) {
      display: flex;
      flex: 1;
      gap: 3rem;
    }
  }

  .nav-options {
    gap: 0 2rem;

    @media (width >= 768px) {
      gap: 0;
    }
  }

  .nav-auth-list, .nav-settings {
    display: none;
    @media (width >= 768px) {
      display: flex;
      gap: 0;
    }

  }
}
</style>
