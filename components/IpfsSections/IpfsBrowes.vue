<template>
  <div id="IpfsAbout">
    <v-container class="py-12">
      <div
        class="text-h4 font-weight-bold text-center mb-6"
        style="color: #132642"
      >
        Browse IPFS with 4EVERLAND Gateways
      </div>
      <div class="text-h6 font-weight-bold text-center" style="color: #6c7789">
        4EVERLAND Gateways offers global acceleration, custom domains, and SSL
        certificates for better performance. Users can enjoy 4EVERLAND IPFS
        gateway by leveraging its globally distributed SWARM network.
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
            <img class="pa-6" :src="item.img" alt="" />
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
          title: 'Global Acceleration',
          desc: '4EVERLAND gateway offers greater speed through our over 200 edge caching locations around the world. No rate limits for requesting content.',
          img: require('~/assets/imgs/ipfs/browse_01.png'),
        },
        {
          title: 'Custom Domain',
          desc: '4EVERLAND Gateway supports custom domains. They advance branding and bring more value to a project.',
          img: require('~/assets/imgs/ipfs/browse_02.png'),
        },
        {
          title: 'SSL Certificate',
          desc: 'SSL Certificate ensures that all communication between a browser and a website you are viewing is encrypted. 4EVERLAND also provides free auto-renewal.',
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
  max-width: 580px;
  min-height: 450px;
  background: linear-gradient(150deg, #e1f2ff, #f3ffe9);
  text-align: center;
  img {
    width: 80%;
    max-width: 300px;
  }
  .item-title {
    text-align: left;
    color: #132642;
  }
  .item-desc {
    text-align: left;
    color: #6c7789;
  }
}
</style>
