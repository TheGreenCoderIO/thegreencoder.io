<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { bars } from '@fortawesome/free-solid-svg-icons'
const icon = new URL('../assets/icon.png', import.meta.url).href


</script>

<template>
  <b-navbar toggleable="lg" type="dark" fixed="top" variant="dark">
    <b-navbar-brand ><router-link to="/"><b-img fluid :src="icon"/></router-link></b-navbar-brand>
      <b-navbar-toggle target="nav-collapse" variant="light">
        <font-awesome-icon icon="fa-bars" />
      </b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="nav nav-collapse">
        <b-nav-item><a href="https://blog.thegreencoder.io">Blog</a></b-nav-item>
        <b-nav-item><router-link to="/partners">Partners</router-link></b-nav-item>
      </b-navbar-nav>
      </b-collapse>
  </b-navbar>
</template>

<style scoped>
.nav {
  font-size: 1.5em;
}
</style>
