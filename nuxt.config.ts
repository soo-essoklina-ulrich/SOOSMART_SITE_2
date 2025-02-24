import Aura from '@primeuix/themes/aura';
import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',
    devtools: {enabled: true},
    modules: [
        '@primevue/nuxt-module'
    ],
    css:[
        '~/assets/css/main.css'
    ],
    vite: {
        plugins: [
            tailwindcss()
        ]
    },
    primevue: {
        options: {
            theme: {
                preset: Aura
            }
        }
    },
    runtimeConfig:{
        public:{
            apiBase:""
        }
    }
})
