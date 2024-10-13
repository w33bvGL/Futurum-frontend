// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    devtools: { enabled: false },
    ssr: false,
    css: ['~/assets/sass/root.sass'],
    modules: ['@nuxt/image', '@nuxtjs/google-fonts', '@nuxtjs/turnstile'],

    googleFonts: {
        families: {
            Montserrat: true,
            Inter: true,
        },
    },

    router: {
        prefetchLinks: true,
    },

    turnstile: {
        siteKey: '1x00000000000000000000AA',
    },
    
    runtimeConfig: {
        turnstile: {
            secretKey: '',
        },
    },

    app: {
        head: {
            script: [
                { src: 'https://telegram.org/js/telegram-web-app.js', async: true }
            ],
        },
    },
})
