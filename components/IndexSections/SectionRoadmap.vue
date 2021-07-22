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
        class="roadmaps d-flex flex-column justify-stretch"
      >
        <!-- even roadmaps -->
        <div class="d-flex">
          <div
            v-for="roadmap in evenRoadmaps"
            :key="roadmap.title"
            class="roadmap mr-4 d-flex justify-stretch"
          >
            <div
              class="rounded-sm mr-4"
              :style="{ width: '6px', 'background-color': `${roadmap.color}` }"
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
        <!-- progress bar -->
        <div class="d-flex my-4" :style="{ width: width }">
          <v-progress-linear value="38"></v-progress-linear>
        </div>
        <!-- odd roadmaps -->
        <div class="d-flex">
          <div
            v-for="roadmap in oddRoadmaps"
            :key="roadmap.title"
            class="roadmap ml-6 mr-4 d-flex justify-stretch"
          >
            <div
              class="rounded mr-4"
              :style="{ width: '6px', 'background-color': `${roadmap.color}` }"
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
    <div v-else class="d-flex justify-center d-none d-sm-flex d-xs-flex">
      <div class="d-flex flex-column">
        <div
          v-for="roadmap in roadmaps"
          :key="roadmap.title"
          :class="{ current: roadmap.current, 'mt-6 mb-2': roadmap.current }"
          class="roadmap mt-4 d-flex justify-stretch"
        >
          <div
            class="rounded-sm mr-4"
            :style="{ width: '6px', 'background-color': `${roadmap.color}` }"
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
    </div>
  </v-container>
</template>
<script>
import { mdiChevronLeft, mdiChevronRight } from '@mdi/js'
export default {
  computed: {
    oddRoadmaps() {
      return this.roadmaps.filter((item, i) => {
        return i % 2 == 1
      })
    },
    evenRoadmaps() {
      return this.roadmaps.filter((item, i) => {
        return i % 2 == 0
      })
    },
  },
  data() {
    return {
      width: '100%',
      mdiChevronLeft,
      mdiChevronRight,
      roadmaps: [
        {
          color: '#E60033',
          title: 'V1: Quark（2021-2022）',
          content:
            '<strong>The Paas of Web 3.0</strong> &nbsp;&nbsp;<br/> Genesis Product, Realizing the Initial Vision',
        },
        {
          color: '#E83929',
          title: 'Q1 2021',
          content: ' Market research and product prototype',
        },
        {
          color: '#E83929',
          title: 'March 2021',
          content: 'Product Design & Technology Development',
        },
        {
          color: '#e95464',
          title: 'May 2021',
          content: 'Establish 4EVERLAND Foundation and technical community',
        },
        {
          color: '#E95464',
          title: 'June 2021',
          current: true,
          content: 'Whitepaper published, 4EVERLAND official website launch',
        },
        {
          color: '#EB6EA5',
          title: 'August 2021',
          content: '<strong>ALPHA Launch</strong>',
        },
        {
          color: '#E198B4',
          title: 'November 2021',
          content: '<strong>BETA Launch</strong>',
        },
        {
          color: '#824880',
          title: 'Q1 2022',
          content: 'Online auction system, participate in Genesis node bidding',
        },
        {
          color: '#915C8B',
          title: '2022.Q2',
          content: '<strong>Mainnet launch</strong>',
        },
        {
          color: '#CCA6BF',
          title: 'V2: Proton（2023-2024）',
          content:
            '<strong> Enpower Web3.0 developers </strong> <br/> expand commercialization capability, launch more developer application tools',
        },
        {
          color: '#3E62AD',
          title: 'V3: Atom ( 2025-2026 )',
          content:
            '<strong>Cloud Computing of Web3.0</strong> &nbsp; <br/> Launch virtual machine container, acquire capabilities of Web3.0 cloud computing',
        },
      ],
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
.roadmap-title {
  white-space: nowrap;
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
</style>
