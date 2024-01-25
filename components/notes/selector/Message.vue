<template>
  <div class="selector-message">
    <label for="message">Event</label>
    <textarea name="message" id="message"></textarea>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.selector-message {
  display: flex;
  flex-direction: column;
  gap: 0.6rem 0;

  label {
    font-size: 2.3rem;
    color: var(--text-clr);
  }

  textarea {
    padding: 0.9rem 1.5rem;
    height: 24vh;
    font-size: 1.8rem;
    color: var(--text-clr);
    background: transparent;
    border-radius: 1rem;
    border: 0;
    outline: 2px solid var(--text-clr);
  }
}
</style>
