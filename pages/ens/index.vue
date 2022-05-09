<template>
  <div id="ens">
    <ens-top />
    <ens-about />
    <ens-browes />
  </div>
</template>

<script>
import ensTop from '@/components/ensSections/ensTop.vue'
import ensAbout from '@/components/ensSections/ensAbout.vue'
import ensBrowes from '@/components/ensSections/ensBrowes.vue'

export default {
  components: {
    ensTop,
    ensAbout,
    ensBrowes,
  },
  methods: {},
}
</script>
<style scoped>
#hosting {
  background-color: #fff;
}
</style>
