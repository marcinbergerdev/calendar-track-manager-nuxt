import { defineStore } from "pinia";
import { NoteSelected } from "~/types/Notes";

export const useNotes = defineStore("notes", () => {
   const isManager = ref(false);
   const isSpinner = ref(false);
   const isComponent = ref<"editor" | "details">("editor");

   const selectedTask = ref<NoteSelected | null>(null);

   const colors = [
      { name: "#808080" },
      { name: "#821C4D" },
      { name: "#248279" },
      { name: "#102546" },
      { name: "#1D801D" },
      { name: "#1C1C7D" },
      { name: "#161616" },
   ];

   const openAndSetModal = (component: "editor" | "details") => {
      isManager.value = true;
      isComponent.value = component;
   };

   const closeModal = () => {
      isManager.value = false;
      selectedTask.value = null;
   };

   return {
      selectedTask,
      colors,
      isManager,
      isSpinner,
      isComponent,
      openAndSetModal,
      closeModal,
   };
});
