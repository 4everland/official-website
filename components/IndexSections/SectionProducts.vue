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
            <v-img :src="item.img" width="150px" class="ma-auto"> </v-img>
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
          img: require('@/assets/imgs/index/icon.png'),
          title: 'Global Acceleration',
        },
        {
          img: require('@/assets/imgs/index/icon.png'),
          title: 'Privacy Protection',
        },
        {
          img: require('@/assets/imgs/index/icon.png'),
          title: 'Distributed Storage',
        },
        {
          img: require('@/assets/imgs/index/icon.png'),
          title: 'Global Acceleration',
        },
        {
          img: require('@/assets/imgs/index/icon.png'),
          title: 'Privacy Protection',
        },
        {
          img: require('@/assets/imgs/index/icon.png'),
          title: 'Distributed Storage',
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
</style>
