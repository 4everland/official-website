<template>
  <div id="IpfsAbout">
    <v-container class="py-12">
      <div
        class="text-h4 font-weight-bold text-center mb-6"
        style="color: #132642"
      >
        Gather IPFS + decentralized domain on 4EVERLAND
      </div>
      <div class="text-h6 font-weight-bold text-center" style="color: #6c7789">
        With 4EVERLAND services, you can enjoy Ethereum Name Service domains and
        Solana Name Service. Sync your decentralized domain to the IPFS website
        and get the content updated for future deployments. Implementation of
        ENS and SNS into your DWeb and DApp can leverage the benefits of the
        Open Web for your users.
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
            <div class="item-title text-center text-h6 font-weight-bold">
              {{ item.title }}
            </div>
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
          title: 'Private Exclusive',
          img: require('~/assets/imgs/decentralise/domain_01.png'),
        },
        {
          title: 'Decentralized',
          img: require('~/assets/imgs/decentralise/domain_02.png'),
        },
        {
          title: 'Censorship-resistant',
          img: require('~/assets/imgs/decentralise/domain_03.png'),
        },
      ],
    }
  },
}
</script>
<style lang="scss" scoped>
.about-item {
  width: 100%;
  max-width: 500px;
  min-height: 300px;
  max-height: 500px;
  background: linear-gradient(180deg, #fff, #fff, #e1f2ff, #f3ffe9);
  text-align: center;
  img {
    max-width: 70%;
    max-height: 350px;
  }
  .item-title {
    color: #132642;
  }
  .item-desc {
    color: #6c7789;
  }
}
</style>
