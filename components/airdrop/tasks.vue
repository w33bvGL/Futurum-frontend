<script setup lang="ts">
import { ref } from 'vue'

const openModalIndex = ref<number | null>(null)

const toggleTask = (index: number) => {
    openModalIndex.value = openModalIndex.value === index ? null : index
}
</script>

<template>
    <div class="v-container">
        <div class="tasks">
            <NuxtImg class="img" src="/image/airdrop/Frame2.png" />

            <div class="tasks-child">
                <NuxtImg
                    class="modal"
                    src="/image/airdrop/Frame8.png"
                    v-show="openModalIndex === 0"
                />
                <NuxtImg
                    class="img"
                    src="/image/airdrop/Frame3.png"
                    @click="toggleTask(0)"
                />
            </div>

            <NuxtImg class="img" src="/image/airdrop/Frame7.png" />

            <div class="tasks-child">
                <NuxtImg
                    class="modal"
                    src="/image/airdrop/Frame9.png"
                    v-show="openModalIndex === 1"
                />
                <NuxtImg
                    class="img"
                    src="/image/airdrop/Frame4.png"
                    @click="toggleTask(1)"
                />
            </div>

            <NuxtImg class="img" src="/image/airdrop/Frame7.png" />

            <div class="tasks-child">
                <NuxtImg
                    class="modal"
                    src="/image/airdrop/Frame10.png"
                    v-show="openModalIndex === 2"
                />
                <NuxtImg
                    class="img"
                    src="/image/airdrop/Frame5.png"
                    @click="toggleTask(2)"
                />
            </div>

            <NuxtImg class="img" src="/image/airdrop/Frame7.png" />

            <div class="tasks-child">
                <NuxtImg
                    class="modal"
                    src="/image/airdrop/Frame10.png"
                    v-show="openModalIndex === 3"
                />
                <NuxtImg
                    class="img"
                    src="/image/airdrop/Frame6.png"
                    @click="toggleTask(3)"
                />
            </div>
        </div>
    </div>

    <div class="v-container">
        <NuxtImg class="img" src="/image/airdrop/Frame1.png" />
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

div
    position: relative
    z-index: 1
    top: 0

    img
        width: 100%
</style>
