<template>
  <div id="Price">
    <price-top />
    <price-free />
    <price-resources />
    <price-support />
    <price-usage />
    <price-plan />
    <price-footer />
  </div>
</template>

<script>
import priceTop from '@/components/PriceSections/Top.vue'
import priceFree from '@/components/PriceSections/Free.vue'
import priceResources from '@/components/PriceSections/Resources.vue'
import priceSupport from '@/components/PriceSections/Support.vue'
import priceUsage from '@/components/PriceSections/Usage.vue'
import pricePlan from '@/components/PriceSections/Plan.vue'
import priceFooter from '@/components/PriceSections/Footer.vue'

export default {
  components: {
    priceTop,
    priceFree,
    priceResources,
    priceSupport,
    priceUsage,
    pricePlan,
    priceFooter,
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
