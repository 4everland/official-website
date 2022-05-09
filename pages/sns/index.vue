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
  methods: {},
}
</script>
<style scoped>
#hosting {
  background-color: #fff;
}
</style>
