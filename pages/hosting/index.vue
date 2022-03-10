<template>
  <div id="hosting">
    <hosting-top />
    <hosting-steps />
    <section-framework />
    <section-customer />
    <hosting-template background="black" />
    <hosting-faq />
  </div>
</template>

<script>
import HostingTop from '@/components/HostingSections/HostingTop.vue'
import HostingSteps from '@/components/HostingSections/SectionSteps.vue'
import SectionFramework from '@/components/IndexSections/SectionFramework.vue'
import SectionCustomer from '@/components/HostingSections/SectionCustomer.vue'
import HostingTemplate from '@/components/HostingSections/HostingTemplate.vue'
import HostingFaq from '@/components/HostingSections/HostingFaq.vue'

export default {
  components: {
    HostingTop,
    HostingSteps,
    SectionFramework,
    SectionCustomer,
    HostingTemplate,
    HostingFaq,
  },
  methods: {},
}
</script>
<style scoped>
#hosting {
  background-color: #fff;
}
</style>
