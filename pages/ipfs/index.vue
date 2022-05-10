<template>
  <div id="ipfs">
    <ipfs-top />
    <ipfs-about />
    <ipfs-browes />
  </div>
</template>

<script>
import IpfsTop from '@/components/IpfsSections/IpfsTop.vue'
import IpfsAbout from '@/components/IpfsSections/IpfsAbout.vue'
import IpfsBrowes from '@/components/IpfsSections/IpfsBrowes.vue'

export default {
  components: {
    IpfsTop,
    IpfsAbout,
    IpfsBrowes,
  },
  data() {
    return {
      title:
        'IPFS Gateway | Global accelerated distributed web gateway | 4EVERLAND',
      description:
        "Browse files stored on IPFS easily and securely with 4EVERLAND's distributed web gateway without downloading software.",
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
#hosting {
  background-color: #fff;
}
</style>
