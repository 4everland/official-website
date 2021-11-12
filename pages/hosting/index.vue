<template>
  <div>
    <hosting-top />
    <hosting-steps />
    <section-framework />
    <section-customer />
    <hosting-template background="black" />
  </div>
</template>

<script>
import HostingTop from '@/components/HostingSections/HostingTop.vue'
import HostingSteps from '@/components/IndexSections/SectionSteps.vue'
import SectionFramework from '@/components/IndexSections/SectionFramework.vue'
import SectionCustomer from '@/components/IndexSections/SectionCustomer.vue'
import HostingTemplate from '@/components/HostingSections/HostingTemplate.vue'

export default {
  components: {
    HostingTop,
    HostingSteps,
    SectionFramework,
    SectionCustomer,
    HostingTemplate,
  },
  methods: {},
}
</script>
