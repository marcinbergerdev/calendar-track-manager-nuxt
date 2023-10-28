// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
   devtools: { enabled: true },

   devServer: {
      host: "http//localhost",
   },

   modules: ["@pinia/nuxt", "@vueuse/nuxt", "@nuxtjs/device", "@formkit/nuxt"],
   pinia: {
      autoImports: ["defineStore", ["defineStore", "definePiniaStore"]],
   },

   formkit: {
      // Experimental support for auto loading (see note):
      autoImport: true,
   },

   css: ["/assets/css/global.scss"],
   vite: {
      css: {
         preprocessorOptions: {
            scss: {
               additionalData:
                  '@import "@/assets/css/_variables.scss"; @import "@/assets/css/_mixins.scss";',
            },
         },
      },
   },

   runtimeConfig: {
      apiKey: process.env.NUXT_API_KEY,
      authDomain: process.env.NUXT_AUTH_DOMAIN,
      projectId: process.env.NUXT_PROJECT_ID,
      storageBucket: process.env.NUXT_STORAGE_BUCKET,
      messagingSenderId: process.env.NUXT_MESSAGING_SENDER_ID,
      appId: process.env.NUXT_APP_ID,

      public: {
         apiKey: process.env.NUXT_API_KEY,
         authDomain: process.env.NUXT_AUTH_DOMAIN,
         projectId: process.env.NUXT_PROJECT_ID,
         storageBucket: process.env.NUXT_STORAGE_BUCKET,
         messagingSenderId: process.env.NUXT_MESSAGING_SENDER_ID,
         appId: process.env.NUXT_APP_ID,
      },
   },
});
