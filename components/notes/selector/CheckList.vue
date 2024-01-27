<template>
  <section class="selector-checklist-container">
    <h3 class="selector-checklist-title">Tasks</h3>

    <BaseButton view="empty" class="selector-add-task">
      <p class="selector-add-task__text">Add</p>

      <span class="selector-add-task__box">
        <svg
          class="selector-add-task__box-icon"
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
        >
          <path fill="currentColor" d="M11.5 12.5H6v-1h5.5V6h1v5.5H18v1h-5.5V18h-1z" />
        </svg>
      </span>
    </BaseButton>

    <!-- <p class="selector-empty-checklist">Your list is empty.</p> -->

    <ul class="selector-checklist">
      <NotesSelectorCheckListItem :te="1"></NotesSelectorCheckListItem>
      <NotesSelectorCheckListItem :te="2"></NotesSelectorCheckListItem>
      <NotesSelectorCheckListItem :te="3"></NotesSelectorCheckListItem>
      <NotesSelectorCheckListItem :te="4"></NotesSelectorCheckListItem>
      <NotesSelectorCheckListItem :te="5"></NotesSelectorCheckListItem>
      <NotesSelectorCheckListItem :te="6"></NotesSelectorCheckListItem>
      <NotesSelectorCheckListItem :te="7"></NotesSelectorCheckListItem>
      <NotesSelectorCheckListItem :te="8"></NotesSelectorCheckListItem>
      <NotesSelectorCheckListItem :te="9"></NotesSelectorCheckListItem>
      <NotesSelectorCheckListItem :te="10"></NotesSelectorCheckListItem>
      <NotesSelectorCheckListItem :te="11"></NotesSelectorCheckListItem>
      <NotesSelectorCheckListItem :te="12"></NotesSelectorCheckListItem>
      <NotesSelectorCheckListItem :te="13"></NotesSelectorCheckListItem>
      <NotesSelectorCheckListItem :te="14"></NotesSelectorCheckListItem>
      <NotesSelectorCheckListItem :te="15"></NotesSelectorCheckListItem>
      <NotesSelectorCheckListItem :te="16"></NotesSelectorCheckListItem>
    </ul>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.selector-checklist-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem 0;
  flex: 1;
  width: 100%;
  min-height: 25rem;
  max-height: 46vh;
  overflow: hidden;

  @media (width >= 768px) {
    max-height: 40vh;
    align-items: flex-start;
  }
}

.selector-checklist-title {
  font-size: 2.3rem;
  color: var(--text-clr);
}

.selector-add-task {
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0.5rem 1.5rem;
  width: min(100%, 20rem);
  border: 2px solid var(--text-clr);
  border-radius: 2.5rem;

  @media (width >= 768px) {
    border-radius: 3rem;
    margin: 0;
  }

  &__text {
    font-size: 1.6rem;
  }

  &__box {
    display: block;
    border: 1px solid var(--text-clr);
    border-radius: 2.5rem;

    &-icon {
      display: flex;
      font-size: 2.5rem;
    }
  }
}

.selector-empty-checklist {
  width: 100%;
  font-size: 2rem;
  margin-top: 6rem;
  text-align: center;
  color: var(--text-clr);
}

.selector-checklist {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  margin-top: 2rem;
  overflow: auto;

  @media (width >= 768px) {
    align-items: flex-start;
    justify-content: center;
    flex-flow: wrap row;
  }
}
</style>
