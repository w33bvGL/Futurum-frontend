<script setup lang="ts">
import {ref} from 'vue'

const isOpen = ref(false)

const togglePromoCode = () => {
    isOpen.value = !isOpen.value
}
</script>

<template>
    <section class="promo-code" id="promo-code">
        <div class="promo-code-inner">
            <button class="promo-code-inner-button" @click="togglePromoCode">
                <NuxtImg class="promo-code-inner-button-icon" src="/image/bin/promocode.png"/>
            </button>

            <div
                class="promo-code-inner-type"
                :class="{ 'is-open': isOpen }"
            >
                <p class="promo-code-inner-type-text">Ввести промо-код</p>
                <div class="promo-code-inner-type-form">
                    <input
                        class="promo-code-inner-type-form-input"
                        type="text"
                        placeholder="Промо-код"
                        autocomplete="on"
                        required
                    />
                    <button class="promo-code-inner-type-form-button" type="submit">
                        <NuxtImg
                            class="promo-code-inner-type-form-button-icon"
                            src="/image/bin/submit.png"
                        />
                    </button>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped lang="sass">
.promo-code
    position: absolute
    top: 0
    right: 0
    z-index: 1
    display: flex
    align-items: center
    height: 100vh
    justify-content: flex-end

    &-inner
        padding: 0.5rem 1rem
        background-color: var(--color-white-60)
        display: flex
        align-items: center
        gap: 0.5rem
        border-top-left-radius: 2rem
        border-bottom-left-radius: 2rem
        border: 0.15em solid var(--color-black)
        border-right-color: var(--color-transparent)

        &-button
            background-color: var(--color-black)
            display: flex
            justify-content: center
            align-items: center
            padding: 0.47rem
            border-radius: 50%
            cursor: pointer

            &-icon
                width: 1.9rem
                height: 1.9rem

        &-type
            display: flex
            flex-direction: column
            transition: width 0.3s ease, max-height 0.3s ease, opacity 0.3s ease
            max-height: 0
            opacity: 0
            width: 0
            overflow: hidden

            &.is-open
                display: flex
                width: 200px
                max-height: 500px
                opacity: 1
               
            &-text
                font-family: Inter, sans-serif
                font-weight: bold
                text-wrap: nowrap
                margin-bottom: 0.2rem

            &-form
                background-color: var(--color-white-60)
                border-radius: 1em
                overflow: hidden
                display: flex
                justify-content: center
                padding: 0 0.4rem

                &-input
                    outline: none
                    background-color: transparent

                &-button
                    outline: none
                    background-color: var(--color-transparent)
                    padding: 0.3rem

                    &-icon
                        width: 0.9rem
                        height: 0.9rem
</style>
