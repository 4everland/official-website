<script>
/* eslint-disable vue/no-v-html */
</script>

<template>
  <div id="roadmap">
    <v-container class="pt-16">
      <h3 class="text-h3 font-weight-light text-center mb-12">Roadmap</h3>
    </v-container>
    <div class="new-roadmap">
      <v-container>
        <v-row v-if="!$vuetify.breakpoint.smAndDown">
          <v-col cols="12" md="8" lg="8">
            <div class="map-box ma-auto">
              <div
                class="new-roadmap-title"
                :style="{ color: version == 1 ? '#00fcff' : '' }"
              >
                {{ defaultTitle }}
              </div>
              <div v-if="version == 1" class="map-list-box">
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
              <div v-if="version == 2" class="map-list-box">
                <div class="map-list-item list-v1">
                  <div class="left"></div>
                  <div class="right">
                    Upgrade commercialization capabilities, launch in-depth data
                    analysis systems, Web3 website development templates,
                    digital marketing systems and more products to provide
                    developers with better services.
                  </div>
                </div>
              </div>
              <div v-if="version == 3" class="map-list-box">
                <div class="map-list-item list-v1">
                  <div class="left"></div>
                  <div class="right">
                    Launch virtual machine container, acquire capability of
                    Web3.0 cloud computing
                  </div>
                </div>
              </div>
            </div>
          </v-col>
          <v-col cols="12" md="4" lg="4">
            <div class="roadmap-pro">
              <div class="version active" @click="chaneVersion(1)">
                <span class="dot"> ● </span>
                <span>V1</span>
                <span class="text">The Stone Age（2021-2022）</span>
              </div>
              <div class="version" @click="chaneVersion(2)">
                <span class="dot"> ● </span>
                <span>V2</span>
                <span class="text">Enpower Web3.0 developers (2023-2024)</span>
              </div>
              <div class="version" @click="chaneVersion(3)">
                <span class="dot"> ● </span>
                <span>V3</span>
                <span class="text">Cloud Computing of Web3.0 (2025-2026)</span>
              </div>
              <img
                class="line hidden-sm-and-down"
                src="@/assets/imgs/index/line.png"
                alt=""
              />
            </div>
          </v-col>
        </v-row>
        <!-- Horizontal Roadmaps -->
        <div
          v-else
          class="d-flex justify-center d-none d-sm-flex d-xs-flex flex-column"
        >
          <div
            class="v1 pa-8 mb-4 d-flex flex-column rounded-lg position-relative"
          >
            <div class="vx-tips v1-tips">V1</div>
            <div
              v-for="roadmap in oldRoadmapsObj.v1"
              :key="roadmap.title"
              class="roadmap mt-4 d-flex justify-stretch"
            >
              <div
                class="rounded-sm mr-4"
                :style="{
                  width: '6px',
                  'background-color': `${roadmap.color}`,
                  'box-shadow': roadmap.current
                    ? `0 0 10px ${roadmap.color}`
                    : '',
                }"
              ></div>
              <div class="item-right d-flex flex-column position-relative">
                <p class="roadmap-time">{{ roadmap.plus }}</p>
                <p class="roadmap-title mb-2">{{ roadmap.title }}</p>
                <p
                  class="roadmap-desc text--secondary mb-2"
                  v-html="roadmap.content"
                ></p>
              </div>
            </div>
          </div>
          <div
            class="v2 pa-8 mb-4 d-flex flex-column rounded-lg position-relative"
          >
            <div class="vx-tips v2-tips">V2</div>
            <div
              v-for="roadmap in oldRoadmapsObj.v2"
              :key="roadmap.title"
              class="roadmap mt-4 d-flex justify-stretch"
            >
              <div
                class="rounded-sm mr-4"
                :style="{
                  width: '6px',
                  'background-color': `${roadmap.color}`,
                  'box-shadow': roadmap.current
                    ? `0 0 10px ${roadmap.color}`
                    : '',
                }"
              ></div>
              <div class="item-right d-flex flex-column position-relative">
                <p class="roadmap-time">{{ roadmap.plus }}</p>
                <p class="roadmap-title mb-2">{{ roadmap.title }}</p>
                <p
                  class="roadmap-desc text--secondary mb-2"
                  v-html="roadmap.content"
                ></p>
              </div>
            </div>
          </div>
          <div class="v3 pa-8 d-flex flex-column rounded-lg position-relative">
            <div class="vx-tips v3-tips">V3</div>
            <div
              v-for="roadmap in oldRoadmapsObj.v3"
              :key="roadmap.title"
              class="roadmap mt-4 d-flex justify-stretch"
            >
              <div
                class="rounded-sm mr-4"
                :style="{
                  width: '6px',
                  'background-color': `${roadmap.color}`,
                  'box-shadow': roadmap.current
                    ? `0 0 10px ${roadmap.color}`
                    : '',
                }"
              ></div>
              <div class="item-right d-flex flex-column position-relative">
                <p class="roadmap-time">{{ roadmap.plus }}</p>
                <p class="roadmap-title mb-2">{{ roadmap.title }}</p>
                <p
                  class="roadmap-desc text--secondary mb-2"
                  v-html="roadmap.content"
                ></p>
              </div>
            </div>
          </div>
        </div>
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
      version: 1,
      defaultTitle:
        'V1 The Paas of Web 3.0 Genesis Product, Realizing the Initial Vision',
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
      oldRoadmapsObj: {
        v1: [
          {
            color: '#255BB4',
            title: 'V1 Quark:The Paas of Web 3.0',
            plus: '(2021-2022)',
            content:
              'Genesis Product, Realizing a cloud computing platform with distributed storage of content, global access acceleration, and global node collaboration.',
          },
          {
            color: '#255BB4',
            title: 'Q1 2021',
            content: 'Market research and product prototype',
          },
          {
            color: '#255BB4',
            title: 'March 2021',
            content: 'Product Design & Technology Development',
          },
          {
            color: '#255BB4',
            title: 'May 2021',
            content: 'Establish 4EVERLAND Foundation and technical community',
          },
          {
            color: '#255BB4',
            title: 'June 2021',
            content: 'Whitepaper published, 4EVERLAND official website launch',
          },
          {
            color: '#8BB7FF',
            title: 'August 2021',
            content:
              '<strong>ALPHA Launch</strong><br/>launch 4EVERLAND HOSTING, enable Dweb hosting function',
            current: true,
          },
          {
            color: '#8BB7FF',
            title: 'November 2021',
            content:
              '<strong>BETA Launch</strong><br/>launch gateway node, storage node, and data analysis system',
          },
          {
            color: '#8BB7FF',
            title: 'Q1 2022',
            content:
              'Online auction system, participate in genesis node bidding',
          },
          {
            color: '#8BB7FF',
            title: '2022.Q2',
            content:
              '<strong>Mainnet launch</strong><br/>enable cloud computing platform with global node synergy',
          },
        ],
        v2: [
          {
            color: '#D66575',
            title: 'V2 Proton: Enpower Web3.0 developers ',
            plus: '(2023-2024)',
            content:
              'Upgrade commercialization capabilities, launch in-depth data analysis systems, Web3 website development templates, digital marketing systems and more products to provide developers with better services. ',
          },
        ],
        v3: [
          {
            color: '#43D7E0',
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
    chaneVersion(v) {
      if (v == 1) {
        this.version = 1
        this.defaultTitle =
          'V1 The Paas of Web 3.0 Genesis Product, Realizing the Initial Vision'
      }
      if (v == 2) {
        this.version = 2
        this.defaultTitle = 'V2 Proton: Enpower Web3.0 developers (2023-2024)'
      }
      if (v == 3) {
        this.version = 3
        this.defaultTitle = 'V3 Atom: Cloud Computing of Web3.0 (2025-2026)'
      }
    },
  },
}
</script>
<style lang="scss" scoped>
.new-roadmap {
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
  .new-roadmap-title {
    font-size: 20px;
    color: #b1b6bb;
    margin-bottom: 20px;
    text-align: center;
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
      cursor: pointer;
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
.position-relative {
  position: relative;
}
.roadmaps {
  overflow-x: auto;
}
.roadmaps::-webkit-scrollbar {
  display: none;
}
.roadmap {
  flex: 1;
  flex-wrap: nowrap;
}
.current {
  transform: scale(1.2);
}
.roadmap-time {
  position: absolute;
  right: 0;
  top: -16px;
  font-size: 12px;
}
.roadmap-title {
  /* white-space: nowrap; */
  font-size: 14px;
  font-weight: bold;
}
.roadmap-desc {
  font-size: 12px;
  line-height: 14px;
}
.item-right {
  width: 210px;
}
.nav-buttons {
  position: absolute;
  top: 40%;
  width: 100%;
  overflow: visible;
}
.nav-buttons .btn-left {
  position: absolute;
  left: -50px;
}
.nav-buttons .btn-right {
  position: absolute;
  right: -50px;
}
.v1 {
  background-color: rgba(0, 155, 255, 0.1);
}
.v2 {
  background-color: rgba(255, 26, 58, 0.1);
}
.v3 {
  background-color: rgba(0, 255, 216, 0.1);
}
.vx-tips {
  width: 48px;
  height: 20px;
  line-height: 20px;
  border-radius: 10px 0 10px 0;
  text-align: center;
  position: absolute;
  left: 0;
  top: 0;
  font-weight: bold;
}
.v1-tips {
  background: linear-gradient(90deg, #255bb4, #8bb7ff);
}
.v2-tips {
  background: linear-gradient(90deg, #9b192b, #d66575);
}
.v3-tips {
  background: linear-gradient(90deg, #08595e, #43d7e0);
}
</style>
