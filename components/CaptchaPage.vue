<template>
	<div class="captcha-container">
		<h2>Пройдите капчу, чтобы продолжить</h2>
		<div class="captcha">
			<div
					class="h-captcha"
					data-sitekey="7b681170-1360-495a-b58e-62a6b22a7cea"
					@verify="handleCaptchaSuccess"
			></div>
		</div>
	</div>
</template>

<script setup lang="ts">
// ES_8bb1b61cccdb4d669f54ef7aa1b54f05

import { defineEmits } from 'vue'

const emit = defineEmits(['captchaPassed'])

function handleCaptchaSuccess(token: string) {
	console.log('Captcha token:', token)
	emit('captchaPassed')
}
</script>

<style>
.captcha-container {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 100vh;
}
</style>
