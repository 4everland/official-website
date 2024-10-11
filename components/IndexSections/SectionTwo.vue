<!-- eslint-disable vue/v-slot-style -->
<template>
  <v-container id="pionWrap" ref="pionWrap" fluid class="build-container pt-16">
    <v-row align="center">
      <v-col cols="12">
        <div ref="pionTitle" class="pion_title pb-16">
          <h4 class="white--text building-title font-weight-bold">
            PIONEERING WEB3 EVOLUTION
          </h4>
          <div class="building-subtitle py-5">
            Accelerating innovation with our unrivaled suite of services.
          </div>
        </div>
        <div class="pion_content">
          <div class="research-radar-wrapper">
            <div class="research-radar">
              <v-img
                class="radarbg"
                :src="require('@/assets/imgs/index/newui/radarbg.png')"
              ></v-img>
              <v-img
                class="radar_search"
                :src="require('@/assets/imgs/index/newui/radar1.png')"
              ></v-img>
              <v-img
                class="radar_icon"
                width="160"
                :src="require('@/assets/imgs/index/newui/radar_logo.png')"
              ></v-img>
              <div class="radar_search_item_wrap">
                <div class="radar_search_item_gateway">
                  <div class="radius_bgWrap d-flex align-center justify-center">
                    <div
                      ref="radarItem1"
                      class="radius_bg2 d-flex align-center justify-center"
                    ></div>
                  </div>
                  <div class="radius_bg d-flex align-center justify-center">
                    <v-img
                      contain
                      class="gateway_img"
                      width="24"
                      height="24"
                      justify="center"
                      :src="
                        require('@/assets/imgs/index/newui/radarItem/gateway.png')
                      "
                    ></v-img>
                  </div>
                  <span class="tips"> Gateway </span>
                </div>
                <div class="radar_search_item_storage">
                  <div class="radius_bgWrap d-flex align-center justify-center">
                    <div
                      ref="radarItem2"
                      class="radius_bg2 d-flex align-center justify-center"
                    ></div>
                  </div>
                  <div class="radius_bg d-flex align-center justify-center">
                    <v-img
                      contain
                      class="storage_img"
                      width="24"
                      height="24"
                      :src="
                        require('@/assets/imgs/index/newui/radarItem/storage.png')
                      "
                    ></v-img>
                  </div>
                  <span class="tips"> Storage </span>
                </div>
                <div class="radar_search_item_hosting">
                  <div class="radius_bgWrap d-flex align-center justify-center">
                    <div
                      ref="radarItem3"
                      class="radius_bg2 d-flex align-center justify-center"
                    ></div>
                  </div>
                  <div class="radius_bg d-flex align-center justify-center">
                    <v-img
                      contain
                      class="storage_img"
                      width="24"
                      height="24"
                      :src="
                        require('@/assets/imgs/index/newui/radarItem/hosting.png')
                      "
                    ></v-img>
                  </div>
                  <span class="tips"> DWeb Hosting </span>
                </div>
                <div class="radar_search_item_rpc">
                  <div class="radius_bgWrap d-flex align-center justify-center">
                    <div
                      ref="radarItem4"
                      class="radius_bg2 d-flex align-center justify-center"
                    ></div>
                  </div>
                  <div class="radius_bg d-flex align-center justify-center">
                    <v-img
                      contain
                      class="storage_img"
                      width="24"
                      height="24"
                      :src="
                        require('@/assets/imgs/index/newui/radarItem/rpc.png')
                      "
                    ></v-img>
                  </div>
                  <span class="tips"> RPC </span>
                </div>
                <div class="radar_search_item_raas">
                  <div class="radius_bgWrap d-flex align-center justify-center">
                    <div
                      ref="radarItem5"
                      class="radius_bg2 d-flex align-center justify-center"
                    ></div>
                  </div>
                  <div class="radius_bg d-flex align-center justify-center">
                    <v-img
                      contain
                      class="storage_img"
                      width="24"
                      height="24"
                      :src="
                        require('@/assets/imgs/index/newui/radarItem/raas.png')
                      "
                    ></v-img>
                  </div>
                  <span class="tips"> RaaS </span>
                </div>
                <div class="radar_search_item_airpc">
                  <div class="radius_bgWrap d-flex align-center justify-center">
                    <div
                      ref="radarItem6"
                      class="radius_bg2 d-flex align-center justify-center"
                    ></div>
                  </div>
                  <div class="radius_bg d-flex align-center justify-center">
                    <v-img
                      contain
                      class="storage_img"
                      width="24"
                      height="24"
                      :src="
                        require('@/assets/imgs/index/newui/radarItem/airpc.png')
                      "
                    ></v-img>
                  </div>
                  <span class="tips"> AI Solution</span>
                </div>
              </div>
            </div>
          </div>
          <div class="build-item-wrap">
            <v-row class="item-nowrap">
              <v-col>
                <v-card class="pa-6 build-card" dark>
                  <div class="text-building-item font-weight-bold">200+</div>
                  <p class="text-h6 mt-4">Providers</p>
                </v-card>
              </v-col>
              <v-col>
                <v-card class="pa-6 build-card" dark>
                  <div class="text-building-item font-weight-bold">27x</div>
                  <p class="text-h6 mt-4">Build Speed</p>
                </v-card>
              </v-col>
              <v-col>
                <v-card class="pa-6 build-card" dark>
                  <div class="text-building-item font-weight-bold">6x</div>
                  <p class="text-h6 mt-4">Cost Saving</p>
                </v-card>
              </v-col>
              <v-col>
                <v-card class="pa-6 build-card" dark>
                  <div class="text-building-item font-weight-bold">
                    300, 000+
                  </div>
                  <p class="text-h6 mt-4">Developers</p>
                </v-card>
              </v-col>
              <v-col>
                <v-card class="pa-6 build-card" dark>
                  <div class="text-building-item font-weight-bold">
                    180, 000+
                  </div>
                  <p class="text-h6 mt-4">Dapps</p>
                </v-card>
              </v-col>
            </v-row>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      items: [
        { value: '300,000+', label: 'Developers' },
        { value: '150,000+', label: 'Dapps' },
        { value: '270,000,000+', label: 'Files' },
        { value: '200,000+', label: 'Buckets' },
      ],
      scrolling: false,
    }
  },
  computed: {},
  mounted() {
    this.init()
  },
  methods: {
    init() {
      this.init1()
      this.init2()
      this.init3()
      this.init4()
      this.init5()
      this.init6()
    },
    async init1() {
      await this.sleep(3300)
      this.$refs.radarItem1.classList.add('radar_item_active')
      setTimeout(() => {
        this.$refs.radarItem1.classList.remove('radar_item_active')
      }, 4000)
      setInterval(() => {
        this.$refs.radarItem1.classList.add('radar_item_active')
        setTimeout(() => {
          this.$refs.radarItem1.classList.remove('radar_item_active')
        }, 4000)
      }, 10000)
    },
    async init2() {
      await this.sleep(4133)
      this.$refs.radarItem2.classList.add('radar_item_active')
      setTimeout(() => {
        this.$refs.radarItem2.classList.remove('radar_item_active')
      }, 4000)
      setInterval(() => {
        this.$refs.radarItem2.classList.add('radar_item_active')
        setTimeout(() => {
          this.$refs.radarItem2.classList.remove('radar_item_active')
        }, 4000)
      }, 10000)
    },
    async init3() {
      await this.sleep(4966)
      this.$refs.radarItem3.classList.add('radar_item_active')
      setTimeout(() => {
        this.$refs.radarItem3.classList.remove('radar_item_active')
      }, 4000)
      setInterval(() => {
        this.$refs.radarItem3.classList.add('radar_item_active')
        setTimeout(() => {
          this.$refs.radarItem3.classList.remove('radar_item_active')
        }, 4000)
      }, 10000)
    },
    async init4() {
      await this.sleep(5799)
      this.$refs.radarItem4.classList.add('radar_item_active')
      setTimeout(() => {
        this.$refs.radarItem4.classList.remove('radar_item_active')
      }, 4000)
      setInterval(() => {
        this.$refs.radarItem4.classList.add('radar_item_active')
        setTimeout(() => {
          this.$refs.radarItem4.classList.remove('radar_item_active')
        }, 4000)
      }, 10000)
    },
    async init5() {
      await this.sleep(6632)
      this.$refs.radarItem5.classList.add('radar_item_active')
      setTimeout(() => {
        this.$refs.radarItem5.classList.remove('radar_item_active')
      }, 4000)
      setInterval(() => {
        this.$refs.radarItem5.classList.add('radar_item_active')
        setTimeout(() => {
          this.$refs.radarItem5.classList.remove('radar_item_active')
        }, 4000)
      }, 10000)
    },
    async init6() {
      await this.sleep(7265)
      this.$refs.radarItem6.classList.add('radar_item_active')
      setTimeout(() => {
        this.$refs.radarItem6.classList.remove('radar_item_active')
      }, 4000)
      setInterval(() => {
        this.$refs.radarItem6.classList.add('radar_item_active')
        setTimeout(() => {
          this.$refs.radarItem6.classList.remove('radar_item_active')
        }, 4000)
      }, 10000)
    },
    sleep(timestamp) {
      return new Promise((resolve) => {
        setTimeout(resolve, timestamp)
      })
    },
    onScroll(event) {
      this.scrolling = true
      this.$vuetify.goTo('#slideWrap', {
        duration: 300,
        offset: -60,
        easing: 'easeInOutCubic',
      })
      setTimeout(() => {
        this.scrolling = false
      }, 500)
    },
    getElementBottomRelativeToViewportBottom(element) {
      const rect = element.getBoundingClientRect()
      return window.innerHeight - rect.bottom
    },
  },
}
</script>
<style lang="less" scoped>
.build-container {
  position: relative;
  min-height: 140vh;
}
.p-text {
  color: white;
  opacity: 0.7;
}
.sectionContent {
  font-family: Inter, Arial, sans-serif;
}
.building-title {
  font-size: 44px;
}
.building-subtitle {
  font-size: 20px;
  color: #fff;
  opacity: 0.7;
}
.pion_content {
  position: relative;
  height: 800px;
  overflow: hidden;
}
.research-radar-wrapper {
  display: flex;
  justify-content: center;
}
.research-radar {
  height: 890px;
  position: relative;
  width: 890px;
  min-width: 890px;
  .radarbg {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
    width: 100%;
    height: 100%;
  }
  .radar_search {
    animation: researchRadarRotate 10s infinite linear;
  }
  .radar_icon {
    height: 160px;
    left: 50%;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 160px;
    z-index: 10;
  }
  @keyframes researchRadarRotate {
    0% {
      transform: rotate(-201deg);
    }

    to {
      transform: rotate(159deg);
    }
  }
}
.build-item-wrap {
  height: 445px;
  left: 50%;
  position: absolute;
  top: 737px;
  transform: translate(-50%, -291px);
  width: 100%;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.75) 0%, #000 100%);
  z-index: 1;
  padding-top: 85px;
}
.build-card {
  background: #00000080;
  border: 1px solid #ffffff26;
  border-radius: 12px;
  padding: 24px;
  margin-top: 52px;
  .text-h6 {
    color: #fff;
  }
}
.build-card:hover {
  border: 1px solid #c7d7fe;
  box-shadow: 0 0 8px 0 #6172f380;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    linear-gradient(180deg, rgba(18, 21, 54, 0) 0%, #121536 100%);
}
.build-card::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 0;
  transform: translate(0, -8px);
  width: 2px;
  height: 16px;
  border-left: 2px solid #a4bcfd;
}
.build-card::after {
  content: '';
  position: absolute;
  top: 50%;
  right: 0;
  transform: translate(0, -8px);
  width: 2px;
  height: 16px;
  border-right: 2px solid #a4bcfd;
}
.text-building-item {
  font-size: 32px;
  color: #fff;
  font-weight: bold;
}
.tooltip_bg {
  background: linear-gradient(87.49deg, #00c6fb 7.23%, #005bea 100%);
}

.tips {
  position: absolute;
  top: -27px;
  left: -82px;
  width: 75px;
  height: 25px;
  font-size: 14px;
  color: #fff;
  text-align: center;
  line-height: 120%;
  border-radius: 8px 8px 2px 8px;
  padding: 4px 8px 4px 8px;
  background: linear-gradient(87.49deg, #00c6fb 7.23%, #005bea 100%);
}
.radius_bg2 {
  width: 70px;
  height: 70px;
  border-radius: 40px;
  background: #121535;
  box-shadow: 0 0 28px 0 #c7d7fe60;
  opacity: 0;
}
.radius_bg2_active {
  border-radius: 30px;
  background: #121535;
  transition: box-shadow 4s ease;
  box-shadow: 0 0 18px 0 #c7d7fe60;
  animation: radiusBoxShadow 4s linear;
}
@keyframes radiusBoxShadow {
  0% {
    box-shadow: 0 0 18px 0 #c7d7fe60;
  }
  80% {
    box-shadow: 0 0 38px 0 #c7d7fe60;
  }
  to {
    box-shadow: 0 0 48px 0 #c7d7fe60;
  }
}
.radius_bg {
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background: #121535;
  border: 1px solid #3538cd;
  box-shadow: 0 0 8px 0 #c7d7fe80;
}
.radius_bgWrap {
  width: 120px;
  height: 120px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -1;
}
.radar_search_item_gateway {
  position: absolute;
  top: 270px;
  left: 160px;
  width: 40px;
  height: 40px;
  z-index: 10;
  .tips {
    position: absolute;
    top: -25px;
    left: -84px;
    width: 75px;
    height: 25px;
    color: #fff;
    text-align: center;
    border-radius: 8px 8px 2px 8px;
    background: linear-gradient(87.49deg, #00c6fb 7.23%, #005bea 100%);
  }
}
.radar_search_item_storage {
  position: absolute;
  top: 223px;
  left: 310px;
  width: 40px;
  height: 40px;
  z-index: 10;
}
.radar_search_item_hosting {
  position: absolute;
  top: 35px;
  left: 427px;
  width: 40px;
  height: 40px;
  z-index: 10;
  .tips {
    left: 30px;
    width: 111px;
    border-radius: 8px 8px 8px 2px;
  }
}
.radar_search_item_rpc {
  position: absolute;
  top: 223px;
  left: 544px;
  width: 40px;
  height: 40px;
  z-index: 10;
  .tips {
    left: 30px;
    width: 45px;
    border-radius: 8px 8px 8px 2px;
  }
}
.radar_search_item_raas {
  position: absolute;
  top: 269px;
  left: 697px;
  width: 40px;
  height: 40px;
  z-index: 10;
  .tips {
    left: 40px;
    width: 50px;
    border-radius: 8px 8px 8px 2px;
  }
}
.radar_search_item_airpc {
  position: absolute;
  top: 426px;
  left: 660px;
  width: 40px;
  height: 40px;
  z-index: 10;
  .tips {
    left: 43px;
    width: 90px;
    border-radius: 8px 8px 8px 2px;
  }
}
.radar_item_active {
  animation: researchRadarItem 2s cubic-bezier(0.6, 0.6, 0, 1);
}

@keyframes researchRadarItem {
  0% {
    opacity: 0;
    transform: scale(0);
  }

  25% {
    opacity: 1;
  }

  50% {
    opacity: 1;
    transform: scale(1);
  }
  75% {
    opacity: 0.4;
    transform: scale(1.25);
  }

  to {
    opacity: 0;
    transform: scale(1.5);
  }
}

@media (max-width: 960px) {
  .pion_content {
    height: 1620px !important;
  }
  .item-nowrap {
    flex-direction: column;
    margin-top: 24px;
  }
  .building-title {
    font-size: 24px;
  }
  .build-card {
    margin-top: 0;
  }
  .building-subtitle {
    font-size: 14px;
  }
}
@media (min-width: 1904px) {
  .build-container {
    min-height: 120vh;
    padding-top: 20vh !important;
  }
}
</style>
