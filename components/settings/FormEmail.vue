<template>
  <form class="settings-form" @submit.prevent="changeEmailHandler">
    <div class="settings-form-box">
      <input
        class="settings-form-box__input"
        type="text"
        placeholder="Obecny e-mail"
        v-model.trim="userEmail"
      />
      
      <input
        class="settings-form-box__input"
        type="text"
        placeholder="Nowy e-mail"
        v-model.trim="userNewEmail"
      />

      <input
        class="settings-form-box__input"
        type="text"
        placeholder="Confirm with password"
        v-model.trim="confirmPassword"
      />
    </div>
    <BaseButton type="submit" view="filled" class="settings-form__modal-button">Save</BaseButton>
  </form>
</template>

<script setup lang="ts">
const userEmail = ref("");
const userNewEmail = ref("");
const confirmPassword = ref("");

const changeEmailHandler = () => {
  console.log("asdsad");
};
</script>

<style scoped lang="scss">
.settings-form {
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 3rem 0;
  width: 100%;

  &__modal-button{
    padding: 0.5rem 0;
    width: 15rem;

    background-color: var(--edit-clr);
  }
}

.settings-form-box {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3rem 0;
  
  width: 100%;

  &__input {
    width: 80%;
    padding: 1rem;
    background-color: transparent;
    border: 0;
    border: 1px solid var(--text-clr-drk);
    outline: none;
    color: var(--text-clr-drk);
    border-radius: 1.5rem;
  }
}
</style>
