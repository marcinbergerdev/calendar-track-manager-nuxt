<template>
  <div class="settings-container">
    <header>
      <SettingsHeader />
    </header>

    <section class="settings-account-data">
      <SettingsAccountData />
      <SettingsAccountDelete />
    </section>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.settings-container {
  height: 100%;
  padding: 2rem 1rem;
  background-color: rgb(36, 27, 27);
}

.settings-account-data {
}
</style>
