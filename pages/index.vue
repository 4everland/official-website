<template>
  <div v-scroll="onScroll">
    <!-- <section-top />
    <section-globe />
    <section-features />
    <section-technology />
    <section-participant />
    <section-steps />
    <section-dapps />
    <section-map />
    <section-roadmap />
    <hosting-template />
    <section-future /> -->
  </div>
</template>

<script>
import SectionTop from '@/components/IndexSections/SectionTop.vue'
import SectionGlobe from '@/components/IndexSections/SectionGlobe.vue'
import SectionFeatures from '@/components/IndexSections/SectionFeatures.vue'
import SectionTechnology from '@/components/IndexSections/SectionTechnology.vue'
import SectionParticipant from '@/components/IndexSections/SectionParticipant.vue'
import SectionSteps from '@/components/IndexSections/SectionSteps.vue'
import SectionDapps from '@/components/IndexSections/SectionDapps.vue'
import SectionMap from '@/components/IndexSections/SectionMap.vue'
import SectionRoadmap from '@/components/IndexSections/SectionRoadmap.vue'
import HostingTemplate from '@/components/HostingSections/HostingTemplate.vue'
import SectionFuture from '@/components/IndexSections/SectionFuture.vue'
export default {
  components: {
    SectionTop,
    SectionGlobe,
    SectionFeatures,
    SectionTechnology,
    SectionParticipant,
    SectionSteps,
    SectionDapps,
    SectionMap,
    SectionRoadmap,
    HostingTemplate,
    SectionFuture,
  },
  methods: {
    onScroll(e) {
      // eslint-disable-next-line no-console
      // console.log(e, this.hash)
    },
  },
}
</script>
