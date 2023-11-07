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
      const resetValue: Modal = reactive({
         title: "",
         content: "",
         confirm: false,
      });
      setValues(resetValue);
   };


   return { isModal, values, setValues, resetValues };
});
