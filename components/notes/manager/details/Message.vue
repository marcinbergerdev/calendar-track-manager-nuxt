<template>
  <p class="details-message">{{ message }}</p>
</template>
  
<script setup lang="ts">
  defineProps<{
    message: any
  }>();
</script>
  
<style scoped lang="scss">
  .details-message{
    font-size: 1.7rem;
  }
</style>