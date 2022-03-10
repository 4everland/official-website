<template>
  <div class="home-block">
    <v-container class="my-16">
      <v-row>
        <v-col cols="12" md="12" lg="12">
          <div class="title-underline">Customer Success</div>
          <div class="block-titel">Join and Access to the Web3.0 world</div>
          <div class="block-text">
            See how developers large and small are leveraging 4EVERLAND to grow
            and improve their business
          </div>
        </v-col>
      </v-row>
      <v-row class="swiper-box">
        <swiper-cus></swiper-cus>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import SwiperCus from './SwiperCus.vue'
import '@/assets/styles/home.scss'
export default {
  components: {
    SwiperCus,
  },
  data() {
    return {}
  },
}
</script>
<style scoped>
.section-customer {
  padding: 40px 0;
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
}
.swiper-box {
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 80px;
}
</style>
