<template>
  <v-container fluid class="main-container">
    <v-row class="carousel-container">
      <v-col>
        <v-row justify="center" align="center" class="text-left">
          <v-col cols="12">
            <h3 class="white--text text-h3 font-weight-bold">
              GET STARTED WITH 4EVERLAND
            </h3>
            <p class="white--text text-subtitle-1 mt-4">
              Offering comprehensive services, including DWeb Hosting, Storage,
              Gateway, RPC, RaaS, and AI RPC.
            </p>
          </v-col>
        </v-row>
        <v-row justify="space-between" class="pl-2 mt-12">
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
            <v-btn color="#6172F3" class="white--text mt-8 start-btn">
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
          height="400"
          hide-delimiters
          cycle
          :show-arrows="false"
          :value="currentIndex"
          @change="onCarouselChange"
        >
          <v-carousel-item v-for="(item, i) in services" :key="i">
            <v-sheet height="100%" class="carousel-sheet">
              <div class="d-flex fill-height justify-center">
                <v-row>
                  <v-col>
                    <v-row class="mt-4 mb-4" align="center">
                      <div>
                        <v-img
                          class="ml-4 mr-2"
                          :src="item.icon"
                          width="20"
                        ></v-img>
                      </div>
                      <p class="mb-0">{{ item.title }}</p>
                    </v-row>
                    <h3 class="white--text text-h3 font-weight-bold">
                      {{ item.description }}
                    </h3>
                    <p class="white--text text-subtitle-1 mt-4">
                      {{ item.text }}
                    </p>
                  </v-col>
                  <v-col align="right">
                    <v-img :src="item.img" width="600"></v-img>
                  </v-col>
                </v-row>
              </div>
            </v-sheet>
          </v-carousel-item>
        </v-carousel>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: '4EverLandServices',
  data: () => ({
    services: [
      {
        icon: require('@/assets/imgs/forward/icon/AI.svg'),
        title: 'Dapp Hosting',
        description:
          'Scalable, Secure, and Efficient Decentralized Hosting Solution',
        text: 'Effortlessly build, deploy, and host decentralized websites and apps on IPFS, Arweave, Dfinity, or BNB Greenfield in minutes.',
        img: require('@/assets/imgs/forward/showcase/hosting.png'),
        background: require('@/assets/imgs/forward/background/background_hosting.png'),
      },
      {
        icon: require('@/assets/imgs/forward/icon/Storage.svg'),
        title: 'Dapp Hosting',
        description: 'Effortlessly Upload & Pin Files to IPFS and Arweave',
        text: 'Use our UI, CLI, or SDK to easily decentralize your files. Our built-in pinning orchestration makes the process of uploading and pinning files to IPFS and Arweave seamless.',
        img: require('@/assets/imgs/forward/showcase/storage.png'),
        background: require('@/assets/imgs/forward/background/background_storage.png'),
      },
      {
        icon: require('@/assets/imgs/forward/icon/Gateway.svg'),
        title: 'Gateway',
        description:
          'SEnhanced Speed, Reliability, and Automatic Resource Allocation',
        text: 'The 4EVERLAND gateway leverages globally distributed nodes to facilitate seamless access to decentralized networks like IPFS, Arweave, ICP, and BNB Greenfield.',
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
          'Customizable Rollup Solutions for enhanced blockchain scalability',
        text: 'Custimize your Layer2 blockchain with 4EVERLAND RaaS (Rollup as a Service).',
        img: require('@/assets/imgs/forward/showcase/raas.png'),
        background: require('@/assets/imgs/forward/background/background_raas.png'),
      },
      {
        icon: require('@/assets/imgs/forward/icon/AI.svg'),
        title: 'AI RPC',
        description:
          'A Streamlined Interface to Leverage Diverse Large Language Models',
        text: 'A unified interface for 100+ LLMs, enabling you to explore, compare, and select models and pricing options tailored to your specific needs.',
        img: require('@/assets/imgs/forward/showcase/ai.png'),
        background: require('@/assets/imgs/forward/background/background_ai.png'),
      },
    ],
    currentIndex: 0,
  }),
  methods: {
    changeSlide(index) {
      this.currentIndex = index
    },
    onCarouselChange(index) {
      this.currentIndex = index
    },
  },
}
</script>

<style scoped>
.main-container {
  padding: 64px 80px;
  max-width: 100%;
}

.carousel-item-background {
  width: 100%;
  padding: 64px 80px;
  background-size: contain;
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
.carousel-delimiters {
  display: flex;
  justify-content: center;
  margin-top: 16px;
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
    padding: 64px 0;
  }
  .carousel-delimiters {
    max-width: 100%;
    width: 200%;
  }
}
</style>
