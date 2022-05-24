<template>
  <div id="hosting">
    <hosting-top />
    <hosting-steps />
    <section-framework />
    <section-customer />
    <hosting-template />
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
  data() {
    return {
      title:
        '4EVERLAND Hosting | Host websites or DApps based on the Web3.0 | 4EVERLAND',
      description:
        '4EVERLAND Hosting is a developer application that helps developers to build, publish, and manage DWebs quickly.',
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
