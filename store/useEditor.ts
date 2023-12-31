import { defineStore } from "pinia";

export const useEditor = defineStore("editor", () => {
   const selectedDay = ref<string | null>(null);
   const isEditor = ref<boolean>(false);
   const isEvent = ref<boolean>(false);
   const isEditorOptions = ref<boolean>(false);

   const isSelectedOtherDay = computed(() => {
      return (selectedDay: string | null, id: string): boolean => {
         return selectedDay !== id;
      };
   });

   const selectDayAndOpenEditor = (id: string) => {
      isEditorOptions.value =
         !isEditorOptions.value ||
         isSelectedOtherDay.value(selectedDay.value, id);

      selectedDay.value = id;
   };

   const closeOptions = () => {
      isEditorOptions.value = false;
   };

   return {
      selectedDay,
      isEditor,
      isEvent,
      isEditorOptions,
      selectDayAndOpenEditor,
      closeOptions,
   };
});
