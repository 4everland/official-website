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
        4EVERLAND Can Help You Rebuild the Web's Foundation Layer and Transition
        to a New and Unbiased Web 3.0.
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
          title: 'What is IPFS?',
          desc: 'The IPFS is a distributed file storage protocol that allows computers all over the globe to store and serve files as part of a giant peer-to-peer network.Any computer, anywhere in the world, can download the IPFS software and start hosting and serving files.If someone runs IPFS on their computer and uploads a file to the IPFS network, that file can be viewed and downloaded by anyone else in the world who is also running IPFS.',
          img: require('~/assets/imgs/ipfs/IPFS_01.png'),
        },
        {
          title: 'How does IPFS Work?',
          desc: "Distributed Computers Join the Network: Any computer can download the IPFS software and start adding and requesting files from the network.Unique Hash Created for Every File: Every file added to IPFS is given an address derived from a hash of the file's content. That address is like a fingerprint. It belongs uniquely to that file and will be the same, no matter where the file is stored in IPFS.",
          img: require('~/assets/imgs/ipfs/IPFS_02.png'),
        },
        {
          title: 'Why Are People Using IPFS?',
          desc: 'Ensure Integrity of ContentEvery file on IPFS has a unique address determined by the exact bits that comprise the file. If even a single bit changes, the whole address changes. This allows the users to know for sure if a file has ever been tampered with.',
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
  min-height: 600px;
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
