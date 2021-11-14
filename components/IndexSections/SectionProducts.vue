<template>
  <div class="home-block">
    <v-container class="my-16">
      <v-row>
        <v-col cols="12" md="12" lg="12">
          <div class="title-underline">Products</div>
          <div class="block-titel">Build a Free World</div>
          <div class="block-text">
            Explore endless possibilities using products designed for complex
            and dynamic Web3.0.
          </div>
        </v-col>
      </v-row>
    </v-container>
    <v-row>
      <v-col
        v-for="item in list"
        :key="item.title"
        class="border-box"
        cols="12"
        md="4"
        lg="4"
      >
        <div class="win py-8">
          <div class="main text-center">
            <div class="img-box">
              <v-img contain :src="item.img" height="128px" class="ma-auto">
              </v-img>
            </div>
            <div class="main-title">{{ item.title }}</div>
          </div>
        </div>
      </v-col>
    </v-row>
    <v-container class="my-16">
      <v-row>
        <v-col cols="12" md="12" lg="12" class="text-center">
          <v-btn
            :href="hosting_web"
            target="_blank"
            tile
            class="start-btn"
            height="60"
            >START DEPLOYING</v-btn
          >
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
          img: require('@/assets/imgs/index/products/Dweb.png'),
          title: 'Dweb Hosting',
        },
        {
          img: require('@/assets/imgs/index/products/Gateway.png'),
          title: 'Decentralized Gateway',
        },
        {
          img: require('@/assets/imgs/index/products/Globally.png'),
          title: 'Globally Acceleration',
        },
        {
          img: require('@/assets/imgs/index/products/Domains.png'),
          title: 'Decentralized Domains',
        },
        {
          img: require('@/assets/imgs/index/products/Digital.png'),
          title: ' Digital Marketing System',
        },
        {
          img: require('@/assets/imgs/index/products/Services.png'),
          title: 'Data Services',
        },
      ],
    }
  },
}
</script>
<style scoped>
.start-btn {
  width: 300px;
  height: 60px;
  background: linear-gradient(-90deg, #ffb830, #e31313, #ff30f8);
  font-size: 20px;
  font-weight: bold;
}
.main .img-box {
  width: 128px;
  height: 128px;
  display: flex;
  align-items: center;
  margin: 0 auto;
}
</style>
