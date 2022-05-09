<template>
  <div id="ens">
    <ens-top />
    <ens-type />
    <ens-browes />
  </div>
</template>

<script>
import ensTop from '@/components/decentraliseSections/Top.vue'
import ensType from '@/components/decentraliseSections/Type.vue'
import ensBrowes from '@/components/decentraliseSections/Browes.vue'

export default {
  components: {
    ensTop,
    ensType,
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
