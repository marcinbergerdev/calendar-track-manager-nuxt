<template>
  <section class="selector-message">
    <label for="message">Event</label>
    <textarea name="message" id="message" placeholder="message..."></textarea>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.selector-message {
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
  gap: 0.8rem 0;
  width: 100%;

  label {
    font-size: 2.3rem;
    color: var(--text-clr)
  }

  textarea {
    padding: 0.9rem 1.5rem;
    min-height: 17rem;
    height: 100%;
    max-height: 70%;
    font-size: 1.8rem;
    color: var(--text-clr);
    background: transparent;
    border-radius: 1rem;
    border: 0;
    outline: 2px solid var(--text-clr);
    resize: none;
    &:focus {
      box-shadow: 0px 0px 10px rgba(#fff, 0.8);
    }
  }
}
</style>
