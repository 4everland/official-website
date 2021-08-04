<template>
  <v-theme-provider light>
    <div :style="{ background: background == 'black' ? '#121212' : '#ffffff' }">
      <v-container class="px-8 py-16">
        <h3
          class="text-h3 font-weight-light text-center mb-16"
          :class="
            background == 'black' ? 'white--text' : 'grey--text text--darken-4'
          "
        >
          Being Your 4EVER-HOSTING Journey
        </h3>
        <v-row>
          <v-col cols="12" md="12" lg="6" class="px-10">
            <v-card outlined>
              <div class="pa-4">
                <div class="text-body-1 font-weight-bold">
                  Import Git Repositor
                </div>
              </div>
              <v-divider></v-divider>
              <div
                class="d-flex align-center justify-center"
                :style="{
                  minHeight: $vuetify.breakpoint.smAndDown ? '200px' : '553px',
                }"
              >
                <p class="text-center">
                  <v-btn
                    class="blue darken-1 white--text px-2"
                    rounded
                    large
                    href="https://hosting-website.vercel.app"
                    target="_blank"
                  >
                    <v-icon left size="32">{{ mdiGithub }}</v-icon>
                    <span>Continue with Github</span>
                  </v-btn>
                </p>
              </div>
              <v-divider></v-divider>
              <div class="pa-4 grey lighten-4">
                <v-btn
                  text
                  plain
                  x-small
                  class="text-body-1 font-weight-bold"
                  href="https://hosting-website.vercel.app"
                  target="_blank"
                >
                  View Docs<v-icon right>{{ mdiArrowRight }}</v-icon>
                </v-btn>
              </div>
            </v-card>
          </v-col>
          <v-col cols="12" md="12" lg="6" class="px-10">
            <v-card outlined>
              <div class="pa-4">
                <div class="text-body-1 font-weight-bold">Clone Template</div>
              </div>
              <v-divider></v-divider>
              <div class="pa-4" style="min-height: 553px">
                <v-row>
                  <v-col
                    v-for="(it, i) in tplList"
                    :key="i"
                    cols="12"
                    md="6"
                    lg="6"
                  >
                    <v-card
                      v-ripple
                      outlined
                      class="hover-1"
                      href="https://hosting-website.vercel.app"
                      target="_blank"
                    >
                      <v-img :src="it.img" height="200"></v-img>
                      <div class="pa-2 d-flex align-center">
                        <img :src="it.logo" style="width: 20px" />
                        <div class="ml-2">{{ it.title }}</div>
                      </div>
                    </v-card>
                  </v-col>
                </v-row>
              </div>
              <v-divider></v-divider>
              <div
                class="py-4 px-6 grey lighten-4 text-body-1 font-weight-bold"
              >
                <v-btn
                  v-if="$vuetify.breakpoint.smAndDown"
                  text
                  plain
                  x-small
                  class="text-body-1 font-weight-bold"
                  href="https://hosting-website.vercel.app"
                  target="_blank"
                >
                  Get started<v-icon right>{{ mdiArrowRight }}</v-icon>
                </v-btn>
                <v-btn
                  v-else
                  text
                  plain
                  x-small
                  class="text-body-1 font-weight-bold"
                  href="https://hosting-website.vercel.app"
                  target="_blank"
                >
                  Get started for free with a template
                </v-btn>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </v-theme-provider>
</template>
<script>
import { mdiGithub, mdiArrowRight } from '@mdi/js'
export default {
  props: { background: { type: String, default: 'white' } },
  data() {
    return {
      mdiGithub,
      mdiArrowRight,
      tplList: [
        {
          img: require('~/assets/imgs/hosting/nextjs.png'),
          logo: require('~/assets/imgs/hosting/next.svg'),
          title: 'Next.js',
        },
        {
          img: require('~/assets/imgs/hosting/vue.png'),
          logo: require('~/assets/imgs/hosting/vuejs.png'),
          title: 'Vue.js',
        },
        {
          img: require('~/assets/imgs/hosting/nuxtjs.png'),
          logo: require('~/assets/imgs/hosting/nuxt.svg'),
          title: 'Nuxt.js',
        },
        {
          img: require('~/assets/imgs/hosting/gatsbyjs.png'),
          logo: require('~/assets/imgs/hosting/gatsby.svg'),
          title: 'Gatsby.js',
        },
      ],
    }
  },
  mounted() {
    // this.getList()
  },
  methods: {
    async getList() {
      window.console.log(process.env.NODE_ENV)
      window.console.log(process.env)
      try {
        const { data } = await this.$axios.get('/template/clone-template')
        window.console.log(data)
      } catch (error) {
        //
      }
    },
  },
}
</script>
