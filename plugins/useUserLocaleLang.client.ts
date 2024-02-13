export default defineNuxtPlugin(() => {
   const dayjs = useDayjs();
   const lang = useCookie("lang");

   if (!lang.value) {
      lang.value = 'en';
   }

   dayjs.locale(lang.value);
});
