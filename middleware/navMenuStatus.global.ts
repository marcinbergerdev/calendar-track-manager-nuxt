import { useUserWidthSize } from "~/store/userWidthSize";

export default defineNuxtRouteMiddleware((to, __) => {
   const isMenu = useMenuVisibility();
   const device = useUserWidthSize();

   if (!!to.path && device.mobile) {
      isMenu.value = false;
   }
});
