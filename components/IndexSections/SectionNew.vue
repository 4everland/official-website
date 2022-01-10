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
    </v-container>
    <v-row>
      <v-col
        v-for="item in list"
        :key="item.title"
        class="border-box"
        cols="12"
        md="6"
        lg="3"
      >
        <div class="win py-16">
          <div class="main text-center">
            <v-img
              :src="item.img"
              max-width="150px"
              height="130px"
              class="ma-auto"
            >
            </v-img>
            <div class="main-title mb-8">{{ item.title }}</div>
            <div class="main-text" style="font-size: 16px">
              {{ item.desc }}
            </div>
          </div>
        </div>
      </v-col>
    </v-row>
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
.text-nowrap {
  white-space: nowrap;
}
.win {
  height: 100%;
}
.main {
  height: 100%;
}
.main-title {
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
