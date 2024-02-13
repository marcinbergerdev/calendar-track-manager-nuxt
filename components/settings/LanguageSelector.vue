<template>
  <article class="settings-language-selector-container">

    <label for="languages" class="languages-title">{{ $t('settings.langSelector.title') }}</label>
    <select
      name="languages"
      id="languages"
      class="languages-selector"
      v-model="selectedLanguage"
    >
      <option value="">{{$t('settings.langSelector.defaultValue')}}</option>
      <option value="de">DE</option>
      <option value="pl">PL</option>
      <option value="en">EN</option>
    </select>
  </article>
</template>

<script setup lang="ts">
const { locale } = useI18n();
const globalLang = useCookie("lang");
const selectedLanguage = ref(globalLang);

watch(selectedLanguage, (lang) => {
  globalLang.value = lang;
  if (!!lang) locale.value = lang;
  location.reload();
});
</script>

<style scoped lang="scss">
.settings-language-selector-container {
  grid-area: language;
  flex: 1;

  display: flex;
  flex-direction: column;
  gap: 1rem 0;
  width: min(40rem, 100%);
}

.languages-title {
  font-size: 2rem;
  color: var(--text-clr-drk);
}

.languages-selector {
  padding: 0.4rem;
  width: 70%;
  background-color: var(--bg-clr);
  color: var(--text-clr-drk);
  border-radius: 0.5rem;
  outline: none;

  @media (width > 768px) {
    cursor: pointer;
  }
}
</style>
