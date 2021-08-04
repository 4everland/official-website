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
          :href="item.href"
          :target="item.target"
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
        <v-btn
          href="https://hosting-website.vercel.app"
          target="_blank"
          class="blue darken-1 white--text hidden-sm-and-down"
          rounded
        >
          <v-icon left size="32">{{ mdiGithub }}</v-icon>
          <span>Login</span>
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
          :href="item.href"
          :target="item.target"
        >
          <v-list-item-title>{{ item.text }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <app-footer />
  </v-app>
</template>

<script>
import { mdiMenu, mdiGithub } from '@mdi/js'
import Logo from '../components/Logo.vue'
import AppFooter from '../components/AppFooter.vue'

export default {
  components: { Logo, AppFooter },
  data() {
    return {
      mdiMenu,
      mdiGithub,
      showDrawer: false,
      links: [
        {
          text: 'Features',
          link: '/',
        },
        {
          text: 'Hosting',
          link: '/hosting',
        },
        {
          text: 'Docs',
          href: 'https://4ever-hosting-docs.vercel.app',
          target: '_blank',
        },

        {
          text: 'Blog',
          link: '/blog',
        },
        {
          text: 'Dapps',
          link: '/dapps',
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
