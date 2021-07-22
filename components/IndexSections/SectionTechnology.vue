<template>
  <div class="d-flex flex-column" style="position: relative">
    <v-container id="technology" class="py-16 px-8">
      <h3 class="text-h3 font-weight-light text-center mb-16">Technology</h3>
      <v-row>
        <v-col
          v-for="tech in technologies"
          :key="tech.title"
          cols="12"
          lg="6"
          md="6"
        >
          <v-card class="tech pa-6">
            <div><img :src="tech.img" style="width: 100%" /></div>
            <h5 class="text-h5 my-4">{{ tech.title }}</h5>
            <p class="text--secondary tech-desc">{{ tech.desc }}</p>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <img src="~/assets/imgs/index/white_img@2x.png" class="border-img" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      technologies: [
        {
          img: require('~/assets/imgs/index/tech1.png'),
          title: '4EVER-STORAGE',
          desc: '4EVERLAND forms nodes into a huge storage network through Swarm technology, which relies on node cooperativeness to achieve persistent storage of specific data, and supports horizontal expansion of nodes.',
        },
        {
          img: require('~/assets/imgs/index/tech2.png'),
          title: '4EVER-GATEWAY',
          desc: 'The gateway nodes contain dynamic DNS, Data I/O, and Cert Manager modules. With simple configuration, developers can achieve safe and reliable global acceleration based on 4EVERLAND quickly.',
        },
        {
          img: require('~/assets/imgs/index/tech3.png'),
          title: 'Proof of Storage',
          desc: '4EVERLAND builds Swarm distributed storage network based on IPFS protocol and proposes storage challenge proof PoSC based on TEE technology, to ensure the availability and reliability of data.',
        },
        {
          img: require('~/assets/imgs/index/tech4.png'),
          title: 'Smart Contract',
          desc: 'The smart contracts module of 4EVERLAND mainly includes payment contracts, auction contracts, lending contracts, control contracts,etc. It achieves open, transparent and free decentralized governance through smart contracts.',
        },
      ],
    }
  },
}
</script>
<style scoped>
.tech {
  height: 100%;
}
.tech-desc {
  font-size: 14px;
}
.border-img {
  width: 100%;
}
</style>
