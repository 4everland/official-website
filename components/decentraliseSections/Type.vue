<template>
  <div id="DecentraliseType">
    <v-container class="py-12">
      <div class="my-16 d-flex justify-center">
        <div
          v-for="item in ['ENS', 'SNS']"
          :key="item"
          class="tab tetx-h5 font-weight-bold"
          :class="type == item ? 'active' : ''"
          @click="changeTab(item)"
        >
          {{ item }}
        </div>
      </div>
      <v-row>
        <v-col cols="12" md="6" class="d-flex justify-end">
          <v-img max-width="500" :src="domainObj[type].img"></v-img>
        </v-col>
        <v-col cols="12" md="6" class="pa-10">
          <div class="text-h6 font-weight-bold mb-2" style="color: #132642">
            {{ domainObj[type].tit }}
          </div>
          <div class="text-body-1" style="color: #6c7789">
            {{ domainObj[type].desc }}
          </div>
        </v-col>
      </v-row>
      <v-row class="justify-center my-16">
        <v-btn
          :href="hosting_web"
          target="_blank"
          tile
          class="start-btn"
          height="60"
          color="#452c92"
          >TRY FOR FREE</v-btn
        >
      </v-row>
      <v-row class="pt-16">
        <v-col cols="12" md="6" class="pa-10">
          <div class="text-h6 font-weight-bold mb-2" style="color: #132642">
            {{ domainObj[type].gifTit }}
          </div>
          <div class="text-body-1" style="color: #6c7789">
            {{ domainObj[type].gifDesc }}
          </div>
        </v-col>
        <v-col cols="12" md="6" class="d-flex justify-end">
          <v-img max-width="500" :src="domainObj[type].gif"></v-img>
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
          tit: 'Ethereum Name Service',
          desc: "In a nutshell, ENS is a name and lookup service built on the Ethereum blockchain that allows crypto users to translate their machine-readable addresses to human-readable addresses.That means you could send ETH or ERC20 tokens to “4everland.eth” instead of to “8e866f012fb8fb…” It offers a secure and decentralized way to address resources using human-readable names that is portable across dApps and blockchains. It is more secure, private, and resistant to censorship than the internet's Domain Name Service (DNS).",
          gif: require('~/assets/imgs/decentralise/ENS.gif'),
          gifTit: 'How to use ENS domain ?',
          gifDesc:
            'You can easily connect an Ethereum Name Service (ENS) domain with your IPFS site and have the content automatically update for future deployments. You can quick learn how to deploy and add ENS domain from the right GIF pic. The benefit of ENS domains is that they are totally decentralized and trustless, running on the Ethereum blockchain network through smart contracts.(Note:If the domain does not belong to anyone you will be redirected to the ENS Dashboard to buy it.)',
        },
        SNS: {
          img: require('~/assets/imgs/decentralise/sns.png'),
          tit: 'Solana Name Service',
          desc: "The Solana name service's mission is to provide a decentralised and cost-effective method of mapping domain names (.sol) to on-chain data.  This on-chain data could be anything from a SOL address to IPFS CID, images, text, and what have you.One of the most obvious advantages of the name service is the ability to map a human-readable name to a SOL address.  (e.g 4everland.sol).",
          gif: require('~/assets/imgs/decentralise/SNS.gif'),
          gifTit: 'How to use SNS domain ?',
          gifDesc:
            'You can easily connect an Solona Name Service (SNS) domain with your IPFS site and have the content automatically update for future deployments. You can quick learn how to deploy and add Solona domain from the right GIF pic. The benefit of SNS is that it has much broader applications the same as ENS domain (Note:If the domain does not belong to anyone you will be redirected to the SNS Dashboard to buy it.)',
        },
      },
    }
  },
  watch: {
    $route: {
      immediate: true, // 一旦监听到路由的变化立即执行
      handler(to, from) {
        this.type = to.query.type
      },
    },
  },
  created() {
    this.type = this.$route.query.type
  },
  methods: {
    changeTab(item) {
      this.type = item
      let url = window.location.href
      if (url.includes('?')) {
        url = url.split('?')[0] + '?type=' + item
        window.history.pushState({}, 0, url)
      }
    },
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
  .start-btn {
    width: 240px;
    height: 60px;
    font-size: 20px;
    font-weight: bold;
    color: #fff;
  }
}
</style>
