<template>
  <div id="banner">
    <v-row :class="{ 'text-center': $vuetify.breakpoint.smAndDown }">
      <v-col cols="12" md="12" lg="12">
        <swiper :key="$vuetify.breakpoint.smAndDown" :options="swiperOption">
          <swiper-slide
            v-for="(item, index) in banner"
            :key="index"
            class="swiper-slide"
          >
            <nuxt-link v-if="item.to" :to="item.to">
              <v-img
                contain
                width="100%"
                :src="$vuetify.breakpoint.smAndDown ? item.srcMobile : item.src"
              />
            </nuxt-link>
            <a v-else :href="item.href" target="_blank">
              <v-img
                contain
                width="100%"
                :src="$vuetify.breakpoint.smAndDown ? item.srcMobile : item.src"
              />
            </a>
          </swiper-slide>
          <div
            v-if="!$vuetify.breakpoint.smAndDown"
            slot="pagination"
            class="swiper-pagination"
          ></div>
        </swiper>
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
          srcMobile: require('@/assets/imgs/index/mbanner1.png'),
          to: '/firstlanding',
        },
        {
          src: require('@/assets/imgs/index/banner2.png'),
          srcMobile: require('@/assets/imgs/index/mbanner2.png'),

          to: '/firstleap',
        },
        {
          src: require('@/assets/imgs/index/banner3.png'),
          srcMobile: require('@/assets/imgs/index/mbanner3.png'),

          to: '/grants',
        },
        {
          src: require('@/assets/imgs/index/banner4.png'),
          srcMobile: require('@/assets/imgs/index/mbanner4.png'),

          href: this.hosting_web,
        },
      ],
      swiperOption: {
        speed: 1000,
        autoplay: {
          disableOnInteraction: false,
        },
        effect: 'fade',
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        on: {
          init() {},
          click() {
            console.log(this)
          },
        },
      },
    }
  },

  methods: {},
}
</script>
<style scoped>
/deep/.swiper-pagination-fraction,
.swiper-pagination-custom,
.swiper-container-horizontal > .swiper-pagination-bullets {
  bottom: 30px;
}
/deep/ .swiper-pagination-bullet {
  background: #505050;
  height: 12px;
  width: 12px;
  border-radius: 0;
  opacity: 1;
  margin: 0 8px !important;
}
/deep/ .swiper-pagination-bullet-active {
  opacity: 1;
  background: linear-gradient(-90deg, #ffb830, #e31313, #ff30f8);
  position: relative;
}
/deep/.swiper-pagination-bullet-active::after {
  content: '';
  width: 24px;
  height: 24px;
  border: 2px solid transparent;
  border-image: -webkit-linear-gradient(-90deg, #ffb830, #e31313, #ff30f8) 1;
  border-image: -moz-linear-gradient(-90deg, #ffb830, #e31313, #ff30f8) 1;
  border-image: -o-linear-gradient(-90deg, #ffb830, #e31313, #ff30f8) 1;
  border-image: linear-gradient(-90deg, #ffb830, #e31313, #ff30f8) 1;
  position: absolute;
  left: -50%;
  top: -50%;
}
</style>
