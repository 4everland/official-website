<template>
  <v-container fluid class="main-container">
    <v-row justify="center" align="center" class="text-left">
      <v-col cols="12">
        <h3 class="white--text text-h3 font-weight-bold">
          4EVERLAND IS IN A STATE OF GENERAL AVAILABILITY
        </h3>
        <p class="white--text text-subtitle-1 mt-4">
          Offering comprehensive services to support & drive your innovation
          forward.
        </p>
      </v-col>
    </v-row>

    <v-row class="mt-12 carousel-container">
      <v-col>
        <v-row justify="space-between" class="pl-2">
          <v-col>
            <div class="carousel-delimiters">
              <div
                v-for="(slide, i) in slides"
                :key="i"
                class="carousel-delimiter"
                :class="{ active: i === currentIndex }"
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
          @change="onCarouselChange"
        >
          <v-carousel-item v-for="(slide, i) in slides" :key="i">
            <v-sheet height="100%" class="carousel-sheet">
              <div class="d-flex fill-height justify-center">
                <v-row>
                  <v-col>
                    <v-row class="mt-4 mb-4" align="center">
                      <div>
                        <v-img
                          class="ml-4 mr-2"
                          :src="
                            require('@/assets/imgs/act/firstleap/icon/g1.png')
                          "
                          width="20"
                        ></v-img>
                      </div>
                      <p class="mb-0">Dapp Hosting</p>
                    </v-row>
                    <h3 class="white--text text-h3 font-weight-bold">
                      Scalable, Secure, and Efficient
                    </h3>
                    <p class="white--text text-subtitle-1 mt-4">
                      Effortlessly build, deploy, and host decentralized
                      websites and apps on IPFS, Arweave, Dfinity, or BNB
                      Greenfield in minutes.
                    </p>
                    <v-row class="mt-6 host-icon">
                      <div>
                        <v-img
                          :src="require('@/assets/imgs/footer/discord.png')"
                        ></v-img>
                      </div>
                      <div>
                        <v-img
                          :src="require('@/assets/imgs/footer/email.png')"
                        ></v-img>
                      </div>
                      <div>
                        <v-img
                          :src="require('@/assets/imgs/footer/medium.png')"
                        ></v-img>
                      </div>
                      <div>
                        <v-img
                          :src="require('@/assets/imgs/footer/github.png')"
                        ></v-img>
                      </div>
                    </v-row>
                  </v-col>
                  <v-col align="right">
                    <v-img
                      :src="require('@/assets/imgs/forward/hosting.png')"
                    ></v-img>
                  </v-col>
                </v-row>
              </div>
            </v-sheet>
          </v-carousel-item>
        </v-carousel>
      </v-col>
    </v-row>

    <!-- <v-row justify="center" class="mt-16">
      <v-col
        v-for="(service, index) in services"
        :key="index"
        cols="12"
        sm="4"
        class="text-center"
      >
        <v-img :src="service.icon" contain height="100" class="mb-4"></v-img>
        <h2 class="white--text text-h4 font-weight-bold mb-4">
          {{ service.title }}
        </h2>
        <p class="white--text">{{ service.description }}</p>
      </v-col>
    </v-row> -->
  </v-container>
</template>

<script>
export default {
  name: '4EverLandServices',
  data: () => ({
    services: [
      {
        icon: '/path/to/dapp-hosting-icon.png',
        title: 'Dapp Hosting',
        description:
          'Scalable, secure, and efficient decentralized hosting solution',
      },
      {
        icon: '/path/to/storage-icon.png',
        title: 'Storage',
        description:
          'Seamlessly Upload And Pin Files To IPFS And Arweave For Secure, Decentralized Storage',
      },
      {
        icon: '/path/to/gateway-icon.png',
        title: 'Gateway',
        description:
          'Leverage Globally Distributed Nodes For Enhanced Speed, Reliability, And Automatic Resource Allocation',
      },
    ],
    slides: ['First', 'Second', 'Third', 'Fourth', 'Fifth', 'Sixth'],
    currentIndex: 0,
  }),
  methods: {
    goToSlide(index) {
      this.$refs.carousel.go(index)
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
  background: linear-gradient(to bottom right, #1e0057, #3d0e61);
  padding: 64px 80px;
  max-width: 100%;
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
  background-color: #ccc;
  margin: 0 4px;
  cursor: pointer;
}

.carousel-delimiter.active {
  background-color: #007bff;
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
