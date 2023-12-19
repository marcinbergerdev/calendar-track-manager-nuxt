import { defineStore } from "pinia";

export const useModal = defineStore("dialog", () => {
   interface Modal {
      [key: string]: string | boolean;
   }

   const isModal = ref<boolean>(false);

   const values: Modal = reactive({
      title: "",
      content: "",
      confirm: false,
   });

   const setValues = (modalData: Modal) => {
      for (const data in modalData) {
         values[data] = modalData[data];
      }
   };

   const resetValues = () => {
      values.title = "";
      values.content = "";
      values.confirm = false;
   };

   return { isModal, values, setValues, resetValues };
});
