<template>
  <div id="hosting">
    <hosting-top />
    <hosting-ipfs />
    <hosting-why />
    <section-framework />
    <hosting-steps />
    <section-customer />
    <hosting-footer />
  </div>
</template>

<script>
import HostingTop from '@/components/HostingSections/HostingTop.vue'
import HostingIpfs from '@/components/HostingSections/HostingIpfs.vue'
import HostingWhy from '@/components/HostingSections/HostingWhy.vue'
import HostingSteps from '@/components/HostingSections/SectionSteps.vue'
import SectionFramework from '@/components/HostingSections/SectionFramework.vue'
import SectionCustomer from '@/components/HostingSections/SectionCustomer.vue'
import HostingFooter from '@/components/HostingSections/HostingFooter.vue'

export default {
  components: {
    HostingTop,
    HostingIpfs,
    HostingWhy,
    HostingSteps,
    SectionFramework,
    SectionCustomer,
    HostingFooter,
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
