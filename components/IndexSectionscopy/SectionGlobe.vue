<template>
  <div v-resize="onResize">
    <!-- <h3 class="text-h3 font-weight-light text-center">
      Developers deploy with <br />One click in <strong>Web 3.0</strong>
    </h3> -->
    <div class="globe-wrapper">
      <img
        src="~/assets/imgs/index/waves.png"
        style="width: 100%"
        class="globe-bg"
      />
      <v-container class="d-flex flex-column align-center">
        <div id="globeViz"></div>
      </v-container>
    </div>
  </div>
</template>
<script>
const geoJSON = require('~/assets/json/geo.json')
const places = require('~/assets/json/ne_110m_populated_places_simple.json')
const emptyPNG =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZAAAADICAYAAADGFbfiAAAC3ElEQVR4nO3VMQHAMAzAsKwsMv5Ai6G+JQh+/O3uPwDw6AgGQGEgACQGAkBiIAAkBgJAYiAAJAYCQGIgACQGAkBiIAAkBgJAYiAAJAYCQGIgACQGAkBiIAAkBgJAYiAAJAYCQGIgACQGAkBiIAAkBgJAYiAAJAYCQGIgACQGAkBiIAAkBgJAYiAAJAYCQGIgACQGAkBiIAAkBgJAYiAAJAYCQGIgACQGAkBiIAAkBgJAYiAAJAYCQGIgACQGAkBiIAAkBgJAYiAAJAYCQGIgACQGAkBiIAAkBgJAYiAAJAYCQGIgACQGAkBiIAAkBgJAYiAAJAYCQGIgACQGAkBiIAAkBgJAYiAAJAYCQGIgACQGAkBiIAAkBgJAYiAAJAYCQGIgACQGAkBiIAAkBgJAYiAAJAYCQGIgACQGAkBiIAAkBgJAYiAAJAYCQGIgACQGAkBiIAAkBgJAYiAAJAYCQGIgACQGAkBiIAAkBgJAYiAAJAYCQGIgACQGAkBiIAAkBgJAYiAAJAYCQGIgACQGAkBiIAAkBgJAYiAAJAYCQGIgACQGAkBiIAAkBgJAYiAAJAYCQGIgACQGAkBiIAAkBgJAYiAAJAYCQGIgACQGAkBiIAAkBgJAYiAAJAYCQGIgACQGAkBiIAAkBgJAYiAAJAYCQGIgACQGAkBiIAAkBgJAYiAAJAYCQGIgACQGAkBiIAAkBgJAYiAAJAYCQGIgACQGAkBiIAAkBgJAYiAAJAYCQGIgACQGAkBiIAAkBgJAYiAAJAYCQGIgACQGAkBiIAAkBgJAYiAAJAYCQGIgACQGAkBiIAAkBgJAYiAAJAYCQGIgACQGAkBiIAAkBgJAYiAAJAYCQGIgACQGAkBiIAAkBgJAYiAAJAYCQGIgACQGAkBiIAAkBgJAYiAAJAYCQGIgACQGAkBiIAAkBgJAYiAAJAYCQGIgACQGAkBiIAAkBgJAYiAAJAYCwLuZud1fAfX9aO5bAAAAAElFTkSuQmCC'
const debounce = (func, wait, immediate) => {
  let timeout
  return () => {
    const context = this
    // eslint-disable-next-line no-undef
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
      world: null,
    }
  },
  mounted() {
    this.initGlobe()
  },
  methods: {
    onResize(e) {
      // eslint-disable-next-line no-console
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
      const colorPink = 'rgba(195,134,199,1)'
      const colorBlue = 'RGBA(0, 255, 234, 1)'
      const colorBlue2 = 'rgba(21,144,232,1)'
      const arcData = locations
        .map(function (item, index, arr) {
          const randomIndex = parseInt(Math.random() * (arr.length + 1))
          return arr[randomIndex] && index !== randomIndex
            ? {
                startLat: item[1],
                startLng: item[0],
                endLat: arr[randomIndex][1],
                endLng: arr[randomIndex][0],
                color: index % 2 === 1 ? colorPink : colorBlue,
              }
            : null
        })
        .filter(function (item) {
          return !!item
        })
      const w = window.innerWidth
      const size = Math.min(w * 0.8, 750)
      // eslint-disable-next-line no-undef
      const world = Globe()
        .width(size)
        .height(size)
        .globeImageUrl(emptyPNG)
        .backgroundColor('rgba(0,0,0,0)')
        .showAtmosphere(true)
        .atmosphereColor('rgba(62,58,206,1)')
        .atmosphereAltitude('.25')
        .hexPolygonsData(geoJSON.features)
        .hexPolygonResolution(3)
        .hexPolygonMargin(0.3)
        .hexPolygonColor(function (item) {
          return 'rgba(194,213,255,0.1)'
        })
        .labelsData(places.features)
        .labelLat((d) => d.properties.latitude)
        .labelLng((d) => d.properties.longitude)
        .labelText((d) => d.properties.name)
        .labelSize((d) => Math.sqrt(d.properties.pop_max) * 4e-4)
        .labelDotRadius((d) => Math.sqrt(d.properties.pop_max) * 4e-4)
        .labelColor((d) =>
          d.properties.pop_max > 5000000 ? colorBlue : colorBlue2
        )
        .labelResolution(2)
        .arcsData(arcData)
        .arcColor('color')
        .arcStroke(0.6)
        .arcDashLength(1)
        .arcDashGap(function () {
          return Math.random() + 2.5
        })
        .arcDashAnimateTime(function () {
          return 2000 * Math.random() + 1500
        })
        .pointAltitude('size')
        .pointColor('color')(document.getElementById('globeViz'))
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
<style scoped>
.globe-wrapper {
  position: relative;
}
.globe-bg {
  position: absolute;
  opacity: 0.6;
  width: 100%;
  left: 0;
  top: 80px;
}
#globeViz {
  z-index: 1;
}
</style>
