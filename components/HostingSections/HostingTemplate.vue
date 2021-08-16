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
        <v-row style="max-width: 1100px; margin: 0 auto">
          <v-col cols="12" md="12" lg="6" class="px-3">
            <v-card outlined>
              <div class="pa-4">
                <div class="text-body-1 font-weight-bold">
                  Import Git Repository
                </div>
              </div>
              <v-divider></v-divider>
              <div
                class="d-flex align-center justify-center"
                style="min-height: 444px"
              >
                <p class="text-center py-16 mb-0">
                  <v-btn
                    class="blue darken-1 white--text px-2"
                    rounded
                    large
                    :href="hosting_web"
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
                  class="text-body-2"
                  href="https://docs.hosting.4everland.org/guide/"
                  target="_blank"
                >
                  View Docs<v-icon right>{{ mdiArrowRight }}</v-icon>
                </v-btn>
              </div>
            </v-card>
          </v-col>
          <v-col cols="12" md="12" lg="6" class="px-3">
            <v-card outlined>
              <div class="pa-4">
                <div class="text-body-1 font-weight-bold">Clone Template</div>
              </div>
              <v-divider></v-divider>
              <div class="pa-4" style="min-height: 444px">
                <v-row>
                  <!-- <v-col
                    v-for="(it, i) in tplList"
                    :key="i"
                    cols="12"
                    md="6"
                    lg="6"
                  >
                    <v-card
                      v-ripple
                      flat
                      class="hover-1"
                      :href="getTplLink(it)"
                      target="_blank"
                    >
                      <v-img :src="it.img" contain max-height="240"></v-img>
                    </v-card>
                  </v-col> -->
                  <project-templates />
                </v-row>
              </div>
              <v-divider></v-divider>
              <div class="py-4 px-6 grey lighten-4 text-body-2">
                <v-btn
                  v-if="$vuetify.breakpoint.smAndDown"
                  text
                  plain
                  x-small
                  class="text-body-1"
                  :href="hosting_web"
                  target="_blank"
                >
                  Get started<v-icon right>{{ mdiArrowRight }}</v-icon>
                </v-btn>
                <v-btn
                  v-else
                  text
                  plain
                  x-small
                  class="text-body-2"
                  :href="hosting_web"
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
import ProjectTemplates from './ProjectTemplates.vue'
export default {
  components: { ProjectTemplates },
  props: { background: { type: String, default: 'white' } },
  data() {
    return {
      mdiGithub,
      mdiArrowRight,
      tplList: [
        {
          img: require('~/assets/imgs/hosting/next.png'),
          slug: 'nextjs',
          name: 'Next.js',
        },
        {
          img: require('~/assets/imgs/hosting/vue.png'),
          slug: 'vue',
          name: 'Vue.js',
        },
        {
          img: require('~/assets/imgs/hosting/nuxt.png'),
          slug: 'nuxtjs',
          name: 'Nuxt.js',
        },
        {
          img: require('~/assets/imgs/hosting/gatsby.png'),
          slug: 'gatsby',
          name: 'Gatsby.js',
        },
      ],
    }
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
    getTplLink(it) {
      const src =
        'https://github.com/4everland/project-templates/tree/main/examples/' +
        it.slug
      return (
        this.hosting_web +
        `#/new/clone-flow?s=${encodeURIComponent(src)}&t=${it.name}`
      )
    },
  },
}
</script>
