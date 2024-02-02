import { defineStore } from "pinia";
import { NoteResponse ,NoteSelected, Task } from "~/types/Notes";

export const useNotes = defineStore("notes", () => {
   const isManager = ref(false);
   const isSpinner = ref(false);
   const isComponent = ref<"editor" | "details">("editor");

   const selectedTask = ref<NoteSelected | null>(null);
   

   const colors = [
      { name: "grey", color: "#BCBCBC" },
      { name: "purple", color: "#AF31CE" },
      { name: "yellow", color: "#FFBB24" },
      { name: "red", color: "#CA3F2C" },
      { name: "green", color: "#68C023" },
      { name: "blue", color: "#2159E9" },
      { name: "black", color: "#161616" },
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
