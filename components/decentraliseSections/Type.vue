<template>
  <div id="DecentraliseType">
    <v-container class="py-12">
      <div
        class="text-h4 font-weight-bold text-center mb-6"
        style="color: #132642"
      >
        4EVERLAND Can Help You Rebuild the Web's Foundation Layer and T
      </div>
      <div class="text-h6 font-weight-bold text-center" style="color: #6c7789">
        4EVERLAND Can Help You Rebuild the Web's Foundation Layer and Transition
        to a New and Unbiased Web 3.0.
      </div>
      <div class="my-16 d-flex justify-center">
        <div
          v-for="item in ['ENS', 'SNS']"
          :key="item"
          class="tab tetx-h5 font-weight-bold"
          :class="type == item ? 'active' : ''"
          @click="type = item"
        >
          {{ item }}
        </div>
      </div>
      <v-row>
        <v-col cols="12" md="6" class="d-flex justify-end">
          <v-img max-width="500" :src="domainObj[type].img"></v-img>
        </v-col>
        <v-col cols="12" md="6">
          <div class="text-h6 font-weight-bold mb-2" style="color: #132642">
            {{ domainObj[type].tit }}
          </div>
          <div class="text-body-1" style="color: #6c7789">
            {{ domainObj[type].desc }}
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
      type: 'ENS',
      domainObj: {
        ENS: {
          img: require('~/assets/imgs/decentralise/ens.png'),
          tit: 'Solana Name Service Analytics',
          desc: 'Solana domain name service has been the standard for P2P transactions on Solana chain. Major wallets such as Phantom, Solflare and Slope Finance have successfully integrated Solana domain name service function. Solana domain name service converts lengthy SOL addresses into easy-to-read. Sol domain names, greatly simplifying on-chain payments.',
        },
        SNS: {
          img: require('~/assets/imgs/decentralise/sns.png'),
          tit: 'Solana Name Service Analytics',
          desc: 'Solana domain name service has been the standard for P2P transactions on Solana chain. Major wallets such as Phantom, Solflare and Slope Finance have successfully integrated Solana domain name service function. Solana domain name service converts lengthy SOL addresses into easy-to-read. Sol domain names, greatly simplifying on-chain payments.',
        },
      },
    }
  },
  created() {
    this.type = this.$route.query.type
  },
}
</script>
<style lang="scss" scoped>
#DecentraliseType {
  .tab {
    border: 1px solid #452c92;
    color: #132642;
    width: 340px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    cursor: pointer;
  }
  .tab.active {
    background-color: #452c92;
    color: #fff;
  }
}
</style>
