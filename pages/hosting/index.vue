<template>
  <div>
    <hosting-top />
    <hosting-steps background="black" />
    <hosting-dapps background="black" />
    <hosting-journey background="black" />
  </div>
</template>

<script>
import HostingTop from '@/components/HostingSections/HostingTop.vue'
import HostingSteps from '@/components/IndexSections/SectionSteps.vue'
import HostingDapps from '@/components/IndexSections/SectionDapps.vue'
import HostingJourney from '@/components/HostingSections/HostingJourney.vue'

export default {
  components: {
    HostingTop,
    HostingSteps,
    HostingDapps,
    HostingJourney,
  },
  methods: {},
}
</script>
