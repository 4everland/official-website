<template>
  <v-theme-provider light>
    <div id="hostingDapps">
      <v-container class="px-8 pb-16">
        <h3 class="text-h3 font-weight-light text-center mb-16 white--text">
          Being Your 4EVER-HOSTING Journey
        </h3>
        <v-row>
          <v-col cols="12" md="6" lg="6" class="px-10">
            <v-card outlined>
              <div class="pa-4">
                <div class="text-body-1 font-weight-bold">
                  Import Git Repositor
                </div>
              </div>
              <v-divider></v-divider>
              <div
                class="d-flex align-center justify-center"
                style="height: 348px"
              >
                <p class="text-center">
                  <v-btn
                    href="https://hosting-website.vercel.app"
                    class="blue darken-1 white--text px-2"
                    rounded
                    large
                  >
                    <v-icon left size="32">{{ mdiGithub }}</v-icon>
                    <span>Continue with Github</span>
                  </v-btn>
                </p>
              </div>
              <v-divider></v-divider>
              <div class="pa-4 grey lighten-4">
                <v-btn text plain x-small class="text-body-1 font-weight-bold">
                  View Docs<v-icon right>{{ mdiArrowRight }}</v-icon>
                </v-btn>
              </div>
            </v-card>
          </v-col>
          <v-col cols="12" md="6" lg="6" class="px-10">
            <v-card outlined>
              <div class="pa-4">
                <div class="text-body-1 font-weight-bold">Clone Template</div>
              </div>
              <v-divider></v-divider>
              <div class="pa-4" style="height: 348px">
                <v-row>
                  <v-col v-for="(it, i) in tplList" :key="i" cols="6">
                    <v-card v-ripple outlined class="hover-1">
                      <v-img :src="it.img" height="100"></v-img>
                      <div class="pa-2 d-flex align-center">
                        <img
                          src="~/assets/imgs/hosting/next.svg"
                          style="width: 20px"
                        />
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
                Get started for free with a template
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
  components: {},
  data() {
    return {
      mdiGithub,
      mdiArrowRight,
      tplList: [
        {
          img: 'https://assets.vercel.com/image/upload/f_auto,c_limit,q_auto,w_7680/front/home/new/virtual-event-starter-kit.png',
          logo: '~/assets/imgs/hosting/next.svg',
          title: 'Vue.js',
          src: 'https://github.com/vercel/vercel/tree/main/examples/vue',
        },
        {
          img: 'https://assets.vercel.com/image/upload/f_auto,c_limit,q_auto,w_7680/front/home/new/virtual-event-starter-kit.png',
          logo: '~/asset/imgs/hosting/next.svg',
          title: 'Vue.js',
          src: 'https://github.com/vercel/vercel/tree/main/examples/vue',
        },
        {
          img: 'https://assets.vercel.com/image/upload/f_auto,c_limit,q_auto,w_7680/front/home/new/virtual-event-starter-kit.png',
          logo: '~/asset/imgs/hosting/next.svg',
          title: 'Vue.js',
          src: 'https://github.com/vercel/vercel/tree/main/examples/vue',
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
