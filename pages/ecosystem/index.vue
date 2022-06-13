<template>
  <div id="ecosystem">
    <ens-top />
  </div>
</template>

<script>
import ensTop from '@/components/decentraliseSections/Top.vue'

export default {
  components: {
    ensTop,
  },
  data() {
    return {
      title:
        '4EVERLAND Bucket | Decentralized storage and bandwidth services | 4EVERLAND',
      description:
        'BUCKET enables users to upload, store, and fetch files from the IPFS and Arweave in a secure, convenient, and efficient manner.',
    }
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.description,
        },
      ],
    }
  },
}
</script>
<style scoped>
#ecosystem {
  background-color: #fff;
}
</style>
