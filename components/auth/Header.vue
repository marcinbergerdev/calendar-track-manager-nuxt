<template>
  <header class="auth-header">
    <h1 class="auth-header__title">Calendar Track Manager</h1>
    <NavOptions :is-hamburger="false"></NavOptions>
    <NuxtLink class="auth-header__link" to="/login" v-if="isRedirectionLink">
      <img src="@/public/icons/back.svg" alt="back" />
    </NuxtLink>
  </header>
</template>

<script setup lang="ts">
const route = useRoute();
const isRedirectionLink = ref(false);

watch(
  () => route.path,
  (path) => {
    if (path === "/signup") {
      isRedirectionLink.value = true;
      return;
    }
    isRedirectionLink.value = false;
  },
  { deep: true, immediate: true }
);
</script>

<style scoped lang="scss">
.auth-header {
  @media (width >= 768) {
  }

  &__title {
    @media (width >= 768) {
    }
  }

  &__link {
    display: inline-blockk;
    @media (width >= 768) {
    }
  }
}
</style>
