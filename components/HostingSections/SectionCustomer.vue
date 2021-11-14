<template>
  <div class="home-block section-customer">
    <v-container>
      <v-row>
        <v-col cols="12" md="12" lg="12">
          <div class="block-titel">Use Cases</div>
        </v-col>
      </v-row>
      <v-row class="swiper-box">
        <swiper-cus></swiper-cus>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import SwiperCus from '../IndexSections/SwiperCus.vue'
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
  padding: 70px 0;
  background-image: url('@/assets/imgs/index/customer-bg.png');
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
