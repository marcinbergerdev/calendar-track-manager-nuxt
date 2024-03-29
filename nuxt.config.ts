// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
   devtools: { enabled: true },
   devServer: {
      host: "http//localhost",
   },

   css: ["/assets/css/global.scss"],
   vite: {
      vue: {
         script: {
            propsDestructure: true,
         },
      },
      css: {
         preprocessorOptions: {
            scss: {
               additionalData: `
                @import "@/assets/css/_variables.scss"; 
                @import "@/assets/css/_mixins.scss"; 
                @import "@/assets/css/_form.scss"; 
                @import "@/assets/css/_scrollbar.scss";
               `,
            },
         },
      },
      define: {
         __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: false,
      },
   },

   modules: [
      "@pinia/nuxt",
      "@vueuse/nuxt",
      "@nuxtjs/device",
      "@formkit/nuxt",
      "@nuxtjs/color-mode",
      "@nuxt/image",
      "dayjs-nuxt",
      "nuxt-lodash",
      "@nuxtjs/i18n",
   ],
   
   pinia: {
      autoImports: ["defineStore", ["defineStore", "definePiniaStore"]],
   },

   formkit: {
      // Experimental support for auto loading (see note):
      autoImport: true,
   },

   image: {
      provider: "netlify",
   },

   dayjs: {
      locales: ["en", "de", "pl"],
      plugins: ["localeData", "relativeTime", "utc", "timezone"],
      defaultLocale: "en",
   },

   runtimeConfig: {
      apiKey: process.env.NUXT_API_KEY,
      authDomain: process.env.NUXT_AUTH_DOMAIN,
      databaseURL: process.env.NUXT_DATABASE__URL,
      projectId: process.env.NUXT_PROJECT_ID,
      storageBucket: process.env.NUXT_STORAGE_BUCKET,
      messagingSenderId: process.env.NUXT_MESSAGING_SENDER_ID,
      appId: process.env.NUXT_APP_ID,

      public: {
         apiKey: process.env.NUXT_API_KEY,
         authDomain: process.env.NUXT_AUTH_DOMAIN,
         databaseURL: process.env.NUXT_DATABASE__URL,
         projectId: process.env.NUXT_PROJECT_ID,
         storageBucket: process.env.NUXT_STORAGE_BUCKET,
         messagingSenderId: process.env.NUXT_MESSAGING_SENDER_ID,
         appId: process.env.NUXT_APP_ID,
      },
   },
});
