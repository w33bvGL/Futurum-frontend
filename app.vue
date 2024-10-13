<template>
    <div class="main">
        <CaptchaPage v-if="showCaptcha" @captchaPassed="handleCaptchaPassed" />
        <Preloader v-else-if="loading" @loadingComplete="handleLoadingComplete" />
        <NuxtLayout v-else>
            <NuxtPage />
        </NuxtLayout>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const loading = ref(true)
const showCaptcha = ref(false)

onMounted(() => {
    const isFirstVisit = !localStorage.getItem('captchaPassed')
    showCaptcha.value = isFirstVisit
})

function handleCaptchaPassed() {
    localStorage.setItem('captchaPassed', 'true')
    showCaptcha.value = false
}

function handleLoadingComplete() {
    loading.value = false
}
</script>
