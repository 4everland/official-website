<template>
  <v-container
    id="slideWrap"
    ref="slideWrap"
    fluid
    class="main-container"
    :style="{
      backgroundImage: 'url(' + services[currentIndex].background + ')',
    }"
  >
    <v-row class="carousel-container">
      <v-col>
        <v-row justify="center" align="center" class="text-left">
          <v-col cols="12">
            <h3 class="white--text header-title font-weight-bold">
              Get A FULLY PERSONALIZED EXPERIENCE
            </h3>
            <p class="p-text text-subtitle-1 mt-4">
              Immerse yourself in the full suite of Web3 services: Dweb Hosting,
              Storage, Gateway, RPC, RaaS, and AI RPC.
            </p>
          </v-col>
        </v-row>
        <v-row justify="space-between" class="pl-2 align-center pt-xl-16">
          <v-col>
            <div class="carousel-delimiters">
              <div
                v-for="(item, i) in services"
                :key="i"
                class="carousel-delimiter"
                :class="{ active: i === currentIndex }"
                @click="changeSlide(i)"
              ></div>
            </div>
          </v-col>
          <v-col align="right">
            <v-btn
              color="#6172F3"
              href="https://dashboard.4everland.org/"
              target="_blank"
              class="white--text start-btn"
            >
              Get Started
              <div class="right-icon">
                <v-img
                  class="join_button_icon"
                  :src="
                    require('@/assets/imgs/index/newui/arrow-narrow-right.svg')
                  "
                ></v-img>
              </div>
            </v-btn>
          </v-col>
        </v-row>
        <v-carousel
          class="mt-8 mt-xl-16 carousel-wrap"
          hide-delimiters
          vertical
          :show-arrows="false"
          :value="currentIndex"
          @change="onCarouselChange"
        >
          <v-carousel-item v-for="(item, i) in services" :key="i">
            <v-sheet class="carousel-sheet">
              <!-- <div class="d-flex justify-center"> -->
              <v-row>
                <v-col>
                  <div class="mt-4 mb-4 d-flex justify-start">
                    <div>
                      <v-img class="mr-2" :src="item.icon" width="20"></v-img>
                    </div>
                    <p class="mb-0">{{ item.title }}</p>
                  </div>
                  <h3 class="white--text description font-weight-bold">
                    {{ item.description }}
                  </h3>
                  <p class="p-text text-subtitle-1 mt-4">
                    {{ item.text }}
                  </p>
                </v-col>
                <v-col>
                  <div>
                    <v-img :src="item.img" class="item-img"></v-img>
                  </div>
                </v-col>
              </v-row>
              <!-- </div> -->
            </v-sheet>
          </v-carousel-item>
        </v-carousel>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    services: [
      {
        icon: require('@/assets/imgs/forward/icon/hosting.svg'),
        title: 'DWeb Hosting',
        description:
          'Scalable, Secure, and Efficient Decentralized Hosting Solution',
        text: 'Effortlessly build, deploy, and host decentralized websites and apps on IPFS, Arweave, Dfinity, or BNB Greenfield in seconds.',
        img: require('@/assets/imgs/forward/showcase/hosting.png'),
        background: require('@/assets/imgs/forward/background/background_hosting.png'),
      },
      {
        icon: require('@/assets/imgs/forward/icon/Storage.svg'),
        title: 'Storage',
        description: 'Effortlessly Upload & Pin Files to IPFS and Arweave',
        text: 'Use our UI, CLI, or SDK to easily decentralize your files. Our built-in pinning orchestration makes the process of uploading and pinning files to IPFS and Arweave seamless.',
        img: require('@/assets/imgs/forward/showcase/storage.png'),
        background: require('@/assets/imgs/forward/background/background_storage.png'),
      },
      {
        icon: require('@/assets/imgs/forward/icon/Gateway.svg'),
        title: 'Gateway',
        description:
          'Enhanced Speed, Reliability, and Automatic Resource Allocation',
        text: 'The 4EVERLAND gateway leverages globally distributed nodes to facilitate seamless access to decentralized networks like IPFS, Arweave, Dfinity, and BNB Greenfield.',
        img: require('@/assets/imgs/forward/showcase/gateway.png'),
        background: require('@/assets/imgs/forward/background/background_gateway.png'),
      },
      {
        icon: require('@/assets/imgs/forward/icon/RPC.svg'),
        title: 'RPC',
        description:
          'High-Speed, Reliable, and Cost-Effective Blockchain Node Access',
        text: '4EVERLAND RPC offers high-speed, reliable remote procedure call (RPC) services for seamless interaction with diverse blockchain networks.',
        img: require('@/assets/imgs/forward/showcase/rpc.png'),
        background: require('@/assets/imgs/forward/background/background_rpc.png'),
      },
      {
        icon: require('@/assets/imgs/forward/icon/RaaS.svg'),
        title: 'RaaS',
        description:
          'Customizable Rollup Solutions for Enhanced Blockchain scalability',
        text: 'Customize your Layer2 blockchain with 4EVERLAND Rollup as a Service (RaaS).',
        img: require('@/assets/imgs/forward/showcase/raas.png'),
        background: require('@/assets/imgs/forward/background/background_raas.png'),
      },
      {
        icon: require('@/assets/imgs/forward/icon/AI.svg'),
        title: 'AI RPC',
        description:
          'A Streamlined Interface to Leverage Diverse Large Language Models',
        text: ' A unified interface for 100+ LLMs, enabling to explore, compare, and select models and pricing options tailored to your specific needs.',
        img: require('@/assets/imgs/forward/showcase/ai.png'),
        background: require('@/assets/imgs/forward/background/background_ai.png'),
      },
    ],
    currentIndex: 0,
    startHeight: 0,
    lastScrollPosition: 0,
    lastPosition: 0,
    timer: null,
    slideWrapTop: 0,
    scrolling: false,
  }),
  mounted() {
    window.addEventListener('scroll', this.debouncedHandleScroll)
    this.slideWrapTop = document
      .getElementById('slideWrap')
      .getBoundingClientRect().top
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.debouncedHandleScroll)
  },
  methods: {
    changeSlide(index) {
      this.currentIndex = index
    },
    onCarouselChange(index) {
      this.currentIndex = index
    },
    debouncedHandleScroll() {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      this.timer = setTimeout(() => {
        this.handleScroll()
        this.timer = null
      }, 0)
    },
    onScroll(event) {
      this.$vuetify.goTo('#structure', {
        duration: 300,
        offset: -70,
        easing: 'easeInOutCubic',
      })
    },
    onScrollToSectionTwo(event) {
      this.scrolling = true
      this.$vuetify.goTo('#pionWrap', {
        duration: 300,
        offset: 0,
        easing: 'easeInOutCubic',
      })
      setTimeout(() => {
        this.scrolling = false
      }, 500)
    },
    handleScroll(event) {
      if (this.scrolling) return
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      const top = document
        .getElementById('slideWrap')
        .getBoundingClientRect().top
      const slideWrapBottom = document
        .getElementById('slideWrap')
        .getBoundingClientRect().bottom
      const delta = scrollTop - this.lastScrollPosition
      if (top > 100 || slideWrapBottom < -100) return
      if (delta < 0) {
        const structureTop = document
          .getElementById('structure')
          .getBoundingClientRect().top
        if (structureTop > 0 && structureTop < 200) {
          this.scrolling = true
          if (!this.slideWrapTop) {
            this.slideWrapTop = document
              .getElementById('slideWrap')
              .getBoundingClientRect().top
          }
          this.$vuetify.goTo(this.slideWrapTop, {
            duration: 100,
            offset: 0,
            easing: 'easeInOutCubic',
          })
          setTimeout(() => {
            this.scrolling = false
            this.$refs.slideWrap.style.position = 'sticky'
          }, 100)
        }
      }
      // scroll up
      if (delta > 0 && top != null) {
        if (top <= 0 && top >= -10) {
          if (!this.startHeight) {
            this.startHeight = scrollTop
          }
          if (scrollTop - this.startHeight > 200) {
            if (this.currentIndex + 1 < 6) {
              this.changeSlide(this.currentIndex + 1)
              this.startHeight = scrollTop
              // eslint-disable-next-line eqeqeq
            } else {
              this.$refs.slideWrap.style.position = 'relative'
              this.$refs.slideWrap.style.height = '300vh'
              this.slideWrapTop = scrollTop
              this.onScroll()
            }
          }
        }
      } else {
        // scroll down
        // eslint-disable-next-line no-lonely-if
        if (top < 80 && top >= -20) {
          this.$refs.slideWrap.style.position = 'sticky'
          if (this.startHeight - scrollTop > 200) {
            if (this.currentIndex - 1 >= 0) {
              if (!this.scrolling) {
                this.changeSlide(this.currentIndex - 1)
              }
              this.startHeight = scrollTop
            } else {
              this.$refs.slideWrap.style.position = 'sticky'
              this.$refs.slideWrap.style.height = '300vh'
            }
          }
        } else if (top > 50) {
          this.onScrollToSectionTwo()
        }
      }
      this.lastScrollPosition = scrollTop
      // })
    },
  },
}
</script>

