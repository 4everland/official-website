<!-- eslint-disable vue/v-slot-style -->
<template>
  <v-container id="pionWrap" fluid class="build-container pt-16">
    <v-row align="center">
      <v-col cols="12">
        <div ref="pionTitle" class="pion_title">
          <h4 class="white--text building-title font-weight-bold">
            Pioneering Web3 Evolution
          </h4>
          <div class="building-subtitle pb-5">
            Accelerating innovation with our unrivaled suite of services
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
                  <span class="tips"> AI RPC</span>
                </div>
              </div>
            </div>
          </div>
          <div class="build-item-wrap">
            <v-row>
              <v-col class="item-nowrap">
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
    }
  },
  computed: {},
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      const pionWrap = document.getElementById('pionWrap').offsetHeight
      console.log(pionWrap, scrollTop)

      const diffpercent = 1 - (scrollTop - pionWrap) / 100
      if (diffpercent <= 1) {
        this.$refs.pionTitle.style.transform = `scale(${diffpercent})`
      } else {
        this.$refs.pionTitle.style.transform = `scale(1)`
      }
      if (pionWrap + 100 < scrollTop) {
        this.$refs.pionTitle.style.position = 'relative'
      } else {
        this.$refs.pionTitle.style.position = 'sticky'
      }
    },
  },
}
</script>
<style lang="less" scoped>
.build-container {
  position: relative;
  height: 125vh;
}

.sectionContent {
  font-family: Inter, Arial, sans-serif;
}
.building-title {
  font-size: 48px;
}
.building-subtitle {
  font-size: 20px;
  color: #fff;
}
.pion_title {
  position: sticky;
  top: 0;
  transform-origin: left;
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
  margin-top: 24px;
  .text-h6 {
    color: #fff;
  }
}
.build-card:hover {
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
  color: #fff;
  text-align: center;
  border-radius: 8px 8px 2px 8px;
  background: linear-gradient(87.49deg, #00c6fb 7.23%, #005bea 100%);
}
.radius_bg {
  width: 40px;
  height: 40px;
  border-radius: 20px;
  box-shadow: 0 0 8px 0 #c7d7fe80;
}
.radar_search_item_gateway {
  position: absolute;
  top: 270px;
  left: 157px;
  width: 40px;
  height: 40px;
  z-index: 10;
  .tips {
    position: absolute;
    top: -27px;
    left: -82px;
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
  width: 100px;
  height: 100px;
  z-index: 10;
}
.radar_search_item_hosting {
  position: absolute;
  top: 35px;
  left: 427px;
  width: 100px;
  height: 100px;
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
  width: 100px;
  height: 100px;
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
  width: 100px;
  height: 100px;
  z-index: 10;
  .tips {
    left: 30px;
    width: 50px;
    border-radius: 8px 8px 8px 2px;
  }
}
.radar_search_item_airpc {
  position: absolute;
  top: 426px;
  left: 660px;
  width: 100px;
  height: 100px;
  z-index: 10;
  .tips {
    left: 30px;
    width: 62px;
    border-radius: 8px 8px 8px 2px;
  }
}
.radar_item_active {
  animation: researchRadarItem 3s calc(6 * 0.01s) cubic-bezier(0.6, 0.6, 0, 1) 1;
}

@keyframes researchRadarItem {
  0% {
    opacity: 0;
    transform: scale(0);
  }

  25% {
    opacity: 1;
  }

  50%,
  75% {
    opacity: 1;
    transform: scale(1);
  }

  to {
    opacity: 0;
    transform: scale(1.2);
  }
}
</style>
