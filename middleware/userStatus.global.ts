export default defineNuxtRouteMiddleware((to, __) => {
   const userUidStatus = useCookie("userUidStatus");

   if (!userUidStatus.value && (to.path === "/login" || to.path === "/signup"))
      return;

   if (!userUidStatus.value && to.path !== "/login") {
      return navigateTo("/login");
   }

   if (
      !!userUidStatus.value &&
      (to.path === "/login" || to.path === "/signup")
   ) {
      return navigateTo("/calendar");
   }

   if (!!userUidStatus.value && to.path === "/") {
      return navigateTo("/calendar");
   }
});
