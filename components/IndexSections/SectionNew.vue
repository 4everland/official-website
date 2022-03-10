<template>
  <div class="home-block">
    <v-container class="my-16">
      <v-row>
        <v-col cols="12" md="12" lg="12">
          <div class="block-titel">Welcome to the new internet - Web 3</div>
          <div class="block-text">
            4EVERLAND Can Help You Rebuild the Web's Foundation Layer and
            Transition to a New and Unbiased Web 3.0.
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col
          v-for="(item, index) in list"
          :key="item.title"
          cols="12"
          md="6"
          lg="6"
        >
          <div class="new-item ma-6 py-12 px-16" :class="'new-item-' + index">
            <div class="main-title mb-8">{{ item.title }}</div>
            <div class="main-text">
              {{ item.desc }}
            </div>
          </div>
        </v-col>
      </v-row>
      <v-row class="video-box my-16">
        <v-col
          class="d-flex flex-column justify-center"
          cols="12"
          md="6"
          lg="6"
        >
          <div class="text-h3 mb-16 video-title">What is 4EVERLAND?</div>
          <div class="text-h5 video-text">
            4EVERLAND is a Web 3.0 cloud computing platform that integrates
            storage, computing, and network core capabilities.
          </div>
        </v-col>
        <v-col cols="12" md="6" lg="6">
          <video
            controls
            preload="meta"
            class="video-play"
            src="https://storage.4everland.app/4EVERLAND.mp4"
          ></video>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import '@/assets/styles/home.scss'
export default {
  data() {
    return {
      list: [
        {
          img: require('@/assets/imgs/index/new/new1.png'),
          title: 'Write once, Run any blockchian',
          desc: "4EVERLAND helps developers to initiate 'write once, run any blockchain' programming paradigm by integrating various public chains and solving the differences between public chain protocols. In addition, it enables developers of each public chain to deploy contracts and front ends once and achieve a fully decentralized technical architecture.",
        },
        {
          img: require('@/assets/imgs/index/new/new2.png'),
          title: 'DApps can be created without centralized components',
          desc: '4EVERLAND uses a decentralized network system that integrates core services such as storage, computing, and networking, enabling data storage and business logic to run on a decentralized network instead of centralized services like AWS or Google Cloud.',
        },
        {
          img: require('@/assets/imgs/index/new/new3.png'),
          title: 'Compatible with the traditional development environment',
          desc: '4EVERLAND provides a series of development and deployment tools, compatible with EVM, WASM, etc., Easily coupled and integrated, so that Web 2.0 developers can quickly complete the development and deployment of DApp without any additional learning costs.',
        },
        {
          img: require('@/assets/imgs/index/new/new4.png'),
          title: 'Provide multiple ecological resources',
          desc: '4EVERLAND integrates the underlying public chains of Ethereum, BSC, Solana, Polygon, Filecoin, etc., and supports various forms of inter-blockchain information exchange, so that developers can quickly implement multi-chain deployment and multi-chain communication to enjoy the various ecological resources.',
        },
      ],
    }
  },
}
</script>
<style scoped>
.home-block {
  background-image: url('@/assets/imgs/index/video-bg.png');
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
}
.text-nowrap {
  white-space: nowrap;
}
.new-item {
  min-height: 320px;
}
.new-item-0 {
  background: linear-gradient(-30deg, #e1f2ff, #fff6f6);
  border-radius: 0 60px 0 60px;
}
.new-item-1 {
  background: linear-gradient(30deg, #e1f2ff, #fff6f6);
  border-radius: 60px 0 60px 0;
}
.new-item-2 {
  background: linear-gradient(210deg, #e1f2ff, #fff6f6);
  border-radius: 60px 0 60px 0;
}
.new-item-3 {
  background: linear-gradient(150deg, #e1f2ff, #fff6f6);
  border-radius: 0 60px 0 60px;
}
.main-title {
  font-size: 24px;
  color: #132642;
  font-weight: bold;
}
.main-text {
  font-size: 18px;
  color: #6c7789;
}
.section-video {
  padding: 90px 0;
  background-image: url('@/assets/imgs/index/video-bg.png');
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
}
.video-play {
  max-width: 1200px;
  width: 100%;
}
.video-title {
  color: #132642;
  text-align: center;
}
.video-text {
  color: #6c7789;
  max-width: 570px;
  margin: 0 auto;
}
</style>
