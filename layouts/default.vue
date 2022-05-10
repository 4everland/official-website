<template>
  <v-app>
    <app-header />
    <v-main>
      <nuxt />
    </v-main>
    <app-footer />
  </v-app>
</template>

<script>
import AppHeader from '../components/AppHeader.vue'
import AppFooter from '../components/AppFooter.vue'

export default {
  components: { AppHeader, AppFooter },
}
</script>
