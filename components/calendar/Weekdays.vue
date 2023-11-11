<template>
  <ul class="weeks-list">
    <li class="weeks-list__week" v-for="(day, id) in weekdays" :key="id">{{ day }}</li>
  </ul>
</template>

<script setup lang="ts">
const weekdays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
</script>

<style scoped lang="scss">

.months-list{
  

  &__week{
    
  }
}

</style>
