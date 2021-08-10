<template>
  <div>
    <hosting-top />
    <hosting-steps background="black" />
    <!-- <hosting-dapps background="black" /> -->
    <hosting-template background="black" />
  </div>
</template>

<script>
import HostingTop from '@/components/HostingSections/HostingTop.vue'
import HostingSteps from '@/components/IndexSections/SectionSteps.vue'
import HostingDapps from '@/components/IndexSections/SectionDapps.vue'
import HostingTemplate from '@/components/HostingSections/HostingTemplate.vue'

export default {
  components: {
    HostingTop,
    HostingSteps,
    HostingDapps,
    HostingTemplate,
  },
  methods: {},
}
</script>
