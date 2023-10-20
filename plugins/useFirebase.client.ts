import { initializeApp } from "firebase/app";

export default defineNuxtPlugin((nuxtApp) => {
   const runtimeConfig = useRuntimeConfig();

   const firebaseConfig = {
      apiKey: runtimeConfig.public.apiKey,
      authDomain: runtimeConfig.public.authDomain,
      projectId: runtimeConfig.public.projectId,
      storageBucket: runtimeConfig.public.storageBucket,
      messagingSenderId: runtimeConfig.public.messagingSenderId,
      appId: runtimeConfig.public.appId,
   };

   initializeApp(firebaseConfig);
   userUpdateStatus();
});
