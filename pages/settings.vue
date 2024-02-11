<template>
  <div class="settings-container">
    <header>
      <SettingsHeader />
    </header>

    <section class="settings-account-data-container">
      <SettingsAccountData @set-option="setDataOption" />
      <SettingsAccountDelete />
    </section>
  </div>

  <Teleport to="body">
    <SettingsOptionsModal v-if="isSettingsModal" @close-modal="closeModal">
      <template #header>
        {{ setOptionTitle }}
      </template>

      <template #default>

        <SettingsFormEmail v-if="setSettingsForm" />
        <SettingsFormPassword v-else />
        
      </template>
    </SettingsOptionsModal>
  </Teleport>
</template>

<script setup lang="ts">
const isSettingsModal = ref(false);
const selectedData = ref<"email" | "password">("email");

const setOptionTitle = computed(() => {
  return selectedData.value === "email" ? "Adres e-mail" : "Hasło";
});

const setSettingsForm = computed(() => {
  return selectedData.value === "email" ? true : false;
});

const setDataOption = (option: "email" | "password") => {
  selectedData.value = option;
  isSettingsModal.value = true;
};

const saveUserNewData = (event: any) => {
  console.log(event);
};
const saveUserNewData1 = (event: any) => {
  console.log(event);
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
