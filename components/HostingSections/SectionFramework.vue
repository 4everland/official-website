<template>
  <div class="home-block">
    <v-container class="my-16 py-16">
      <v-row>
        <v-col cols="12" md="12" lg="12">
          <div class="block-titel">
            Works for almost all websites and popular frameworks.
          </div>
        </v-col>
        <v-row class="mt-16">
          <v-col
            cols="6"
            md="3"
            lg="3"
            v-for="item in list"
            :key="item.title"
            class="my-6"
          >
            <v-img contain :src="item.img" max-height="80"> </v-img>
          </v-col>
        </v-row>
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
          img: require('@/assets/imgs/hosting/logo/1.png'),
        },
        {
          img: require('@/assets/imgs/hosting/logo/2.png'),
        },
        {
          img: require('@/assets/imgs/hosting/logo/3.png'),
        },
        {
          img: require('@/assets/imgs/hosting/logo/4.png'),
        },
        {
          img: require('@/assets/imgs/hosting/logo/5.png'),
        },
        {
          img: require('@/assets/imgs/hosting/logo/6.png'),
        },
        {
          img: require('@/assets/imgs/hosting/logo/7.png'),
        },
        {
          img: require('@/assets/imgs/hosting/logo/8.png'),
        },
      ],
    }
  },
}
</script>
