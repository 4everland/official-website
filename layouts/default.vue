<template>
  <v-app dark>
    <v-app-bar fixed app>
      <v-container class="d-flex align-center">
        <v-btn text color="transparent" to="/" class="always-active mr-8">
          <logo />
        </v-btn>
        <v-btn
          v-for="item in links"
          :key="item.text"
          class="hidden-sm-and-down"
          plain
          nuxt
          :to="item.link"
        >
          {{ item.text }}
        </v-btn>
        <v-spacer />
        <v-btn
          class="hidden-md-and-up"
          text
          icon
          @click.stop="showDrawer = !showDrawer"
        >
          <v-icon>{{ mdiMenu }}</v-icon>
        </v-btn>
      </v-container>
    </v-app-bar>
    <v-main>
      <nuxt />
    </v-main>
    <v-navigation-drawer v-model="showDrawer" right temporary fixed>
      <v-list>
        <v-list-item
          v-for="item in links"
          :key="item.text"
          nuxt
          :to="item.link"
        >
          <v-list-item-title>{{ item.text }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <app-footer />
  </v-app>
</template>

<script>
import { mdiMenu } from '@mdi/js'
import Logo from '../components/Logo.vue'
import AppFooter from '../components/AppFooter.vue'

export default {
  components: { Logo, AppFooter },
  data() {
    return {
      mdiMenu,
      showDrawer: false,
      links: [
        {
          text: 'Features',
          link: '/#feature',
        },
        {
          text: 'Technology',
          link: '/#technology',
        },
        {
          text: 'Roadmap',
          link: '/#roadmap',
        },
        {
          text: 'Blog',
          link: '/blog',
        },
      ],
    }
  },
}
</script>
<style scoped>
.always-active {
  opacity: 1 !important;
}
</style>
