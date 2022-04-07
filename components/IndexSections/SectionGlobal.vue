<template>
  <div class="home-block">
    <v-container class="my-16">
      <v-row>
        <v-col cols="12" md="12" lg="12">
          <div class="title-underline">Global Presence</div>
          <div class="block-titel">
            Promote developers from all over the world to build Web3.0 together
          </div>
          <div class="block-text">
            4EVERLAND is committed to providing a distributed, highly efficient,
            self-motivated, and low-cost data hosting gateway, and becoming the
            infrastructure for millions of Web3.0 developers and applications.
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="12" lg="12" class="pa-0">
          <!-- <v-img
          :src="require('@/assets/imgs/index/global.png')"
          width="100%"
        ></v-img> -->
          <!-- <section-globe /> -->
        </v-col>
      </v-row>
      <v-row>
        <v-col
          v-for="(item, index) in list"
          :key="index"
          class="border-box"
          cols="6"
          md="3"
          lg="3"
        >
          <div class="py-8">
            <div class="main text-center py-16 px-12">
              <div
                class="main-num"
                :style="$vuetify.breakpoint.smAndDown ? 'font-size:40px' : ''"
              >
                {{ item.title }}
              </div>
              <div class="main-text" v-html="item.text"></div>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import '@/assets/styles/home.scss'
import SectionGlobe from './SectionGlobe.vue'
export default {
  components: {
    SectionGlobe,
  },
  data() {
    return {
      list: [
        {
          title: '100+',
          text: 'CITIES',
        },
        {
          title: '10B+',
          text: 'REQUESTS PER WEEK',
        },
        {
          title: '99.99%',
          text: 'GUARANTEED UPTIME',
        },
        {
          title: '10B+',
          text: 'DATA  SERVED <br/> Total Network Storage',
        },
      ],
    }
  },
}
</script>
<style scoped>
.start-btn {
  width: 300px;
  height: 60px;
  background: linear-gradient(-90deg, #ffb830, #e31313, #ff30f8);
  font-size: 20px;
  font-weight: bold;
}
.main {
  min-height: 300px;
  background: linear-gradient(120deg, #e1f2ff, #fff6f6);
}
.main-num {
  font-size: 60px;
  font-weight: bold;
  color: #473b8b;
}
.main-text {
  color: #6c7789;
  font-weight: bold;
}
</style>
