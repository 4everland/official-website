<template>
  <div id="sns">
    <sns-top />
    <sns-domain />
    <sns-type :domain-type="type" />
  </div>
</template>

<script>
import snsTop from '@/components/decentraliseSections/Top.vue'
import snsDomain from '@/components/decentraliseSections/Domain.vue'
import snsType from '@/components/decentraliseSections/Type.vue'

export default {
  components: {
    snsTop,
    snsDomain,
    snsType,
  },
  data() {
    return {
      type: 'SNS',
      domain: {
        title: 'SNS Domain | Combine SNS + IPFS | 4EVERLAND',
        description:
          'With 4EVERLAND, you can store and host your sites or applications on IPFS, and use Solana Name Service for decentralized naming.',
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
#sns {
  background-color: #fff;
}
</style>
