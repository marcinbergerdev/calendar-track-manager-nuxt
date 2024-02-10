<template>
<article>
  <div class="setting-user-data">
    <span class="setting-user-data__title">Adres e-mail</span>

    <div class="setting-change-box">
      <span class="setting-change-box__data">jankkowalski@op.pl</span>
      <BaseButton view="empty" class="setting-change-box__button">Zmień</BaseButton>
    </div>
  </div>

  <div class="setting-user-data">
    <span class="setting-user-data__title">Hasło</span>

    <div class="setting-change-box">
      <span class="setting-change-box__data">••••••••</span>
      <BaseButton view="empty" class="setting-change-box__button">Zmień</BaseButton>
    </div>
  </div>
</article>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">



.setting-user-data{
  &__title{

  }
}

.setting-change-box{
  &__data{

  }

  &__button{
    font-size: 1.5rem;
    color: var(--edit-clr);
  }
}





</style>
