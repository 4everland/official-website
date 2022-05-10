<template>
  <div id="ens">
    <ens-top />
    <ens-type />
  </div>
</template>

<script>
import ensTop from '@/components/decentraliseSections/Top.vue'
import ensType from '@/components/decentraliseSections/Type.vue'

export default {
  components: {
    ensTop,
    ensType,
  },
  data() {
    return {
      type: 'ENS',
      domain: {
        ENS: {
          title: 'ENS Domain | Combine ENS + IPFS | 4EVERLAND',
          description:
            'With 4EVERLAND, you can store and host your sites or applications on IPFS, and use Ethereum Name Service for decentralized naming.',
        },
        SNS: {
          title: 'SNS Domain | Combine SNS + IPFS | 4EVERLAND',
          description:
            'With 4EVERLAND, you can store and host your sites or applications on IPFS, and use Solana Name Service for decentralized naming.',
        },
      },
    }
  },
  head() {
    return {
      title: this.domain[this.type].title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.domain[this.type].description,
        },
      ],
    }
  },
  created() {
    this.type = this.$route.query.type
  },
}
</script>
<style scoped>
#hosting {
  background-color: #fff;
}
</style>
