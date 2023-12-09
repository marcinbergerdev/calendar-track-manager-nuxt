export default defineNuxtPlugin(() => {
   const dayjs = useDayjs();
   const selectedUserLocalLang = navigator.language || navigator.languages[0];
   dayjs.locale(selectedUserLocalLang);
});
