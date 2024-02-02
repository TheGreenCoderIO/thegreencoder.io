<script setup lang="ts">
import { ref } from 'vue'
const logo = new URL('../assets/logo.png', import.meta.url).href

</script>

<template>
    <b-img fluid :src="logo"></b-img>
</template>

<style scoped>
</style>
