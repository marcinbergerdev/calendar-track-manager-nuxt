import { defineStore } from "pinia";
import { SelectedDay, EventElement } from "@/types/Date";

export const useEditor = defineStore("editor", () => {
   const selectedDay = reactive<SelectedDay>({});
   const selectedEvent = ref<EventElement | null>(null);

   const isEditor = ref<boolean>(false);
   const isEvents = ref<boolean>(false);
   const isEditorOptions = ref<boolean>(false);

   const isSelectedOtherDay = computed(() => {
      return (id: number): boolean => {
         return selectedDay.id !== id;
      };
   });

   const toggleEditorAndSetDay = (id: number, year: number) => {
      if (isEditorOptions.value && !isSelectedOtherDay.value(id)) {
         return closeEditorOptions();
      }

      closeEditorAndEvent();
      setSelectedDay(id, year);
      isEditorOptions.value = true;
   };

   const setSelectedDay = (id: number, year: number) => {
      if (selectedDay) {
         selectedDay.id = id;
         selectedDay.year = year;
      }
   };

   const closeEditorOptions = () => {
      isEditorOptions.value = false;
      closeEditorAndEvent();
      return;
   };

   const closeEditorAndEvent = () => {
      if (isEditor.value || isEvents.value) {
         isEvents.value = false;
         isEditor.value = false;
         setDefaultValueForSelectedDay();
      }
   };

   const setDefaultValueForSelectedDay = () => {
      selectedDay.id = 0;
      selectedDay.year = 0;
      selectedEvent.value = null;
   };

   const openEditor = () => {
      if (isEvents.value) isEvents.value = false;
      isEditor.value = true;
   };

   const openEventList = () => {
      if (isEditor.value) {
         isEditor.value = false;
         selectedEvent.value = null;
      }
      isEvents.value = true;
   };

   const setNewEventDataInput = (newEventData: EventElement) => {
      selectedEvent.value = newEventData;
   };

   return {
      selectedDay,
      selectedEvent,
      isEditor,
      isEvents,
      isEditorOptions,
      toggleEditorAndSetDay,
      setNewEventDataInput,
      openEditor,
      openEventList,
      closeEditorAndEvent,
   };
});
