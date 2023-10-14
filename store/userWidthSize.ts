import { defineStore } from "pinia";

export const useUserWidthSize = defineStore("userWidthSize", () => {
   const { width } = useWindowSize();

   const mobileWidth = computed(() => {
      return width.value < 768 ? true : false;
   });
   
   const desktopWidth = computed(() => {
      return width.value >= 768 ? true : false;
   });

   return { mobileWidth, desktopWidth };
});
