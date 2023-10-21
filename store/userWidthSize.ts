import { defineStore } from "pinia";

export const useUserWidthSize = defineStore("userWidthSize", () => {
   const { width } = useWindowSize();

   const mobile = computed(() => {
      return width.value < 768 ? true : false;
   });
   
   const desktop = computed(() => {
      return width.value >= 768 ? true : false;
   });

   return { mobile, desktop };
});
