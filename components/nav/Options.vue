<template>
  <button v-if="!isMoon">
    <img src="@/public/icons/moon.svg" alt="moon" />
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
.hamburger {
  position: relative;
  padding: 1rem;
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
    top: 7px;
  }

  &::after {
    top: -7px;
  }
}
</style>
