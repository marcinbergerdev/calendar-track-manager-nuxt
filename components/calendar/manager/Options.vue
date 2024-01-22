<template>
  <section class="option-container">

    <BaseButton
      view="empty"
      class="option-container__button editButton"
      @click="openEditor"
    >
      Edytuj
    </BaseButton>


    <BaseButton view="empty" class="option-container__button" @click="openEventList">
      Zobacz
    </BaseButton>

  </section>
</template>

<script setup lang="ts">
import { useEditor } from "../../../store/useEditor";
const editor = useEditor();

const openEditor = () => {
  editor.openEditor();
};

const openEventList = () => {
  editor.openEventList();
};
</script>

<style scoped lang="scss">
.option-container {
  position: absolute;
  top: -8rem;
  left: 50%;
  z-index: 10;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  width: 9rem;
  height: 7.5rem;
  background-color: var(--primary-clr);

  border: 2px solid var(--bg-clr);
  border-radius: 1.5rem;

  @media (width >= 768px) {
    top: 50%;
    left: 115%;
    transform: translateY(-50%);
  }

  &__button {
    font-size: 1.4rem;

    &::before {
      content: "";
      position: absolute;
      inset: 50%;
      transform: translate(-50%);
      width: 90%;
      height: 0.15rem;
      background-color: var(--bg-clr);
      border-radius: 2rem;
    }

    @media (width >= 950px) {
    }
  }
}
</style>
