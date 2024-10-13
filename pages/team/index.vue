<script setup lang="ts">

</script>

<template>
    <CommonBackgroundImage image-url="image/airdrop/bg.png"/>
    <div class="v-container">
        <div class="tasks">
            <p style="width: 100%; font-family: Montserrat, sans-serif; font-size: 14px; font-weight: bold; margin-bottom: 10px;">
                Ваша реферальная ссылка</p>
            <NuxtImg style="width: 100%" src="/image/team/copy.png"/>
            <NuxtImg style="width: 100%" src="/image/team/button.png"/>
        </div>
    </div>
    <div class="v-container">
        <div class="tasks">
            <p style="text-align: center; width: 100%; font-family: Montserrat, sans-serif; font-size: 14px; font-weight: bold; margin-bottom: 10px;">
                Пока нет друзей пригласите друзей</p>
        </div>
    </div>
</template>

<style scoped lang="sass">
.tasks
    position: relative
    z-index: 1
    background-color: var(--color-white-60)
    border-radius: 16px
    margin-bottom: 10px
    padding: 16px

    &-child
        position: relative

        .modal
            position: absolute
            bottom: 42px
            right: -24px
</style>
