<template>
  <nav class="nav-container">
    <ul class="nav-links">
      <NavLinks />
    </ul>

    <section class="nav-options">
      <NavOptions />
    </section>

    <ul class="nav-auth-list">
      <NavAuth />
    </ul>

    <section class="nav-settings">
      <NavSettings />
    </section>
  </nav>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.nav-container,
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
</style>
