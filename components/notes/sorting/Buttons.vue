<template>
  <section class="sorting-container">
    <div class="sorting-box">
      <BaseButton class="sorting-box__button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M7 9V7h14v2H7Zm0 4v-2h14v2H7Zm0 4v-2h14v2H7ZM4 9q-.425 0-.713-.288T3 8q0-.425.288-.713T4 7q.425 0 .713.288T5 8q0 .425-.288.713T4 9Zm0 4q-.425 0-.713-.288T3 12q0-.425.288-.713T4 11q.425 0 .713.288T5 12q0 .425-.288.713T4 13Zm0 4q-.425 0-.713-.288T3 16q0-.425.288-.713T4 15q.425 0 .713.288T5 16q0 .425-.288.713T4 17Z"
          />
        </svg>
      </BaseButton>

      <BaseButton class="sorting-box__button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M13 13h8v6q0 .825-.588 1.413T19 21h-6v-8Zm0-2V3h6q.825 0 1.413.588T21 5v6h-8Zm-2 0H3V5q0-.825.588-1.413T5 3h6v8Zm0 2v8H5q-.825 0-1.413-.588T3 19v-6h8Z"
          />
        </svg>
      </BaseButton>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.sorting-container {
}

.sorting-box {
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0.7rem 0.5rem;
  width: 9rem;
  border: 2px solid var(--text-clr);

  &__button {
    display: grid;
    place-items: center;
    font-size: 2.7rem;
  }
}
</style>
