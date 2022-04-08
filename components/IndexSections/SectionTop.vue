<template>
  <div id="banner">
    <v-row :class="{ 'text-center': $vuetify.breakpoint.smAndDown }">
      <v-col cols="12" md="12" lg="12">
        <v-carousel
          cycle
          height="800"
          hide-delimiters
          hide-delimiter-background
          show-arrows-on-hover
        >
          <v-carousel-item
            v-for="(item, i) in banner"
            :key="i"
            :src="item.src"
            reverse-transition="fade-transition"
            transition="fade-transition"
          >
            <v-row class="fill-height" align="center" justify="center">
              <div class="text-center">
                <div
                  class="text-h2 text-center font-weight-bold text-uppercase"
                  style="color: #132642"
                  v-html="item.title"
                ></div>
                <div
                  class="text-h5 text-center mt-10 mb-16 text-uppercase"
                  style="color: #6c7789"
                  v-html="item.tips"
                ></div>
                <v-btn
                  class="banner-btn text-h5 mt-16 px-16 text-uppercase"
                  height="60"
                  elevation="6"
                  :to="item.to"
                  :href="item.href"
                  :target="item.href ? '_blank' : ''"
                >
                  {{ item.button }}
                </v-btn>
              </div>
            </v-row>
          </v-carousel-item>
        </v-carousel>
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
          button: 'START DEPLOYING',
        },
        {
          src: require('@/assets/imgs/index/banner2.png'),
          href: this.hosting_web,
          title: 'DEPLOY TO HOSTING',
          tips: "Deploy your website on Hosting <br/> 4EVERLAND Can Help You Rebuild the Web's Foundation <br/> Layer and Transition to a New and Unbiased Web 3.0.",
          button: 'APPLY',
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
          title: 'DEVELOPERMENT GRANTS',
          tips: '20 MILLION 4EVER SPONSORSHIP TOKENS WILL BE AVAILABLE TO <br/> QUALIFIED PROJECTS FOR THEIR LONG TERM DEVELOPMENT. ',
          button: 'APPLY',
        },
      ],
      swiperOption: {
        speed: 1000,
        autoplay: {
          autoplay: false,
          delay: 5000,
          disableOnInteraction: false,
        },
        effect: 'fade',
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        on: {
          init() {},
          click() {},
        },
      },
    }
  },
  mounted() {},
  methods: {},
}
</script>
<style scoped>
.banner-btn {
  background: linear-gradient(90deg, #fdb6fe, #acc0fd, #31adfe);
  border-radius: 44px;
  color: #fff;
  text-shadow: 0 5px 6px rgba(120, 167, 206, 0.22);
}
</style>
