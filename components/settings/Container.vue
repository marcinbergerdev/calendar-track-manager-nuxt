<template>
  <div class="settings-container">
    <SettingsHeader />

    <section class="settings-account-data-container">
      <SettingsAccountData @set-option="setDataOption" />
      <SettingsAccountDelete />
    </section>

    <Teleport to="body">
      <SettingsOptionsModal v-if="isSettingsModal" @close-modal="closeModal">
      
        <template #header> Hasło </template>

        <template #default>
          <SettingsFormPassword />
        </template>

      </SettingsOptionsModal>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
const isSettingsModal = ref(false);

const setDataOption = () => {
  isSettingsModal.value = true;
};

const closeModal = () => {
  isSettingsModal.value = false;
};
</script>

<style scoped lang="scss">
.settings-container {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  height: 100%;
  padding: 3rem 1rem;
  @media (width > 768px) {
    padding: 2rem;
  }
}

.settings-account-data-container {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 5rem 0;
  padding: 3.5rem 0 3rem 0;
  color: var(--text-clr-drk);
  overflow: auto;

  @media (width > 768px) {
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-around;
    gap: 0 4rem;
    margin-top: 5rem;
  }
}
</style>
