<template>
  <v-container fluid class="build-container">
    <v-row justify="center" align="center">
      <v-col cols="12">
        <h4 class="white--text building-title font-weight-bold pt-16">
          THE MOMENTUM IS BUILDING
        </h4>
        <div class="building-subtitle pb-5">
          Sharing our progress through data insights.
        </div>
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
                <v-img
                  class="gateway_img"
                  width="24"
                  :src="
                    require('@/assets/imgs/index/newui/radarItem/gateway.png')
                  "
                ></v-img>
              </div>
              <div class="radar_search_item_storage">
                <v-img
                  class="storage_img"
                  width="24"
                  :src="
                    require('@/assets/imgs/index/newui/radarItem/storage.png')
                  "
                ></v-img>
              </div>
              <div class="radar_search_item_hosting">
                <v-img
                  class="storage_img"
                  width="24"
                  :src="
                    require('@/assets/imgs/index/newui/radarItem/hosting.png')
                  "
                ></v-img>
              </div>
              <div class="radar_search_item_rpc">
                <v-img
                  class="storage_img"
                  width="24"
                  :src="require('@/assets/imgs/index/newui/radarItem/rpc.png')"
                ></v-img>
              </div>
              <div class="radar_search_item_raas">
                <v-img
                  class="storage_img"
                  width="24"
                  :src="require('@/assets/imgs/index/newui/radarItem/raas.png')"
                ></v-img>
              </div>
              <div class="radar_search_item_airpc">
                <v-img
                  class="storage_img"
                  width="24"
                  :src="
                    require('@/assets/imgs/index/newui/radarItem/airpc.png')
                  "
                ></v-img>
              </div>
            </div>
          </div>
        </div>
        <div class="build-item-wrap">
          <v-row>
            <v-col cols="3">
              <v-card class="pa-6 build-card" dark>
                <div class="text-building-item font-weight-bold">300,000+</div>
                <p class="text-h6 mt-4">Developers</p>
              </v-card>
            </v-col>
            <v-col cols="3">
              <v-card class="pa-6 build-card" dark>
                <div class="text-building-item font-weight-bold">150,000+</div>
                <p class="text-h6 mt-4">Dapps</p>
              </v-card>
            </v-col>
            <v-col cols="3">
              <v-card class="pa-6 build-card" dark>
                <div class="text-building-item font-weight-bold">
                  270,000,000+
                </div>
                <p class="text-h6 mt-4">Files</p>
              </v-card>
            </v-col>
            <v-col cols="3">
              <v-card class="pa-6 build-card" dark>
                <div class="text-building-item font-weight-bold">200,000+</div>
                <p class="text-h6 mt-4">Buckets</p>
              </v-card>
            </v-col>
          </v-row>
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
  mounted() {},
  methods: {},
}
</script>
<style lang="less" scoped>
.build-container {
  position: relative;
  height: 935px;
  overflow: hidden;
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
    z-index: 100;
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
  height: 291px;
  left: 50%;
  position: absolute;
  top: 100%;
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

.radar_search_item_gateway {
  position: absolute;
  top: 278px;
  left: 165px;
  width: 100px;
  height: 100px;
  z-index: 100;
}
.radar_search_item_storage {
  position: absolute;
  top: 232px;
  left: 316px;
  width: 100px;
  height: 100px;
  z-index: 100;
}
.radar_search_item_hosting {
  position: absolute;
  top: 43px;
  left: 435px;
  width: 100px;
  height: 100px;
  z-index: 100;
}
.radar_search_item_rpc {
  position: absolute;
  top: 232px;
  left: 552px;
  width: 100px;
  height: 100px;
  z-index: 100;
}
.radar_search_item_raas {
  position: absolute;
  top: 278px;
  left: 704px;
  width: 100px;
  height: 100px;
  z-index: 100;
  box-shadow: inset 0 0 6px 4px #ed78ff0a, inset 0 0 8px #787bff0f,
    inset 0 0 4px #787bff0a;
}
.radar_search_item_airpc {
  position: absolute;
  top: 434px;
  left: 667px;
  width: 100px;
  height: 100px;
  z-index: 100;
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
