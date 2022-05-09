<template>
  <div id="IpfsAbout">
    <v-container class="py-12">
      <div
        class="text-h4 font-weight-bold text-center mb-6"
        style="color: #132642"
      >
        Browse IPFS with 4EVERALND'S Gateway
      </div>
      <div class="text-h6 font-weight-bold text-center" style="color: #6c7789">
        No need to download anything. No need to give up local storage space. It
        all happens in your browser.
      </div>
      <v-row class="mt-16">
        <v-col
          v-for="(item, index) in list"
          :key="index"
          class="py-2 my-4"
          cols="12"
        >
          <v-row class="about-item px-10 align-center">
            <v-col cols="12" md="3" class="text-center text-md-right">
              <img :src="item.img" alt="" />
            </v-col>
            <v-col cols="12" md="9">
              <div class="item-title text-h6 font-weight-bold mb-2">
                {{ item.title }}
              </div>
              <div class="item-desc text-body-2">{{ item.desc }}</div>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <div class="text-center mt-16">
        <v-btn
          :href="hosting_web"
          target="_blank"
          tile
          class="start-btn"
          height="60"
          color="#452c92"
          >TRY FOR FREE</v-btn
        >
      </div>
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
          img: require('~/assets/imgs/ipfs/browse_01.png'),
        },
        {
          title: 'How does IPFS Work?',
          desc: "Distributed Computers Join the Network: Any computer can download the IPFS software and start adding and requesting files from the network.Unique Hash Created for Every File: Every file added to IPFS is given an address derived from a hash of the file's content. That address is like a fingerprint. It belongs uniquely to that file and will be the same, no matter where the file is stored in IPFS.",
          img: require('~/assets/imgs/ipfs/browse_02.png'),
        },
        {
          title: 'Why Are People Using IPFS?',
          desc: 'Ensure Integrity of ContentEvery file on IPFS has a unique address determined by the exact bits that comprise the file. If even a single bit changes, the whole address changes. This allows the users to know for sure if a file has ever been tampered with.',
          img: require('~/assets/imgs/ipfs/browse_03.png'),
        },
      ],
    }
  },
}
</script>
<style lang="scss" scoped>
.about-item {
  width: 100%;
  min-height: 300px;
  background: #edfbfa;
  img {
    width: 100%;
    max-width: 200px;
  }
  .item-title {
    color: #132642;
  }
  .item-desc {
    color: #6c7789;
  }
}
.start-btn {
  width: 240px;
  height: 60px;
  font-size: 20px;
  font-weight: bold;
  color: #fff;
}
</style>
