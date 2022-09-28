<template>
  <div id="HostingWhy" class="home-block">
    <v-container class="my-16 py-16">
      <v-row>
        <v-col cols="12" md="12" lg="12">
          <div class="block-titel">Why use 4EVERLAND for Hosting?</div>
        </v-col>
        <v-col
          cols="12"
          md="12"
          lg="12"
          class="d-flex justify-space-between flex-wrap"
        >
          <v-row>
            <v-col cols="6" md="4" v-for="item in list" :key="item.title">
              <div class="text-center">
                <v-img :src="item.img" max-width="300" class="ma-auto"> </v-img>
                <div class="Ubuntu-Bold mt-4" style="font-size: 20px">
                  {{ item.title }}
                </div>
              </div>
            </v-col>
          </v-row>
        </v-col>
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
          img: require('@/assets/imgs/hosting/global.png'),
          title: 'Global Acceleration',
        },
        {
          img: require('@/assets/imgs/hosting/privacy.png'),
          title: 'Privacy Protection',
        },
        {
          img: require('@/assets/imgs/hosting/distributed.png'),
          title: 'Distributed Storage',
        },
        {
          img: require('@/assets/imgs/hosting/convenient.png'),
          title: 'Convenient and Efficient',
        },
        {
          img: require('@/assets/imgs/hosting/cost.png'),
          title: 'Low-Cost',
        },
        {
          img: require('@/assets/imgs/hosting/interconnection.png'),
          title: 'Interconnection',
        },
      ],
    }
  },
}
</script>
<style scoped>
#HostingWhy {
  background-color: #f8fdfc;
}
</style>
