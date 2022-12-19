<template>
  <div class="home-block">
    <v-container class="my-16 py-16">
      <v-row>
        <v-col cols="12" md="12" lg="12">
          <div class="block-titel">
            Works for almost all websites and popular frameworks.
          </div>
        </v-col>
        <v-col
          cols="12"
          md="12"
          lg="12"
          class="d-flex justify-space-between flex-wrap mt-16"
        >
          <div v-for="item in list" :key="item.title" class="text-center">
            <v-img :src="item.img" max-width="161"> </v-img>
          </div>
        </v-col>
        <!-- <v-col cols="12" md="12" lg="12">
          <div class="text-center">
            <v-btn
              text
              plain
              class="text-h6 text-center grey--text text--lighten-2"
              >View sites &amp;frameworks we support
              <v-icon> mdi-chevron-right </v-icon></v-btn
            >
          </div>
        </v-col> -->
      </v-row>
    </v-container>
  </div>
</template>
<script>
import '@/assets/styles/home.scss'
export default {
  data() {
    return {
      list: [
        {
          img: require('@/assets/imgs/hosting/docker.png'),
        },
        {
          img: require('@/assets/imgs/hosting/gatsby.png'),
        },
        {
          img: require('@/assets/imgs/hosting/react.png'),
        },
        {
          img: require('@/assets/imgs/hosting/webflow.png'),
        },
        {
          img: require('@/assets/imgs/hosting/hugo.png'),
        },
        {
          img: require('@/assets/imgs/hosting/next.png'),
        },
        {
          img: require('@/assets/imgs/hosting/jekyll.png'),
        },
      ],
    }
  },
}
</script>
