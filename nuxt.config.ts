// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    devtools: { enabled: false },
    ssr: false,
    css: ['~/assets/sass/root.sass'],
    modules: ['@nuxt/image', '@nuxtjs/google-fonts'],

    googleFonts: {
        families: {
            Montserrat: true,
            Inter: true,
        },
    },

    router: {
        prefetchLinks: true,
    },

    app: {
        head: {
            script: [
                { src: 'https://telegram.org/js/telegram-web-app.js', async: true },
                { src: 'https://js.hcaptcha.com/1/api.js', async: true, defer: true },
            ],
        },
    },
})
