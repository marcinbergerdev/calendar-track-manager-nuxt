export const useLanguageI18n = () => {
   const lang = useCookie("lang");
   const { locale } = useI18n();

   if (!!lang.value) {
      locale.value = lang.value;
   }
};
