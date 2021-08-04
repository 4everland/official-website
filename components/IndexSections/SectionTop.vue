<template>
  <v-container class="py-12">
    <v-row :class="{ 'text-center': $vuetify.breakpoint.smAndDown }">
      <v-col cols="12" md="6" lg="6">
        <h1
          class="text-h2 mt-8"
          :class="{ 'text-nowrap': !$vuetify.breakpoint.smAndDown }"
        >
          The PaaS of Web3.0
        </h1>
        <h4 class="text-h4 text--secondary mt-12">
          A Web3.0 cloud computing platform with global acceleration, privacy
          protection, distributed storage and other technical features.
        </h4>
        <p class="my-12">
          <v-btn
            href="/4everland-whitepaper-en(Draft V0.0.2).pdf"
            target="_blank"
            :class="{
              'mb-4': $vuetify.breakpoint.xsOnly || $vuetify.breakpoint.mdOnly,
            }"
            class="btn-whitepaper mr-2"
            rounded
            x-large
          >
            <v-icon left size="20">{{ mdiBookOpenVariant }}</v-icon>
            <span>Whitepaper |</span>
            <v-icon right size="20">{{ mdiDownloadCircleOutline }}</v-icon>
          </v-btn>
          <v-btn
            href="https://hosting-website.vercel.app"
            target="_blank"
            class="blue darken-1"
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
      </v-col>
      <v-col class="d-flex align-center justify-center" cols="12" md="6" lg="6">
        <v-carousel
          cycle
          dark
          hide-delimiter-background
          show-arrows-on-hover
          interval="3000"
          height="450"
        >
          <v-carousel-item
            v-for="(item, i) in banner"
            :key="i"
            class="text-center"
          >
            <img
              class="cursor-pointer"
              alt="top-banner"
              style="width: 100%; max-width: 450px"
              :src="item.src"
            />
          </v-carousel-item>
        </v-carousel>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import {
  mdiBookOpenVariant,
  mdiDownloadCircleOutline,
  mdiGithub,
  mdiCheckboxMarkedCircleOutline,
} from '@mdi/js'
export default {
  data() {
    return {
      mdiBookOpenVariant,
      mdiDownloadCircleOutline,
      mdiGithub,
      mdiCheckboxMarkedCircleOutline,
      model: 0,
      colors: ['primary', 'secondary', 'yellow darken-2', 'red', 'orange'],
      banner: [
        {
          src: require('@/assets/imgs/index/banner1.png'),
        },
        {
          src: require('@/assets/imgs/index/banner2.png'),
        },
        {
          src: require('@/assets/imgs/index/banner3.png'),
        },
        {
          src: require('@/assets/imgs/index/banner4.png'),
        },
      ],
    }
  },
}
</script>
<style scoped>
.text-nowrap {
  white-space: nowrap;
}
.btn-whitepaper {
  background: linear-gradient(
    to right,
    hsl(279deg 89% 81%),
    hsl(207deg 94% 56%)
  );
}
</style>
