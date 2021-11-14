<script>
/* eslint-disable vue/no-v-html */
</script>

<template>
  <div id="roadmap">
    <v-container class="pt-16">
      <h3 class="text-h3 font-weight-light text-center mb-12">Roadmap</h3>
    </v-container>
    <div class="roadmap">
      <v-container>
        <v-row>
          <v-col cols="12" md="8" lg="8">
            <div class="map-box ma-auto">
              <div class="roadmap-title">
                V1 The Paas of Web 3.0 Genesis Product, Realizing the Initial
                Vision
              </div>
              <div class="map-list-box">
                <div
                  v-for="v1 in roadmapsObj.v1"
                  :key="v1.title"
                  class="map-list-item list-v1"
                >
                  <div class="left" :style="{ color: v1.color }">
                    {{ v1.title }}
                  </div>
                  <div class="right" :style="{ color: v1.color }">
                    {{ v1.content }}
                  </div>
                </div>
              </div>
            </div>
          </v-col>
          <v-col cols="12" md="4" lg="4">
            <div class="roadmap-pro">
              <div class="version active">
                <span class="dot"> ● </span>
                <span>V1</span>
                <span class="text">The Stone Age（2021-2022）</span>
              </div>
              <div class="version">
                <span class="dot"> ● </span>
                <span>V2</span>
                <span class="text">Enpower Web3.0 developers (2023-2024)</span>
              </div>
              <div class="version">
                <span class="dot"> ● </span>
                <span>V3</span>
                <span class="text">Cloud Computing of Web3.0 (2025-2026)</span>
              </div>
              <img class="line" src="@/assets/imgs/index/line.png" alt="" />
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>
<script>
import { mdiChevronLeft, mdiChevronRight } from '@mdi/js'
export default {
  computed: {
    oddRoadmaps() {
      return this.roadmapsObj.v1.filter((item, i) => {
        return i % 2 == 1
      })
    },
    evenRoadmaps() {
      return this.roadmapsObj.v1.filter((item, i) => {
        return i % 2 == 0
      })
    },
  },
  data() {
    return {
      width: '100%',
      mdiChevronLeft,
      mdiChevronRight,
      roadmapsObj: {
        v1: [
          {
            color: '#00fcff',
            title: '2021.Q1',
            content: 'Market research and product prototype',
          },
          {
            color: '#00fcff',
            title: 'March 2021',
            content: 'Product Design & Technology Development',
          },
          {
            color: '#00fcff',
            title: 'May 2021',
            content: 'Establish 4EVERLAND Foundation and technical community',
          },
          {
            color: '#00fcff',
            title: 'June 2021',
            content: 'Whitepaper published, 4EVERLAND official website launch',
          },
          {
            color: '#b1b6bb',
            title: 'August 2021',
            content: 'ALPHA Launch',
            current: true,
          },
          {
            color: '#b1b6bb',
            title: 'November 2021',
            content: 'BETA Launch',
          },
          {
            color: '#b1b6bb',
            title: '2022.Q1',
            content:
              'Online auction system, participate in genesis node bidding',
          },
          {
            color: '#b1b6bb',
            title: '2022.Q2',
            content: 'Mainnet launch',
          },
        ],
        v2: [
          {
            color: '#b1b6bb',
            title: 'V2 Proton: Enpower Web3.0 developers ',
            plus: '(2023-2024)',
            content:
              'Upgrade commercialization capabilities, launch in-depth data analysis systems, Web3 website development templates, digital marketing systems and more products to provide developers with better services. ',
          },
        ],
        v3: [
          {
            color: '#b1b6bb',
            title: 'V3 Atom: Cloud Computing of Web3.0 ',
            plus: '(2025-2026)',
            content:
              'Launch virtual machine container, acquire capability of Web3.0 cloud computing ',
          },
        ],
      },
    }
  },
  mounted() {
    this.$nextTick(() => {
      if (this.$refs.roadmaps) {
        this.width = this.$refs.roadmaps.scrollWidth + 'px'
      }
    })
  },
  methods: {
    onResize() {
      this.$nextTick(() => {
        if (this.$refs.roadmaps) {
          this.width = this.$refs.roadmaps.scrollWidth + 'px'
        }
      })
    },
    scrollLeft() {
      this.$refs.roadmaps.scrollLeft = 0
    },
    scrollRight() {
      this.$refs.roadmaps.scrollLeft = this.$refs.roadmaps.scrollWidth
    },
  },
}
</script>
<style lang="scss" scoped>
.roadmap {
  background-image: url('@/assets/imgs/index/roadmap-bg.png');
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  padding-top: 80px;
  padding-bottom: 100px;
  .map-box {
    max-width: 800px;
    position: relative;
  }
  .roadmap-title {
    font-size: 20px;
    color: #00fcff;
    margin-bottom: 20px;
  }
  .map-list-box {
    overflow-y: scroll;
    height: 200px;
    -webkit-mask: -webkit-gradient(
      linear,
      left top,
      left bottom,
      from(rgba(0, 0, 0, 1)),
      to(rgba(0, 0, 0, 0))
    );
    .map-list-item {
      font-size: 16px;
      color: #b1b6bb;
      display: flex;
      margin-bottom: 10px;
      .left {
        width: 150px;
        text-align: right;
        margin-right: 10px;
      }
    }
  }
  .map-list-box::-webkit-scrollbar {
    display: none;
  }
  .roadmap-pro {
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .version {
      font-size: 20px;
      color: #b1b6bb;
      margin-top: 20px;
      .dot {
        margin-right: 10px;
      }
      .text {
        font-size: 16px;
      }
    }
    .active {
      color: #00fcff;
    }
    .line {
      position: absolute;
      top: -15px;
      left: 5px;
      width: 2px;
      height: 300px;
    }
  }
}
</style>
