<script setup lang="ts">
import Logo from '../components/Logo.vue'
const vantagePoint = new URL('../assets/vantage-point.webp', import.meta.url).href

const  partners = [
  { link: "https://vantagepointdigital.marketing", image: vantagePoint }
]
</script>
<template>
  <h1>A collection of like minded people that are environmentally concious</h1>
  <b-container>
    <b-row v-for="partner in partners">
      <b-col sm="12" md="6" lg="3">
        <a :href="partner.link"><b-img fluid :src="partner.image"/></a>
      </b-col>
    </b-row>
  </b-container>
</template>
