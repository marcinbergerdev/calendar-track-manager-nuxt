<template>
  <Teleport to="body">
    <div class="background"></div>

    <div class="selector-modal-container">
      <form class="selector-form" @submit.prevent="saveTask">
        <header class="selector-header">
          <div class="selector-input-box">
            <label for="taskMessage">Message</label>
            <input type="radio" id="taskMessage" name="option" checked />
          </div>

          <div class="selector-input-box">
            <label for="tasks">Checklist</label>
            <input type="radio" id="tasks" name="option" />
          </div>
        </header>

        <div class="selector-form-content">
          <section class="selector-title">
            <label for="title">Title</label>
            <input type="text" id="title" name="title" placeholder="title" />
          </section>

          <section class="selector-colors-variant">
            <div class="variants-box" v-for="(variant, id) in colorsVariant" :key="id">
              <label
                :for="variant.name"
                :style="{ 'background-color': variant.color}"
              ></label>
              <input
                type="radio"
                :id="variant.name"
                name="color"
                :checked="variant.checked"
              />
            </div>
          </section>

          <Component :is="renderingManagerOptions"> </Component>

          <section class="selector-interaction">
            <BaseButton view="border-lt" class="selector-interaction__button"
              >Close</BaseButton
            >
            <BaseButton
              view="border-lt"
              class="selector-interaction__button"
              type="submit"
              >Save</BaseButton
            >
          </section>
        </div>
      </form>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
const colorsVariant = [
  { name: "grey", color: "#BCBCBC", checked: true },
  { name: "purple", color: "#AF31CE" },
  { name: "yellow", color: "#FFBB24" },
  { name: "red", color: "#CA3F2C" },
  { name: "green", color: "#68C023" },
  { name: "blue", color: "#2159E9"},
  { name: "black", color: "#161616" },
];
const isChecklist = ref(false);

const NotesSelectorMessage = resolveComponent("NotesSelectorMessage");
const NotesSelectorCheckList = resolveComponent("NotesSelectorCheckList");

const renderingManagerOptions = computed(() => {
  if (isChecklist.value) return NotesSelectorCheckList;
  return NotesSelectorMessage;
});
</script>

<style scoped lang="scss">
.background {
  display: none;

  @media (width >= 768px) {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;

    display: block;
    width: 100%;
    height: 100vh;
    background-color: rgba(#000, 0.5);
  }
}

.selector-modal-container {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;

  width: min(95rem, 100%);
  height: 100vh;

  @media (width >= 768px) {
    inset: 50%;
    transform: translate(-50%, -50%);
    padding: 0 2rem;
    height: 80vh;
  }
}

.selector-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem 0;

  padding: 2rem 0;
  width: 100%;
  height: 100%;
  background-color: var(--primary-clr);
  overflow: auto;

  @media (width >= 768px) {
    border-radius: 3rem;
  }
}

.selector-header {
  position: relative;
  display: flex;
  align-items: center;
  gap: 0 2rem;

  padding: 1rem 2rem;
  font-size: 1.6rem;
  color: var(--text-clr);
  border: 2px solid var(--text-clr);
  border-radius: 5rem;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 50%;
    height: 100%;
    background-color: rgba(#fff, 0.2);
    border-radius: 5rem;
    outline: 2px solid var(--text-clr);
  }
}

.selector-form-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  flex: 1;
  gap: 3rem 0;
  width: min(100%, 85%);
}

.selector-input-box {
  input {
    display: none;
  }
}

.selector-title {
  display: flex;
  flex-direction: column;
  gap: 1rem 0;
  width: 100%;

  label {
    font-size: 2.3rem;
    color: var(--text-clr);
  }

  input {
    padding: 0.9rem 1.5rem;
    font-size: 1.6rem;
    color: var(--text-clr);
    background: transparent;
    border-radius: 1.5rem;
    border: 0;
    outline: 2px solid var(--text-clr);

    &:focus {
      box-shadow: 0px 0px 10px rgba(#fff, 0.8);
    }
  }
}

.selector-colors-variant {
  display: flex;
  flex-flow: wrap row;
  justify-content: center;
  width: 100%;
  gap: 2rem;
  
  @media (width >= 768px) {
    margin-top: 1rem;
  }
}

.variants-box {
  label {
    transform: rotate(45deg);
    display: block;
    width: 2rem;
    height: 2rem;
  }

  input {
    display: none;
  }
}

.selector-interaction {
  display: flex;
  gap: 0 3rem;

  &__button {
    padding: 0.4rem 1.5rem;
    border-radius: 2rem;

    @media (width >= 768px) {
      padding: 0.6rem 2.5rem;
    }
  }
}
</style>