<style scoped>
.main-container {
  padding: 64px 80px;
  max-width: 100%;
  height: 300vh;
  background-position: center top;
  position: sticky;
  top: 0;
}
.p-text {
  color: white;
  opacity: 0.7;
}
.header-title {
  font-size: 48px;
}
.v-btn {
  justify-content: flex-end !important;
}
.start-btn {
  width: 203px;
  padding: 24px 0 !important;
  border-radius: 48px;
  font-weight: bold;
}
.item-img {
  width: 600px;
}
.right-icon {
  padding: 7px;
  border-radius: 20px;
  background-color: #fff;
  margin-left: 24px;
  margin-right: 8px;
}
.join_button_icon {
  width: 24px;
  height: 24px;
  max-width: 24px;
  text-align: center;
}
.carousel-container {
  position: relative;
}
.carousel-sheet {
  background-color: transparent !important;
}
.description {
  font-size: 24px;
}
.carousel-delimiters {
  display: flex;
  justify-content: center;
}
.carousel-delimiter {
  width: 120px;
  height: 4px;
  border-radius: 2px;
  background-color: #30384a;
  margin: 0 4px;
  cursor: pointer;
}
.carousel-delimiter.active {
  background-color: #fff;
}
p {
  color: #fff;
}
.host-icon div {
  margin: 0 10px;
}
@media (max-width: 960px) {
  .main-container {
    padding: 60px 20px;
    height: 200vh !important;
  }
  .header-title {
    font-size: 30px;
  }
  .carousel-delimiters {
    max-width: 100%;
    width: 200%;
  }
  .item-img {
    width: 340px;
  }
}
@media (min-width: 1441px) {
  .main-container {
    height: 300vh;
  }
  .carousel-container {
    margin: 0 auto;
    width: 1280px;
    margin-top: 100px;
  }
  .carousel-wrap {
    margin-top: 150px !important;
  }
}
</style>
