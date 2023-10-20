export default defineNuxtPlugin(() => {
   const { isMobile } = useDevice();
   const userDevice = useUserDeviceStatus();
   userDevice.value = isMobile;
});
