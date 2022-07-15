<template>
  <div class="home-block">
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
.swiper-box {
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 80px;
}
</style>
