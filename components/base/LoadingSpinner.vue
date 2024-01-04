<template>
  <div class="background" v-if="isBackground"></div>

  <div class="loading-spinner" :class="mode">
    <div class="circle"></div>
    <div class="orbit"></div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  mode?: string;
  isBackground: boolean;
}>();
</script>

<style scoped lang="scss">
.background {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;

  width: 100%;
  height: 100%;
  background-color: color-mix(in srgb, var(--bg-clr) 60%, transparent);
}

.loading-spinner {
  position: absolute;
  inset: 50% 50%;
  translate: -50% -50%;

  z-index: 15;

  height: 6rem;
  width: 6rem;
  animation: loading-spinner-animation infinite 1000ms ease;

  .orbit,
  .circle {
    height: 100%;
    width: 100%;
    border-radius: 50%;
  }

  .orbit {
    position: absolute;
    top: 0;
    border: calc(6rem * 0.03) solid var(--primary-clr);
    animation: loading-spinnerorbit-animation infinite 4000ms ease;
  }

  .circle {
    position: relative;
    display: block;
    color: var(--primary-clr);
    transform: rotate(0deg) scale(1);
    border: calc(6rem * 0.1) solid var(--primary-clr);
    animation: loading-spinner-circle-animation infinite 4000ms ease;
  }
}

.event {
  .circle {
    color: var(--bg-clr);
  }
}

@keyframes loading-spinner-animation {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

@keyframes loading-spinner-orbit-animation {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1);
  }
  62.5% {
    transform: scale(0.8);
  }
  75% {
    transform: scale(1);
  }
  87.5% {
    transform: scale(0.8);
  }
  100% {
    transform: scale(1);
  }
}

@keyframes loading-spinner-circle-animation {
  0% {
    transform: scale(1);
    border-color: transparent;
    border-top-color: inherit;
  }
  16.7% {
    border-color: transparent;
    border-top-color: initial;
    border-right-color: initial;
  }
  33.4% {
    border-color: transparent;
    border-top-color: inherit;
    border-right-color: inherit;
    border-bottom-color: inherit;
  }
  50% {
    border-color: inherit;
    transform: scale(1);
  }
  62.5% {
    border-color: inherit;
    transform: scale(1.4);
  }
  75% {
    border-color: inherit;
    transform: scale(1);
    opacity: 1;
  }
  87.5% {
    border-color: inherit;
    transform: scale(1.4);
  }
  100% {
    border-color: transparent;
    border-top-color: inherit;
    transform: scale(1);
  }
}
</style>
