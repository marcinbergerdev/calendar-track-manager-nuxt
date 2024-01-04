import { defineStore } from "pinia";
import { SelectedDay } from "@/types/Date";

export const useEditor = defineStore("editor", () => {
   const selectedDay: SelectedDay = reactive({ id: 0, day: 0, year: 0 });

   const isEditor = ref<boolean>(false);
   const isEvent = ref<boolean>(false);
   const isEditorOptions = ref<boolean>(false);

   const isSelectedOtherDay = computed(() => {
      return (selectedDay: number | null, id: number): boolean => {
         return selectedDay !== id;
      };
   });

   const selectDayAndOpenEditor = (id: number, day: number, year: number) => {
      isEditorOptions.value =
         !isEditorOptions.value || isSelectedOtherDay.value(selectedDay.id, id);

      if (isEditorOptions.value) {
         setSelectedDay(id, day, year);
         return;
      }

      setDefaultValueForSelectedDay();
   };

   const setSelectedDay = (id: number, day: number, year: number) => {
      selectedDay.id = id;
      selectedDay.day = day;
      selectedDay.year = year;
   };

   const setDefaultValueForSelectedDay = () => {
      selectedDay.id = 0;
      selectedDay.day = 0;
      selectedDay.year = 0;
   };

   const openEditor = () => {
      if (isEvent.value) isEvent.value = false;
      isEditor.value = true;
   };

   const openEventList = () => {
      if (isEditor.value) isEditor.value = false;
      isEvent.value = true;
   };

   const closeEditorAndEvent = () => {
      if (isEditor.value || isEvent.value) {
         isEvent.value = false;
         isEditor.value = false;
         setDefaultValueForSelectedDay()
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
      closeEditorAndEvent
   };
});
