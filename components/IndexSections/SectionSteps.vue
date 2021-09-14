<template>
  <v-theme-provider light>
    <div
      id="steps"
      :style="{ background: background == 'black' ? '#121212' : '#ffffff' }"
    >
      <v-container class="px-8 pb-16">
        <h3
          class="text-h3 font-weight-light text-center mb-16"
          :class="
            background == 'black' ? 'white--text' : 'grey--text text--darken-4'
          "
        >
          Deploy a website based on<br />
          Web3.0 in 30 seconds
        </h3>
        <v-row class="mb-16">
          <v-col
            v-for="step in steps"
            :key="step.title"
            cols="12"
            lg="4"
            md="4"
          >
            <p
              class="text-center"
              :class="
                background == 'black'
                  ? 'white--text'
                  : 'grey--text text--darken-4'
              "
            >
              {{ step.title }}
            </p>
            <v-card flat class="step">
              <div>
                <img style="width: 100%" :src="step.img" />
              </div>
            </v-card>
          </v-col>
        </v-row>
        <h3
          class="text-h3 font-weight-light text-center mb-16"
          :class="
            background == 'black' ? 'white--text' : 'grey--text text--darken-4'
          "
        >
          How to Deploy?
        </h3>
        <v-row class="mb-16">
          <v-col cols="12" class="text-center">
            <iframe
              :width="$vuetify.breakpoint.smAndDown ? 300 : 800"
              :height="$vuetify.breakpoint.smAndDown ? 200 : 450"
              src="https://www.youtube.com/embed/7D9MuVk6NNA"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </v-col>
        </v-row>
        <p class="my-12 text-center">
          <v-btn
            :href="hosting_web"
            target="_blank"
            class="blue darken-1 white--text"
            rounded
            x-large
          >
            <v-icon left size="20">{{ mdiGithub }}</v-icon>
            <span>Start Deploying |</span>
            <v-icon right size="20">{{
              mdiCheckboxMarkedCircleOutline
            }}</v-icon>
          </v-btn>
        </p>
      </v-container>
    </div>
  </v-theme-provider>
</template>
<script>
import { mdiGithub, mdiCheckboxMarkedCircleOutline } from '@mdi/js'
export default {
  props: { background: { type: String, default: 'white' } },
  data() {
    return {
      mdiGithub,
      mdiCheckboxMarkedCircleOutline,
      steps: [
        {
          title: '1. Connect your GitHub',
          img: require('~/assets/imgs/index/step_1@2x.png'),
        },
        {
          title: '2. Add your build settings',
          img: require('~/assets/imgs/index/step_2@2x.png'),
        },
        {
          title: '3. Deploy your site',
          img: require('~/assets/imgs/index/step_3@2x.png'),
        },
      ],
    }
  },
}
</script>
<style scoped>
/* #steps {
  background: #fff;
} */
</style>
