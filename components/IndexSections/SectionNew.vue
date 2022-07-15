<template>
  <div id="new">
    <v-row :class="{ 'text-center': $vuetify.breakpoint.smAndDown }">
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
  </div>
</template>
<script>
export default {
  data() {
    return {
      banner: [
        {
          src: require('@/assets/imgs/index/banner1.png'),
          href: this.hosting_web,
          title: '4EVERLAND <br/> A Cloud Computing Platform Of Web3.0',
          tips: 'Build Web3.0 infrastructure for millions developers and projects',
          button: 'TRY FOR FREE',
        },
        {
          src: require('@/assets/imgs/index/banner2.png'),
          href: this.hosting_web,
          title: 'Host your Website on IPFS',
          tips: "Deploy your website on Hosting <br/> 4EVERLAND Can Help You Rebuild the Web's Foundation <br/> Layer and Transition to a New and Unbiased Web 3.0",
          button: 'TRY FOR FREE',
        },
        {
          src: require('@/assets/imgs/index/banner3.png'),
          to: '/bucket',
          title: '4EVERLAND BUCKET',
          tips: 'S3-compatible aggregator based on IPFS and Arweave',
          button: 'Try for Free',
        },
        {
          src: require('@/assets/imgs/index/banner4.png'),
          to: '/grants',
          title: 'DEVELOPER GRANTS',
          tips: '20 MILLION 4EVER SPONSORSHIP TOKENS WILL BE AVAILABLE TO <br/> QUALIFIED PROJECTS FOR THEIR LONG TERM DEVELOPMENT',
          button: 'APPLY',
        },
      ],
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
.css-1jb4ggb {
  width: 100%;
  height: 70%;
  top: 30%;
  object-position: bottom;
  object-fit: cover;
  position: relative;
  z-index: 1;
}
.css-75nahk {
  width: 100%;
  height: 100%;
  max-width: 740px;
  right: 50%;
  -webkit-transform: translateX(50%);
  -ms-transform: translateX(50%);
  transform: translateX(50%);
  bottom: 0;
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
</style>
