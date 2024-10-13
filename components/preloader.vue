<template>
    <section class="preloader">
        <div class="preloader-inner v-container">
            <div class="spinner"></div>
            <!--<p>{{ progress }}%</p>-->
            <h1>LOADING...</h1>
            <div class="progress-bar">
                <div class="progress" :style="{ width: progress + '%' }"></div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import {ref, onMounted, defineEmits} from 'vue'

const emit = defineEmits(['loadingComplete']);

const progress = ref(0)

onMounted(() => {
    simulateLoading()
})

function simulateLoading() {
    const duration = 3000
    const interval = 30
    const totalSteps = duration / interval

    let currentStep = 0

    const loadingInterval = setInterval(() => {
        currentStep++
        progress.value = Math.floor((currentStep / totalSteps) * 100)

        if (currentStep >= totalSteps) {
            clearInterval(loadingInterval)
            emit('loadingComplete');
            console.log('Loading Complete')
        }
    }, interval)
}
</script>

<style scoped lang="sass">
.preloader
    position: fixed
    top: 0
    left: 0
    width: 100%
    background-image: url("/image/loading/bg.png")
    height: 100vh
    background-color: var(--color-rich-black)
    display: flex
    justify-content: center
    align-items: center
    z-index: 9999
    transition: opacity 0.2s ease

    &-inner
        text-align: center

.progress-bar
    width: 100%
    height: 1.8rem
    background-color: var(--color-white)
    border-radius: 30px
    overflow: hidden

.progress
    height: 100%
    background-color: var(--color-vivid-sky-blue)
    transition: width 0.2s ease
</style>
