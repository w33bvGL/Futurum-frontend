<script setup lang="ts">

</script>

<template>
    <header class="header" id="header">
        <div class="header-inner v-container">
            <div class="header-inner-content">
                <NuxtImg class="header-inner-content-logo" src="/logo.png"/>
                <div class="header-inner-content-profile">
                    <NuxtImg class="header-inner-content-profile-image" src="/image/bin/profile.png"/>
                    <div class="header-inner-content-profile-data">
                        <span>Александр</span>
                        <span>Македонский</span>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<style scoped lang="sass">
.header
    width: 100%
    position: fixed
    top: 0
    background-color: transparent
    z-index: 100

    &-inner
        padding: 20px 20px 10px 20px

        &-content
            display: flex
            justify-content: space-between
            align-items: center

            &-logo
                width: 130px

            &-profile
                padding: 0.2rem 0.35rem 0.2rem 0.35rem
                background-color: var(--color-white)
                border-radius: 2rem
                display: flex
                justify-content: center
                align-items: center
                gap: 0.5rem
                border: 0.15em solid var(--color-black)

                &-image
                    width: 2.2rem
                    height: 2.2rem

                &-data
                    display: flex
                    align-items: flex-start
                    flex-direction: column
                    padding: 0.2rem 0.4rem 0.2rem 0
                    font-weight: bold


</style>
