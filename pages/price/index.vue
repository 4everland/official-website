<template>
  <div id="Price">
    <price-top />
    <price-main />
    <price-type :domain-type="type" />
  </div>
</template>

<script>
import priceTop from '@/components/PriceSections/Top.vue'
import priceMain from '@/components/PriceSections/Main.vue'
import priceType from '@/components/PriceSections/Type.vue'

export default {
  components: {
    priceTop,
    priceMain,
    priceType,
  },
  data() {
    return {}
  },
  head() {
    return {}
  },
}
</script>
<style scoped>
#Price {
  background-color: #fff;
}
</style>
