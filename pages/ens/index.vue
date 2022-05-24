<template>
  <div id="ens">
    <ens-top />
    <ens-domain />
    <ens-type :domain-type="type" />
  </div>
</template>

<script>
import ensTop from '@/components/decentraliseSections/Top.vue'
import ensDomain from '@/components/decentraliseSections/Domain.vue'
import ensType from '@/components/decentraliseSections/Type.vue'

export default {
  components: {
    ensTop,
    ensDomain,
    ensType,
  },
  data() {
    return {
      type: 'ENS',
      domain: {
        title: 'ENS Domain | Combine ENS + IPFS | 4EVERLAND',
        description:
          'With 4EVERLAND, you can store and host your sites or applications on IPFS, and use Ethereum Name Service for decentralized naming.',
      },
    }
  },
  head() {
    return {
      title: this.domain.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.domain.description,
        },
      ],
    }
  },
}
</script>
<style scoped>
#ens {
  background-color: #fff;
}
</style>
