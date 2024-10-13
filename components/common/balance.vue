<script setup lang="ts">

</script>

<template>
    <section class="balance" id="balance">
        <div class="balance-inner v-container">
            <div class="balance-inner-container">
                <NuxtImg class="balance-inner-container-coin" src="/image/bin/coin.png"/>
                <span class="balance-inner-container-text">10</span>
            </div>
        </div>
    </section>
</template>

<style scoped lang="sass">
.balance
    position: relative
    z-index: 100
    background-color: var(--color-transparent)
    min-height: 170px
    max-height: 220px
    height: 100vh
    padding-bottom: 20px
    display: flex
    align-items: flex-end

    &-inner

        &-container
            padding: 0.2rem 0.35rem 0.2rem 0.35rem
            background-color: var(--color-white-60)
            border-radius: 2rem
            width: 140px
            display: flex
            margin: 0 auto
            justify-content: center
            align-items: center
            gap: 0.5rem
            border: 0.15em solid var(--color-black)

            &-coin
                width: 2.8rem
                height: 2.8rem

            &-text
                font-size: 3em
                font-weight: bolder
                font-family: 'intro-regular'
                color: var(--color-white)
                text-shadow: 2px 2px 0 var(--color-black), -2px -2px 0 var(--color-black), 2px -2px 0 var(--color-black), -2px 2px 0 var(--color-black)


</style>
