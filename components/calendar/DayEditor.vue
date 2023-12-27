<template>
  <div class="editor-container" v-if="isEditor">
    <section class="editor-title">
      <input class="editor-title__input" type="text" placeholder="Tytuł..." />

      <div class="editor-notifications-container">
        <label class="notification-switch">
          <input class="notification-switch__input" type="checkbox" checked />
          <span
            class="notification-switch__slider checked"
            @click="setNotificationStatus"
            :class="calculateNotificationStatus"
          >
            <svg
              v-if="!isNotification"
              class="notification-switch__slider-icon"
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 15 15"
            >
              <path
                fill="currentColor"
                fill-rule="evenodd"
                d="M11.467 3.727c.289.189.37.576.181.865l-4.25 6.5a.625.625 0 0 1-.944.12l-2.75-2.5a.625.625 0 0 1 .841-.925l2.208 2.007l3.849-5.886a.625.625 0 0 1 .865-.181"
                clip-rule="evenodd"
              />
            </svg>

            <svg
              v-else
              class="notification-switch__slider-icon"
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 256 256"
            >
              <path
                fill="currentColor"
                d="M208.49 191.51a12 12 0 0 1-17 17L128 145l-63.51 63.49a12 12 0 0 1-17-17L111 128L47.51 64.49a12 12 0 0 1 17-17L128 111l63.51-63.52a12 12 0 0 1 17 17L145 128Z"
              /></svg
          ></span>
        </label>

        <div class="notifications-title">
          <svg
            class="notifications-title__icon"
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M4 19v-2h2v-7q0-2.075 1.25-3.687T10.5 4.2v-.7q0-.625.438-1.062T12 2q.625 0 1.063.438T13.5 3.5v.7q2 .5 3.25 2.113T18 10v7h2v2zm8 3q-.825 0-1.412-.587T10 20h4q0 .825-.587 1.413T12 22"
            />
          </svg>
          <p class="notifications-title__text">Powiadomienia</p>
        </div>

        <input class="notifications-time-selector" type="time" />
      </div>
    </section>

    <section class="editor-text">
      <article class="editor-note">
        <label class="editor-note__title" for="message">Notatka...</label>
        <textarea class="editor-note__message" name="message" id="message"></textarea>
      </article>

      <article class="editor-actions">
        <BaseButton mode="filled-lt" class="editor-actions__button" @click="closeEditor"
          >Wyjdź</BaseButton
        >
        <BaseButton mode="filled-lt" class="editor-actions__button" @click="saveEvent"
          >Zapisz</BaseButton
        >
      </article>
    </section>
  </div>
</template>

<script setup lang="ts">
const [isNotification, toggleNotification] = useToggle();
const isEditor = useEditorVisibility();

const calculateNotificationStatus = computed(() => {
  return !isNotification.value ? "checked" : "not-checked";
});

const setNotificationStatus = () => {
  toggleNotification();
};

const saveEvent = () => {};

const closeEditor = () => {
  isEditor.value = false;
};
</script>

<style scoped lang="scss">
.editor-container {
  position: absolute;
  top: 0;
  right: 0;
  z-index: 10;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem 0;

  padding: 2rem 0;
  width: 100%;
  height: 100vh;
  overflow: auto;
  background-color: var(--primary-clr);

  @media (width >= 950px) {
    width: 26rem;
    height: 35rem;
    top: 50%;
    right: -13%;
    transform: translate(13%, -50%);
    border: 2px solid var(--bg-clr);
    border-radius: 2rem;
  }
}

.editor-title {
  width: 85%;

  &__input {
    padding: 0.7rem 1rem;
    width: 100%;
    font-size: 1.6rem;
    outline: none;
    border-radius: 0.8rem;
    border: 0;
    background-color: var(--bg-clr);
    color: var(--text-clr);
  }
}

.editor-notifications-container {
  display: grid;
  grid-template-areas:
    "time title"
    "time switch";
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 2fr;
  gap: 1rem 0;

  margin-top: 3rem;
}

.notification-switch {
  position: relative;
  grid-area: switch;
  justify-self: flex-end;

  width: 6.7rem;
  height: 2.9rem;
  border-radius: 2rem;
  background-color: var(--bg-clr);
  pointer-events: none;

  &__input {
    position: absolute;
    opacity: 0;
  }

  &__slider {
    position: absolute;
    top: 50%;
    right: 24px;
    transform: translateY(-50%);
    transition: transform 0.3s ease-in-out;

    height: 80%;
    color: var(--text-clr);
    border-radius: 3rem;
    pointer-events: auto;

    @media (width >= 950px) {
      cursor: pointer;
    }

    &-icon {
      display: grid;
      place-items: center;

      width: 100%;
      height: 100%;
    }
  }
}

.notifications-title {
  grid-area: title;
  justify-self: flex-end;
  display: flex;
  align-items: center;
  font-size: 1.8rem;
  color: var(--text-clr);

  @media (width >= 950px) {
    font-size: 1.5rem;
  }
}

.notifications-time-selector {
  grid-area: time;
  height: 3rem;
}

.checked {
  transform: translate(20px, -50%);
  background-color: var(--success-clr);
}

.not-checked {
  transform: translate(-15px, -50%);
  background-color: var(--error-clr);
}
.editor-text {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 2rem 0;
  width: 85%;
}

.editor-note {
  display: flex;
  flex-direction: column;
  gap: 1rem 0;
  height: 80%;

  &__title {
    color: var(--text-clr);
    font-size: 2rem;
  }

  &__message {
    height: 100%;
    resize: none;
    padding: 1rem;
    color: var(--text-clr);
    background-color: var(--bg-clr);
    letter-spacing: 1px;
    outline: none;
    border: 0;
  }
}

.editor-actions {
  display: flex;
  justify-content: center;
  gap: 0 4rem;

  &__button {
    font-size: 2rem;
    padding: 0.5rem 1rem;
  }
}
</style>
~/composables/states