<template>
  <v-container fluid class="build-container">
    <v-row justify="center" align="center">
      <v-col cols="12">
        <h4 class="white--text building-title font-weight-bold">
          THE MOMENTUM IS BUILDING
        </h4>
        <div class="building-subtitle">
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
  height: 851px;
  overflow: hidden;
}
.sectionContent {
  font-family: Inter, Arial, sans-serif;
}
.build-card {
  background: #212121;
  border-radius: 12px;
  padding: 24px;
  margin-top: 24px;
  .text-h6 {
    color: #fff;
  }
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
.text-building-item {
  font-size: 32px;
  color: #fff;
  font-weight: bold;
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
  position: absolute;
  bottom: 0;
  width: 100%;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.75) 0%, #000 100%);
  z-index: 1;
  padding-top: 50px;
}
</style>
