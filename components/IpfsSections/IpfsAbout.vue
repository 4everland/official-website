<template>
  <div id="IpfsAbout">
    <v-container class="py-12">
      <div
        class="text-h4 font-weight-bold text-center mb-6"
        style="color: #132642"
      >
        About InterPlanetary File System (IPFS)
      </div>
      <div class="text-h6 font-weight-bold text-center" style="color: #6c7789">
        4EVERLAND has its own IPFS gateway, which gives you access to addresses
        over HTTP on your browser.
      </div>
      <v-row class="mt-16">
        <v-col
          v-for="(item, index) in list"
          :key="index"
          class="py-6"
          cols="12"
          md="4"
          lg="4"
        >
          <div class="about-item ma-md-2 px-6 ma-sm-auto">
            <img :src="item.img" alt="" />
            <div class="item-title text-h6 font-weight-bold mb-4">
              {{ item.title }}
            </div>
            <div class="item-desc text-body-2">{{ item.desc }}</div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [
        {
          title: 'What is IPFS network and Dweb?',
          desc: 'The InterPlanetary File System (IPFS) is a protocol and peer-to-peer network for storing and sharing data (files, images, videos, websites) in a distributed file system. IPFS uses content-addressing to uniquely identify each file in a global namespace connecting all computing devices. IPFS allows users to not only receive but also host content.',
          img: require('~/assets/imgs/ipfs/IPFS_01.png'),
        },
        {
          title: 'How does IPFS Work?',
          desc: 'IPFS works by connecting all computing devices with the same system of files via a system of nodes. It uses a “distributed hash table, an incentivized block exchange, and a self-certifying namespace.” In simpler terms, it acts similarly to a torrent system, except that instead of sharing and exchanging media, IPFS exchanges git objects. This means that the entire system is based around a simple key-value data storage.',
          img: require('~/assets/imgs/ipfs/IPFS_02.png'),
        },
        {
          title: 'Why Choose to use IPFS?',
          desc: 'Compared to IPFS, HTTP is a twenty-year-old technology that has to be improved to keep up with Internet evolution. IPFS allows enjoying decreased latency, enabling us to use the higher memory densities and faster processing speeds that are being developed. It provides faster Internet speed, increased security, and the decentralization of virtual information.',
          img: require('~/assets/imgs/ipfs/IPFS_03.png'),
        },
      ],
    }
  },
}
</script>
<style lang="scss" scoped>
.about-item {
  width: 100%;
  max-width: 580px;
  min-height: 450px;
  max-height: 460px;
  background: linear-gradient(150deg, #e1f2ff, #f3ffe9);
  position: relative;
  img {
    width: 100%;
    transform: translateY(-70px);
  }
  .item-title {
    color: #132642;
    transform: translateY(-70px);
  }
  .item-desc {
    color: #6c7789;
    transform: translateY(-70px);
  }
}
</style>
