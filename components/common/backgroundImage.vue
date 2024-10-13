<script setup lang="ts">
interface Props {
    imageUrl: string
}

const props = defineProps<Props>();
</script>

<template>
    <div class="background">
        <div class="background-image" :style="{ backgroundImage: `url('${props.imageUrl}')` }"></div>
    </div>
</template>

<style scoped lang="sass">
.background
    width: 100%
    height: 100dvh
    position: absolute
    top: 0
    z-index: 1
    
    &-image
        width: 100%
        height: 100dvh
        background-size: cover
        background-position: center
</style>
