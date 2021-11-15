<template>
  <div class="home-block">
    <v-container class="my-16">
      <v-row>
        <v-col cols="12" md="12" lg="12">
          <div class="block-titel">Technologies</div>
        </v-col>
      </v-row>
    </v-container>
    <v-row>
      <v-col
        v-for="item in list"
        :key="item.title"
        class="border-box"
        cols="12"
        md="3"
        lg="3"
      >
        <div class="win py-16">
          <div class="main text-center">
            <!-- <v-img :src="item.img" width="150px" class="ma-auto"> </v-img> -->
            <div
              class="border-box1"
              :style="{ backgroundImage: `url('${item.img}')` }"
            ></div>
            <div class="main-title mb-8">{{ item.title }}</div>
            <div class="main-text">
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
          img: require('@/assets/imgs/index/technologies/storage.png'),
          title: '4EVER-STORAGE',
          desc: '4EVERLAND forms nodes into a huge storage network through Swarm technology, which relies on node cooperativeness to achieve persistent storage of specific data, and supports horizontal expansion of nodes.',
        },
        {
          img: require('@/assets/imgs/index/technologies/gateway.png'),
          title: '4EVER-GATEWAY',
          desc: 'The gateway nodes contain dynamic DNS, Data I/O, and Cert Manager modules. With simple configuration, developers can achieve safe and reliable global acceleration based on 4EVERLAND quickly.',
        },
        {
          img: require('@/assets/imgs/index/technologies/proof.png'),
          title: 'Proof of Storage',
          desc: '4EVERLAND builds Swarm distributed storage network based on IPFS protocol and proposes storage challenge proof PoSC based on TEE technology, to ensure the availability and reliability of data.',
        },
        {
          img: require('@/assets/imgs/index/technologies/smart.png'),
          title: 'Smart Contract',
          desc: 'The smart contracts module of 4EVERLAND mainly includes payment contracts, auction contracts, lending contracts, control contracts,etc. It achieves open, transparent and free decentralized governance through smart contracts.',
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
.border-box {
  background-position: center top;
  background-size: inherit;
  background-repeat: no-repeat;
}
.border-box1 {
  height: 300px;
  background-position: center top;
  background-size: cover;
  background-repeat: no-repeat;
}

.main-text {
  font-size: 16px !important;
}
</style>
