<script>
/* eslint-disable vue/no-v-html */
</script>

<template>
  <v-container id="roadmap" class="py-16 px-8">
    <h3 class="text-h3 font-weight-light text-center mb-16">Roadmap</h3>
    <!-- Vertical Roadmaps -->
    <div
      v-if="!$vuetify.breakpoint.smAndDown"
      class="position-relative d-none d-md-flex d-lg-flex"
    >
      <div
        ref="roadmaps"
        v-resize="onResize"
        class="roadmaps d-flex flex-column justify-stretch rounded-lg"
      >
        <!-- even roadmaps -->
        <div class="even d-flex">
          <div class="v1 d-flex pa-4 pt-6 rounded-lg position-relative">
            <div class="vx-tips v1-tips">V1</div>
            <div
              v-for="(roadmap, index) in evenRoadmaps"
              :key="roadmap.title"
              class="roadmap mr-4 d-flex justify-stretch"
            >
              <div
                class="rounded-sm mr-4"
                :style="{
                  width: index == 0 ? '6px' : '4px',
                  'background-color': `${roadmap.color}`,
                  'box-shadow': roadmap.current ? '0 0 10px #8BB7FF' : '',
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
          <div class="v3 d-flex pa-4 pt-6 rounded-lg position-relative ml-6">
            <div class="vx-tips v3-tips">V3</div>
            <div
              v-for="roadmap in roadmapsObj.v3"
              :key="roadmap.title"
              class="roadmap mr-4 d-flex justify-stretch"
            >
              <div
                class="rounded-sm mr-4"
                :style="{
                  width: '6px',
                  'background-color': `${roadmap.color}`,
                }"
              ></div>
              <div
                class="item-right d-flex flex-column position-relative"
                :style="{ width: roadmap.plus ? '260px' : '' }"
              >
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

        <!-- progress bar -->
        <div class="d-flex" :style="{ width: width }">
          <v-progress-linear value="36"></v-progress-linear>
        </div>

        <!-- odd roadmaps -->
        <div class="odd d-flex">
          <div
            class="v1 d-flex pl-4 py-6 rounded-lg"
            style="padding-right: 160px"
          >
            <div
              v-for="roadmap in oddRoadmaps"
              :key="roadmap.title"
              class="roadmap ml-6 mr-4 d-flex justify-stretch"
            >
              <div
                class="rounded mr-4"
                :style="{
                  width: '4px',
                  'background-color': `${roadmap.color}`,
                  'box-shadow': roadmap.current
                    ? `0 0 10px ${roadmap.color}`
                    : '',
                }"
              ></div>
              <div class="item-right d-flex flex-column">
                <p class="roadmap-title mb-2">{{ roadmap.title }}</p>
                <p
                  class="roadmap-desc text--secondary mb-2"
                  v-html="roadmap.content"
                ></p>
              </div>
            </div>
          </div>
          <div class="v2 d-flex pa-4 py-6 rounded-lg position-relative ml-2">
            <div class="vx-tips v2-tips">V2</div>
            <div
              v-for="roadmap in roadmapsObj.v2"
              :key="roadmap.title"
              class="roadmap mr-4 d-flex justify-stretch"
            >
              <div
                class="rounded mr-4"
                :style="{
                  width: '6px',
                  'background-color': `${roadmap.color}`,
                }"
              ></div>
              <div
                class="item-right d-flex flex-column position-relative"
                :style="{ width: roadmap.plus ? '260px' : '' }"
              >
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
      </div>
      <div class="nav-buttons">
        <v-btn class="btn-left" icon @click="scrollLeft">
          <v-icon>{{ mdiChevronLeft }}</v-icon>
        </v-btn>
        <v-btn class="btn-right" icon @click="scrollRight">
          <v-icon>{{ mdiChevronRight }}</v-icon>
        </v-btn>
      </div>
    </div>
    <!-- Horizontal Roadmaps -->
    <div
      v-else
      class="d-flex justify-center d-none d-sm-flex d-xs-flex flex-column"
    >
      <div class="v1 pa-8 mb-4 d-flex flex-column rounded-lg position-relative">
        <div class="vx-tips v1-tips">V1</div>
        <div
          v-for="roadmap in roadmapsObj.v1"
          :key="roadmap.title"
          class="roadmap mt-4 d-flex justify-stretch"
        >
          <div
            class="rounded-sm mr-4"
            :style="{
              width: '6px',
              'background-color': `${roadmap.color}`,
              'box-shadow': roadmap.current ? `0 0 10px ${roadmap.color}` : '',
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
      <div class="v2 pa-8 mb-4 d-flex flex-column rounded-lg position-relative">
        <div class="vx-tips v2-tips">V2</div>
        <div
          v-for="roadmap in roadmapsObj.v2"
          :key="roadmap.title"
          class="roadmap mt-4 d-flex justify-stretch"
        >
          <div
            class="rounded-sm mr-4"
            :style="{
              width: '6px',
              'background-color': `${roadmap.color}`,
              'box-shadow': roadmap.current ? `0 0 10px ${roadmap.color}` : '',
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
          v-for="roadmap in roadmapsObj.v3"
          :key="roadmap.title"
          class="roadmap mt-4 d-flex justify-stretch"
        >
          <div
            class="rounded-sm mr-4"
            :style="{
              width: '6px',
              'background-color': `${roadmap.color}`,
              'box-shadow': roadmap.current ? `0 0 10px ${roadmap.color}` : '',
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
            color: '#8BB7FF',
            title: 'June 2021',
            content: 'Whitepaper published, 4EVERLAND official website launch',
          },
          {
            color: '#8BB7FF',
            title: 'August 2021',
            content:
              '<strong>ALPHA Launch</strong><br/>launch 4EVER-HOSTING, enable Dweb hosting function',
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
              'Launch virtual machin container, acquire capability of Web3.0 cloud computing ',
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
<style scoped>
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
  top: -20px;
}
.roadmap-title {
  /* white-space: nowrap; */
  font-size: 14px;
}
.roadmap-desc {
  font-size: 12px;
  line-height: 14px;
}
.item-right {
  width: 200px;
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
