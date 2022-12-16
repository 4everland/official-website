<template>
  <div id="new">
    <v-container>
      <div class="universe-title">
        Come and be a part of the next era of infinite possibilities at
        4EVERLAND
      </div>
      <v-row class="ani-box">
        <v-col cols="12" md="12" lg="12">
          <div class="text-center">
            <v-img
              class="web-img"
              :src="require('@/assets/imgs/index/top/Web-bg.png')"
            ></v-img>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col :cols="12" class="text-center" style="margin-top: 55px">
          <v-btn
            color="#000"
            tile
            class="white--text let-start"
            :href="hosting_web"
            >Let's Start</v-btn
          >
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      screenWidth: null,
      screenHeight: null,
    }
  },
  computed: {
    bannerHeight() {
      const clientWidth = this.screenWidth
      let bannerHeight = (clientWidth / 2560) * 1000
      if (bannerHeight > 1000) {
        bannerHeight = 1000
      }
      return bannerHeight
    },
  },
  mounted() {
    window.screenWidth = document.body.clientWidth
    window.screenHeight = document.body.clientHeight
    this.screenWidth = window.screenWidth
    this.screenHeight = window.screenHeight
  },
  methods: {},
}
</script>
<style scoped>
#new {
  position: relative;
  padding-bottom: 155px;
}
.universe-title {
  /* max-width: 900px; */
  font-size: 36px;
  font-family: 'Ubuntu-Bold', sans-serif !important;
  font-weight: bold;
  color: #161617;
  text-align: center;
  margin: 0 auto;
  margin-top: 130px;
}

.web-img {
  width: 857px;
  margin: 0 auto;
  margin-top: 31px;
}
.let-start {
  width: 143px;
  font-family: 'Ubuntu', sans-serif !important;
}
@media (max-width: 960px) {
  #new {
    padding-bottom: 30px;
  }
  .universe-title {
    font-size: 14px;
    font-family: 'Ubuntu', sans-serif !important;
    font-weight: normal;
    margin: 0 auto;
    margin-top: 41px;
  }
}
</style>
