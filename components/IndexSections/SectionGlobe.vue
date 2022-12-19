<template>
  <div id="globe">
    <v-container class="globe-box">
      <v-row>
        <v-col :cols="12" :md="6">
          <div class="text-box">
            <div class="text-title">
              Efficient and stable Web3.0 infrastructure
            </div>
            <div class="text-tips">
              4EVERLAND is hard-working to empower users with a distributed,
              high-efficient, self-incentivized, and low-cost data hosting
              network.
            </div>
          </div>
          <div class="data-box">
            <v-row>
              <v-col
                v-for="(item, index) in btnItem"
                :key="index"
                :cols="6"
                :md="6"
              >
                <div class="data-num">{{ item.num }}</div>
                <div class="data-name">{{ item.name }}</div>
              </v-col>
            </v-row>
          </div>
        </v-col>
      </v-row>
      <div id="globeViz"></div>
    </v-container>
  </div>
</template>
<script>
/* eslint-disable */
const geoJSON = require('~/assets/json/geo.json')
const whitePNG = require('~/assets/imgs/index/globe/globe-bg.png')
const emptyPNG =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZAAAADICAYAAADGFbfiAAAC3ElEQVR4nO3VMQHAMAzAsKwsMv5Ai6G+JQh+/O3uPwDw6AgGQGEgACQGAkBiIAAkBgJAYiAAJAYCQGIgACQGAkBiIAAkBgJAYiAAJAYCQGIgACQGAkBiIAAkBgJAYiAAJAYCQGIgACQGAkBiIAAkBgJAYiAAJAYCQGIgACQGAkBiIAAkBgJAYiAAJAYCQGIgACQGAkBiIAAkBgJAYiAAJAYCQGIgACQGAkBiIAAkBgJAYiAAJAYCQGIgACQGAkBiIAAkBgJAYiAAJAYCQGIgACQGAkBiIAAkBgJAYiAAJAYCQGIgACQGAkBiIAAkBgJAYiAAJAYCQGIgACQGAkBiIAAkBgJAYiAAJAYCQGIgACQGAkBiIAAkBgJAYiAAJAYCQGIgACQGAkBiIAAkBgJAYiAAJAYCQGIgACQGAkBiIAAkBgJAYiAAJAYCQGIgACQGAkBiIAAkBgJAYiAAJAYCQGIgACQGAkBiIAAkBgJAYiAAJAYCQGIgACQGAkBiIAAkBgJAYiAAJAYCQGIgACQGAkBiIAAkBgJAYiAAJAYCQGIgACQGAkBiIAAkBgJAYiAAJAYCQGIgACQGAkBiIAAkBgJAYiAAJAYCQGIgACQGAkBiIAAkBgJAYiAAJAYCQGIgACQGAkBiIAAkBgJAYiAAJAYCQGIgACQGAkBiIAAkBgJAYiAAJAYCQGIgACQGAkBiIAAkBgJAYiAAJAYCQGIgACQGAkBiIAAkBgJAYiAAJAYCQGIgACQGAkBiIAAkBgJAYiAAJAYCQGIgACQGAkBiIAAkBgJAYiAAJAYCQGIgACQGAkBiIAAkBgJAYiAAJAYCQGIgACQGAkBiIAAkBgJAYiAAJAYCQGIgACQGAkBiIAAkBgJAYiAAJAYCQGIgACQGAkBiIAAkBgJAYiAAJAYCQGIgACQGAkBiIAAkBgJAYiAAJAYCQGIgACQGAkBiIAAkBgJAYiAAJAYCwLuZud1fAfX9aO5bAAAAAElFTkSuQmCC'
const debounce = (func, wait, immediate) => {
  let timeout
  return () => {
    const context = this
    const args = arguments
    const later = function () {
      timeout = null
      if (!immediate) func.apply(context, args)
    }
    const callNow = immediate && !timeout
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
    if (callNow) func.apply(context, args)
  }
}

