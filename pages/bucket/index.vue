<template>
  <div id="bucket">
    <bucket-top />
    <bucket-main />
  </div>
</template>

<script>
import BucketTop from '@/components/BucketSections/BucketTop.vue'
import BucketMain from '@/components/BucketSections/BucketMain.vue'

export default {
  components: {
    BucketTop,
    BucketMain,
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
  methods: {},
}
</script>
<style scoped>
#bucket {
  background-color: #fff;
}
</style>
