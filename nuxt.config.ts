// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
   devtools: { enabled: true },

   devServer: {
      host: "http//localhost",
   },

   modules: ["@pinia/nuxt"],
   pinia: {
      autoImports: ["defineStore", ["defineStore", "definePiniaStore"]],
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
});
