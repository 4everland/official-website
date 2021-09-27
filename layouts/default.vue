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
          :class="{ 'first-landing': item.icon }"
          plain
          nuxt
          :to="item.link"
          :href="item.href"
          :target="item.target"
          :ripple="false"
        >
          <v-img v-if="item.icon" width="137" :src="item.icon" alt="" />
          <span v-else>
            {{ item.text }}
          </span>
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
          :href="hosting_web"
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
          <v-list-item-title>
            <v-img v-if="item.icon" width="143" :src="item.icon" alt="" />
            <span v-else>
              {{ item.text }}
            </span>
          </v-list-item-title>
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
          link: '/#feature',
        },
        {
          text: 'Hosting',
          link: '/hosting',
        },
        {
          text: 'Docs',
          href: 'https://docs.hosting.4everland.org/guide/',
          target: '_blank',
        },

        {
          text: 'Blog',
          link: '/blog',
        },
        // {
        //   text: 'Dapps',
        //   link: '/dapps',
        // },
        {
          text: 'First Landing',
          link: '/firstlanding/dapps',
          icon: require('~/assets/imgs/firstlanding/firstlanding.png'),
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
/deep/ .first-landing span {
  opacity: 1 !important;
}
</style>
