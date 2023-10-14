<template>
  <button class="dark-mode-button" v-if="!isMoon">
    <img class="dark-mode-button__icon" src="@/public/icons/moon.svg" alt="moon" />
  </button>

  <button class="hamburger" v-if="!isHamburger">
    <div class="hamburger-inner"></div>
  </button>
</template>

<script setup lang="ts">
const { isHamburger, isMoon } = defineProps<{
  isHamburger?: boolean;
  isMoon?: boolean;
}>();
</script>

<style scoped lang="scss">
.dark-mode-button {
  width: 3rem;
  height: 3rem;
  &__icon {
    width: 100%;
    height: 100%;
  }
}

.hamburger {
  position: relative;
  padding: 1rem;
  width: 3rem;
  height: 3rem; 
  color: var(--white);
  opacity: 0.7;

  @media(width >= 768px){
    width: 0;
    height: 0;
  }
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
</style>
