<template>
    <div class="main">
        <Preloader v-show="loading" @loadingComplete="handleLoadingComplete"/>
        <NuxtLayout v-show="!loading">
            <NuxtPage/>
        </NuxtLayout>
    </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'

const loading = ref(true)

function handleLoadingComplete() {
    loading.value = false;
}
</script>
