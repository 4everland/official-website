<template>
  <v-container
    id="slideWrap"
    ref="slideWrap"
    fluid
    class="main-container"
    :style="{
      backgroundImage: 'url(' + services[currentIndex].background + ')',
    }"
    @scroll.prevent="handleScroll"
  >
    <v-row class="carousel-container">
      <v-col>
        <v-row justify="center" align="center" class="text-left">
          <v-col cols="12">
            <h3 class="white--text header-title font-weight-bold">
              Get A FULLY PERSONALIZED EXPERIENCE ON 4EVERLAND
            </h3>
            <p class="white--text text-subtitle-1 mt-4">
              Immerse yourself in the full suite of Web3 services: Dweb Hosting,
              Storage, Gateway, RPC, RaaS, and AI RPC.
            </p>
          </v-col>
        </v-row>
        <v-row justify="space-between" class="pl-2 align-center">
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
          class="mt-8"
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
                  <p class="white--text text-subtitle-1 mt-4">
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
  }),
  mounted() {
    window.addEventListener('scroll', this.debouncedHandleScroll)
    this.slideWrapTop = this.$refs.slideWrap.getBoundingClientRect().top
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
      }, 10)
    },
    handleScroll(event) {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      const top = this.$refs.slideWrap.getBoundingClientRect().top
      const delta = scrollTop - this.lastScrollPosition
      // scroll up
      if (delta > 0 && top != null) {
        if (top <= 0 && top >= -10) {
          if (!this.startHeight) {
            this.startHeight = scrollTop
          }
          if (scrollTop - this.startHeight > 100) {
            if (this.currentIndex + 1 < 6) {
              this.changeSlide(this.currentIndex + 1)
              this.startHeight = scrollTop
              // eslint-disable-next-line eqeqeq
            } else {
              this.$refs.slideWrap.style.position = 'relative'
              this.$refs.slideWrap.style.height = '120vh'
            }
          }
        }
      } else {
        // scroll down
        // eslint-disable-next-line no-lonely-if
        if (top <= 180 && top >= -20) {
          this.$refs.slideWrap.style.position = 'sticky'
          if (this.startHeight - scrollTop > 100) {
            if (this.currentIndex - 1 >= 0) {
              this.changeSlide(this.currentIndex - 1)
              this.startHeight = scrollTop
            } else {
              this.$refs.slideWrap.style.position = 'sticky'
              this.$refs.slideWrap.style.height = '140vh'
            }
          }
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
  height: 140vh;
  background-size: cover;
  background-position: center bottom;
  position: sticky;
  top: 0;
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
    height: 1200px;
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
    height: 1200px;
  }
  .carousel-container {
    margin: 0 auto;
    width: 1280px;
  }
}
</style>
