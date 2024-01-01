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
      closeEditorAndEvent();
      isEditorOptions.value =
         !isEditorOptions.value ||
         isSelectedOtherDay.value(selectedDay.value, id);

      selectedDay.value = id;
   };

   const openEditor = () => {
      if (isEvent.value) isEvent.value = false;
      isEditor.value = true;
   };

   const openEventList = () => {
      if (isEditor.value) isEditor.value = false;
      isEvent.value = true;
   };

   const closeOptions = () => {
      isEditorOptions.value = false;
   };

   const closeEditorAndEvent = () => {
      if (isEditor.value || isEvent.value) {
         isEvent.value = false;
         isEditor.value = false;
      }
   };

   return {
      selectedDay,
      isEditor,
      isEvent,
      isEditorOptions,
      selectDayAndOpenEditor,
      openEditor,
      openEventList,
      closeOptions,
   };
});
