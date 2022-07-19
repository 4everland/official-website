<template>
  <div id="new">
    <div class="universe-title">
      Welcome to a network of infinite possibilities
    </div>
    <v-row class="ani-box">
      <v-col cols="12" md="12" lg="12">
        <div class="css-75nahk">
          <video
            class="css-1jb4ggb"
            autoplay=""
            muted=""
            loop=""
            playsinline=""
          >
            <source
              src="@/assets/imgs/index/top/bg_video1803.mp4"
              type="video/mp4"
            />
          </video>
          <div class="css-hhqijc"><div class="css-k57fb3"></div></div>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col :cols="12" class="text-center" style="margin-top: 55px">
        <v-btn color="#000" tile class="white--text let-start"
          >Let's Start</v-btn
        >
      </v-col>
    </v-row>
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
  min-height: 500px;
  position: relative;
}
.universe-title {
  max-width: 800px;
  font-size: 28px;
  font-family: 'Ubuntu-Bold', sans-serif !important;
  font-weight: bold;
  color: #161617;
  text-align: center;
  margin: 0 auto;
  margin-top: 130px;
}
.ani-box {
  height: 200px;
}
.css-1jb4ggb {
  width: 100%;
  height: 100%;
  object-position: bottom;
  object-fit: cover;
  position: relative;
  z-index: 1;
}
.css-75nahk {
  width: 100%;
  height: 180px;
  max-width: 850px;
  right: 50%;
  -webkit-transform: translateX(50%);
  -ms-transform: translateX(50%);
  transform: translateX(50%);
  top: 80px;
  position: absolute;
  overflow: hidden;
  -webkit-mask-image: url('@/assets/imgs/index/top/Web-bg.png');
  mask-image: url('@/assets/imgs/index/top/Web-bg.png');
  -webkit-mask-position: 50% bottom;
  mask-position: 50% bottom;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-size: contain;
  mask-size: contain;
  background: rgb(167, 155, 234);
}
.let-start {
  width: 143px;
  height: 24px !important;
  font-family: 'Ubuntu', sans-serif !important;
}
</style>
