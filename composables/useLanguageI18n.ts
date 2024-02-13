export const useLanguageI18n = () => {
   const lang = useCookie("lang", {
      sameSite: 'strict',
      default: () => 'en',
      maxAge: 2592000, // 30 days in seconds
    });
   const { locale } = useI18n();

   if (!!lang.value) {
      locale.value = lang.value;
   }
};
