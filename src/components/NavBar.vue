<script setup lang="ts">
import { RouterLink } from 'vue-router'
const icon = new URL('../assets/icon.png', import.meta.url).href
</script>

<template>
  <b-navbar toggleable="lg" align="center" type="dark" >
    <b-navbar-brand href="#"><b-img fluid :src="icon"/></b-navbar-brand>
    <b-navbar-nav class="nav ml-auto">
      <b-nav-item><a href="https://blog.thegreencoder.io">Blog</a></b-nav-item>
    </b-navbar-nav>
  </b-navbar>
</template>

<style scoped>
.nav {
  font-size: 1.5em;
}
</style>
