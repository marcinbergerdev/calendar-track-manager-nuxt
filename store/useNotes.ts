import { defineStore } from "pinia";
import { NoteResponse } from "~/types/Notes";

export const useNotes = defineStore("notes", () => {
   const tasks = ref<NoteResponse[]>([]);
   const isNoteSelector = ref(false);

   const colors = [
      { name: "grey", color: "#BCBCBC" },
      { name: "purple", color: "#AF31CE" },
      { name: "yellow", color: "#FFBB24" },
      { name: "red", color: "#CA3F2C" },
      { name: "green", color: "#68C023" },
      { name: "blue", color: "#2159E9" },
      { name: "black", color: "#161616" },
   ];

   const closeModal = () => {
      isNoteSelector.value = false;
   };

   return { tasks, colors, isNoteSelector, closeModal };
});
