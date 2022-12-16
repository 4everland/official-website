<template>
  <div id="DecentraliseType">
    <v-container class="py-12">
      <div class="my-16 d-flex justify-center">
        <div
          v-for="item in ['ENS', 'SNS']"
          :key="item"
          class="tab tetx-h5 font-weight-bold"
          :class="domainType == item ? 'active' : ''"
          @click="changeTab(item)"
        >
          {{ item }}
        </div>
      </div>
      <v-row>
        <v-col cols="12" md="6" class="d-flex justify-end">
          <v-img max-width="500" :src="domainObj[domainType].img"></v-img>
        </v-col>
        <v-col cols="12" md="6" class="pa-10">
          <div class="text-h6 font-weight-bold mb-2" style="color: #132642">
            {{ domainObj[domainType].tit }}
          </div>
          <div class="text-body-1" style="color: #6c7789">
            {{ domainObj[domainType].desc }}
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
            {{ domainObj[domainType].gifTit }}
          </div>
          <div class="text-body-1" style="color: #6c7789">
            {{ domainObj[domainType].gifDesc }}
          </div>
        </v-col>
        <v-col cols="12" md="6" class="d-flex justify-start">
          <v-img max-width="600" :src="domainObj[domainType].gif"></v-img>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
  props: {
    domainType: {
      type: String,
      default: 'ENS',
    },
  },
  data() {
    return {
      domainObj: {
        ENS: {
          img: require('~/assets/imgs/decentralise/ens.png'),
          tit: 'Ethereum Name Service',
          desc: 'In a nutshell, ENS is a name and lookup service built on the Ethereum blockchain that allows crypto users to translate their machine-readable addresses to human-readable addresses. You could send ETH or ERC20 tokens to “4everland.eth” instead of “8e866f012fb8fb…”. It offers a secure and decentralized way to address resources using portable human-readable names across DApps and blockchains. ENS is more secure, private, and resistant to censorship than the Domain Name Service (DNS).',
          gif: require('~/assets/imgs/decentralise/ENS.gif'),
          gifTit: 'How to use the ENS domain?',
          gifDesc:
            'You can sync an ENS domain with your IPFS website and get the content automatically updated for future deployments. Learn how to add your ENS domain from the GIF file on the right.The main benefits of ENS domains are their decentralized architecture, trustlessness, and running on the Ethereum blockchain network through smart contracts. (Note: If the domain does not belong to anyone you will be redirected to the ENS Dashboard to buy it.)',
        },
        SNS: {
          img: require('~/assets/imgs/decentralise/sns.png'),
          tit: 'Solana Name Service',
          desc: "The Solana name service's mission is to provide a decentralised and cost-effective method of mapping domain names (.sol) to on-chain data. This on-chain data could be anything from a SOL address to IPFS CID, images, text, and what have you.One of the most obvious advantages of the name service is the ability to map a human-readable name to a SOL address. (e.g 4everland.sol).",
          gif: require('~/assets/imgs/decentralise/SNS.gif'),
          gifTit: 'How to use the SNS domain?',
          gifDesc:
            'You can easily connect an Solona Name Service (SNS) domain with your IPFS site and have the content automatically update for future deployments. You can quick learn how to deploy and add Solona domain from the right GIF pic. The benefit of SNS is that it has much broader applications the same as ENS domain (Note:If the domain does not belong to anyone you will be redirected to the SNS Dashboard to buy it.)',
        },
      },
    }
  },
  methods: {
    changeTab(item) {
      const path = item.toLowerCase()
      this.$router.push('/' + path + '#DecentraliseType')
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
