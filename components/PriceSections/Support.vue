<template>
  <div class="home-block">
    <v-container class="mb-16 py-16">
      <v-row>
        <v-col cols="12" md="12" lg="12">
          <div class="block-titel">Network Support</div>
          <div class="block-text">
            Polygon, Ethereum, BSC, Arbitrum are accepted by 4EVERLAND.
          </div>
        </v-col>
        <v-col
          cols="12"
          md="12"
          lg="12"
          class="d-flex justify-space-between flex-wrap mt-8"
        >
          <v-row>
            <v-col
              v-for="item in list"
              :key="item.title"
              class="text-center"
              cols="6"
              md="3"
            >
              <v-img contain :src="item.img" max-width="250"> </v-img>
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
          img: require('@/assets/imgs/price/Polygon.png'),
        },
        {
          img: require('@/assets/imgs/price/Ethereum.png'),
        },
        {
          img: require('@/assets/imgs/price/BSC.png'),
        },
        {
          img: require('@/assets/imgs/price/Arbitrum.png'),
        },
        // {
        //   img: require('@/assets/imgs/price/More.png'),
        // },
      ],
    }
  },
}
</script>