export default {
  data() {
    return {
      btnItem: [
        {
          num: '200+',
          name: 'GLOBAL NODES',
        },
        {
          num: '99.99%',
          name: 'GUARANTEED UPTIME',
        },
        {
          num: '10x',
          name: 'PERFORMANCE BOOST',
        },
        {
          num: '50,000+',
          name: 'DEVELOPERS',
        },
      ],
    }
  },
  computed: {},
  mounted() {
    this.$nextTick(() => {
      this.initGlobe()
    })
  },
  methods: {
    onResize(e) {
      // console.log('rezized', window.innerWidth)
      if (this.world) {
        debounce(
          () => {
            const w = window.innerWidth
            const size = Math.min(w * 0.8, 750)
            if (w < 800) {
              this.world.width(w * 0.8).height(w * 0.8)
            } else {
              this.world.width(size).height(size)
            }
          },
          200,
          false
        )()
      }
    },
    initGlobe() {
      const locations = [
        [120.831693, 30.019926],
        [116.56352, 40.324982],
        [114.282256, 22.256955],
        [139.964882, 36.505153],
        [127.160363, 36.919906],
        [107.806407, 34.275691],
        [107.144104, 29.634919],
        [120.24298, 36.326711],
        [144.159466, -40.17175],
        [10.641084, 51.084096],
        [0.927311, 47.674532],
        [-0.323705, 52.633177],
        [-4.4447, 39.851596],
        [-4.4447, 39.851596],
        [-4.4447, 39.851596],
        [-4.4447, 39.851596],
        [-76.966844, 38.909266],
        [-76.966844, 38.909266],
        [-73.866899, 40.885868],
        [-81.041845, 34.000322],
        [-80.232364, 25.788132],
        [-86.827795, 36.065743],
        [-122.444962, 37.73531],
        [-122.444962, 37.73531],
      ]
      const arcData = locations
        .map(function (item, index, arr) {
          const randomIndex = parseInt(Math.random() * (arr.length + 1))
          return arr[randomIndex] && index !== randomIndex
            ? {
                startLat: item[1],
                startLng: item[0],
                endLat: arr[randomIndex][1],
                endLng: arr[randomIndex][0],
                color: '#81DDFF',
              }
            : null
        })
        .filter(function (item) {
          return !!item
        })
      const w = window.innerWidth
      const size = Math.min(w * 0.8, 700)
      let bgImg = this.$vuetify.breakpoint.smAndDown ? emptyPNG : whitePNG
      const world = Globe()
        .width(size)
        .height(size)
        .globeImageUrl(bgImg)
        .backgroundColor('rgba(0,0,0,0)')
        .showAtmosphere(false)
        .atmosphereAltitude('.25')
        .polygonsData(geoJSON.features)
        .polygonCapColor(() => `#6197ed`)
        .polygonSideColor(() => 'rgba(0,0,0,.3)')
        .polygonAltitude(() => '0.02')
        .arcsData(arcData)
        .arcColor('color')
        .arcStroke(0.6)
        .arcDashLength(1)
        .arcDashGap(function () {
          return Math.random() + 2.5
        })
        .arcDashAnimateTime(function () {
          return 2000 * Math.random() + 1500
        })(document.getElementById('globeViz'))
      world.controls().autoRotate = true
      world.controls().autoRotateSpeed = 1
      world.controls().enableZoom = false
      world.pointOfView({
        lat: 50,
      })

      this.world = world
    },
  },
}
</script>
<style lang="less" scoped>
#globe {
  height: 800px;
  background-color: #000;
  .globe-box {
    height: 100%;
    padding-top: 90px;
    position: relative;
    #globeViz {
      position: absolute;
      right: 0;
      top: 100px;
      z-index: 1;
    }
  }

  .text-box {
    position: relative;
    z-index: 7;
    .text-title {
      font-size: 30px;
      text-align: left;
      color: #fff;
      font-family: 'Ubuntu-Bold', sans-serif !important;
      font-weight: bold;
      margin-bottom: 60px;
    }
    .text-tips {
      font-size: 18px;
      text-align: left;
      color: #fff;
      font-family: 'Ubuntu-Medium', sans-serif !important;
      font-weight: 500;
    }
  }
  .data-box {
    color: #fff;
    margin-top: 80px;
    position: relative;
    z-index: 7;
    .data-num {
      font-size: 60px;
      text-align: left;
      color: #fff;
      font-family: 'Ubuntu-Medium', sans-serif !important;
      font-weight: 500;
    }
    .data-name {
      font-size: 18px;
      text-align: left;
      color: #fff;
      font-family: 'Ubuntu-Medium', sans-serif !important;
      font-weight: 500;
    }
  }
}
@media (max-width: 960px) {
  #globe {
    height: 360px;
    .globe-box {
      height: 100%;
      padding-top: 25px;
      #globeViz {
        right: 0;
        top: 70px;
      }
    }
    .text-box {
      .text-title {
        font-size: 18px;
        font-family: 'Ubuntu', sans-serif !important;
        font-weight: normal;
        margin-bottom: 26px;
      }
      .text-tips {
        font-size: 12px;
        text-align: left;
        color: #fff;
        font-family: 'Ubuntu', sans-serif !important;
        font-weight: normal;
      }
    }
    .data-box {
      margin-top: 40px;
      .data-num {
        font-size: 24px;
        text-align: left;
        font-family: 'Ubuntu', sans-serif !important;
        font-weight: normal;
      }
      .data-name {
        font-size: 12px;
        text-align: left;
        font-family: 'Ubuntu', sans-serif !important;
        font-weight: normal;
      }
    }
  }
}
</style>
