import { defineStore } from "pinia";
import { SelectedDay, EventElement } from "@/types/Date";

export const useEditor = defineStore("editor", () => {
   const selectedDay: SelectedDay = reactive({ id: 0, year: 0 });
   const selectedEvent = ref<EventElement | null>(null);

   const isEditor = ref<boolean>(false);
   const isEvent = ref<boolean>(false);
   const isEditorOptions = ref<boolean>(false);


   const isSelectedOtherDay = computed(() => {
      return (selectedDay: number | null, id: number): boolean => {
         return selectedDay !== id;
      };
   });

   const selectDayAndOpenEditor = (id: number, year: number) => {
      isEditorOptions.value =
         !isEditorOptions.value || isSelectedOtherDay.value(selectedDay.id, id);

      if (isEditorOptions.value) {
         closeEditorAndEvent();
         setSelectedDay(id, year);
         return;
      }

      setDefaultValueForSelectedDay();
   };

   const setSelectedDay = (id: number, year: number) => {
      selectedDay.id = id;
      selectedDay.year = year;
   };

   const setDefaultValueForSelectedDay = () => {
      selectedDay.id = 0;
      selectedDay.year = 0;
      selectedEvent.value = null;
   };

   const setNewEventDataInput = (newEventData: EventElement) => {
      selectedEvent.value = newEventData;
   };

   const openEditor = () => {
      if (isEvent.value) {
         isEvent.value = false;
      }
      isEditor.value = true;
   };

   const openEventList = () => {
      if (isEditor.value) {
         isEditor.value = false;
         selectedEvent.value = null;
      }
      isEvent.value = true;
   };

   const closeEditorAndEvent = () => {
      if (isEditor.value || isEvent.value) {
         isEvent.value = false;
         isEditor.value = false;
         setDefaultValueForSelectedDay();
      }
   };

   return {
      selectedDay,
      selectedEvent,
      isEditor,
      isEvent,
      isEditorOptions,
      selectDayAndOpenEditor,
      setNewEventDataInput,
      openEditor,
      openEventList,
      closeEditorAndEvent,
   };
});
