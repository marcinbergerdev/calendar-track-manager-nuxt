<template>
  <!-- dark mode icons -->
  <BaseButton
    view="empty"
    class="dark-mode-button"
    v-if="isMoon"
    @click="switchDarkModeHandler"
  >
    <ClientOnly>
      <NuxtImg
        class="dark-mode-button__icon"
        :src="`/icons/${switchDarkModeIcon}`"
        alt="dark-mode"
      />
    </ClientOnly>
  </BaseButton>

  <!--hamburger  -->
  <BaseButton
    :view="isHamburgerActive"
    class="hamburger"
    v-if="isHamburger"
    @click="openMobileMenu"
  >
    <div class="hamburger-inner"></div>
  </BaseButton>
</template>

<script setup lang="ts">
const menuActivity = useMenuVisibility();
const isMobileMenu = useMenuVisibility();
const colorMode = useColorMode();

defineProps<{
  isMoon?: boolean;
  isHamburger?: boolean;
}>();

const isHamburgerActive = computed(() => {
  return { active: menuActivity.value };
});

const openMobileMenu = () => {
  isMobileMenu.value = !isMobileMenu.value;
};

const switchDarkModeIcon = computed<string>(() => {
  return colorMode.value === "dark" ? "sun.svg" : "moon.svg";
});

const switchDarkModeHandler = () => {
  colorMode.preference = colorMode.preference === "dark" ? "light" : "dark";
};
</script>

<style scoped lang="scss">
.dark-mode-button {
  width: 2.7rem;
  height: 2.7rem;

  &__icon {
    width: 100%;
    height: 100%;
  }
}

// default style for hamburger
.hamburger {
  position: relative;
  padding: 1rem;
  width: 3rem;
  height: 3rem;
  opacity: 0.7;
}

.hamburger-inner {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 2px;
  background-color: var(--hamburger-clr);

  &::before,
  &::after {
    content: "";
    position: absolute;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: var(--hamburger-clr);
  }

  &::before {
    top: 1rem;
  }

  &::after {
    top: -1rem;
  }
}
// default style for hamburger

// hamburger animation only mobile (menu mobile)
.mobile-nav-container {
  .nav-options {
    .hamburger-inner {
      transition: 0.1s 0.3s ease-in-out;

      &::before,
      &::after {
        transition: 0.5s ease-in-out;
      }
    }

    .active {
      .hamburger-inner {
        background-color: transparent;
        transition: 0.1s ease-in-out;

        &::before,
        &::after {
          top: 0;
          height: 3px;
          background-color: var(--hamburger-clr);
          transition: 0.5s ease-in-out;
        }

        &::before {
          transform: rotate(-45deg);
        }

        &::after {
          transform: rotate(45deg);
        }
      }
    }
  }
}
.desktop-nav-container {
  .nav-options {
    .hamburger {
      display: block;
      @media (width >= 768px) {
        display: none;
      }
    }
  }
}
// hamburger animation only mobile side (menu mobile)
</style>
