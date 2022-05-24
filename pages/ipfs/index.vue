<template>
  <div id="ipfs">
    <ipfs-top />
    <ipfs-browes />
    <ipfs-type />
    <ipfs-about />
  </div>
</template>

<script>
import IpfsTop from '@/components/IpfsSections/IpfsTop.vue'
import IpfsBrowes from '@/components/IpfsSections/IpfsBrowes.vue'
import IpfsType from '@/components/IpfsSections/IpfsType.vue'
import IpfsAbout from '@/components/IpfsSections/IpfsAbout.vue'

export default {
  components: {
    IpfsTop,
    IpfsBrowes,
    IpfsType,
    IpfsAbout,
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
