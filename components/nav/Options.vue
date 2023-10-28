<template>
  <button class="dark-mode-button" v-if="!isMoon">
    <img class="dark-mode-button__icon" src="@/public/icons/moon.svg" alt="moon" />
  </button>

  <button class="hamburger" v-if="isHamburger" :class="isHamburgerActive" @click="openMobileMenu">
    <div class="hamburger-inner"></div>
  </button>
</template>

<script setup lang="ts">
const menuActivity = useMenuVisibility();

defineProps<{
  isMoon?: boolean;
  isHamburger?: boolean;
}>();

const isHamburgerActive = computed(() => {
  return { active: menuActivity.value };
});

const openMobileMenu = () => {
  const isMobileMenu = useMenuVisibility();
  isMobileMenu.value = !isMobileMenu.value;
};
</script>

<style scoped lang="scss">
.dark-mode-button {
  width: 3rem;
  height: 3rem;

  @media (width >= 768px) {
    width: 2.7rem;
    height: 2.7rem;
  }

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
  color: var(--white);
  opacity: 0.7;
}

.hamburger-inner {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 2px;
  background-color: var(--white);

  &::before,
  &::after {
    content: "";
    position: absolute;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: var(--white);
  }

  &::before {
    top: 1rem;
  }

  &::after {
    top: -1rem;
  }
}
// default style for hamburger

// hamburger animation only mobile side (menu mobile)
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
          background-color: var(--black);
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

    // .dark-mode-button {
    //   display: none;
    //   @media (width >= 768px) {
    //     display: block;
    //   }
    // }
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
