<template>
  <div class="error-container" :class="view">
    <div class="error-box">
      <p class="error-box__message">
        {{ error }}
      </p>
    </div>

    <BaseButton
      view="border-lt"
      class="error-close-button"
      v-if="isCloseButton"
      @click="handleError"
      >Close</BaseButton
    >
  </div>
</template>

<script setup lang="ts">
import { useNotes } from "@/store/useNotes";
const notes = useNotes();

const { error, isCloseButton = true } = defineProps<{
  view?: string;
  error: Object;
  isCloseButton?: boolean;
}>();

const handleError = () => {
 console.log('działą handler');
};
</script>

<style scoped lang="scss">
.error-container {


  .error-box {
   

    &__message {
     
    }
  }

  .error-close-button {
  
  }
}

.error-selector-form {
 

  @media (width >= 768px) {
   
  }
}

.error-tasks-list {
 
}
</style>
