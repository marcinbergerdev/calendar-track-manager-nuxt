import { defineStore } from "pinia";

export const useModal = defineStore("dialog", () => {
   interface Modal {
      [key: string]: string | boolean;
   }

   const isModal = ref<boolean>(false);

   const modalValue: Modal = reactive({
      title: "",
      content: "",
      confirm: false,
   });

   const setModalValue = (modalData: Modal) => {
      for (const data in modalData) {
         modalValue[data] = modalData[data];
      }
   };

   const modalReset = () => {
      const resetValue: Modal = reactive({
         title: "",
         content: "",
         confirm: false,
      });

      for (const value in resetValue) {
         modalValue[value] = resetValue[value];
      }
   };

   return { isModal, modalValue, setModalValue, modalReset };
});
