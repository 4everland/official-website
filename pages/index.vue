<template>
  <div v-scroll="onScroll">
    <section-top />
    <section-globe />
    <section-features />
    <section-technology />
    <section-participant />
    <section-steps />
    <section-map />
    <section-roadmap />
    <section-future />
  </div>
</template>

<script>
import SectionFeatures from '../components/IndexSections/SectionFeatures.vue'
import SectionGlobe from '../components/IndexSections/SectionGlobe.vue'
import SectionParticipant from '../components/IndexSections/SectionParticipant.vue'
import SectionSteps from '../components/IndexSections/SectionSteps.vue'
import SectionTechnology from '../components/IndexSections/SectionTechnology.vue'
import SectionTop from '../components/IndexSections/SectionTop.vue'
import SectionMap from '../components/IndexSections/SectionMap.vue'
import SectionRoadmap from '../components/IndexSections/SectionRoadmap.vue'
import SectionFuture from '../components/IndexSections/SectionFuture.vue'
export default {
  components: {
    SectionTop,
    SectionGlobe,
    SectionFeatures,
    SectionTechnology,
    SectionParticipant,
    SectionSteps,
    SectionMap,
    SectionRoadmap,
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
