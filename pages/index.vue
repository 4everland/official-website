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
import SectionFeatures from '../components/IndexSecions/SectionFeatures.vue'
import SectionGlobe from '../components/IndexSecions/SectionGlobe.vue'
import SectionParticipant from '../components/IndexSecions/SectionParticipant.vue'
import SectionSteps from '../components/IndexSecions/SectionSteps.vue'
import SectionTechnology from '../components/IndexSecions/SectionTechnology.vue'
import SectionTop from '../components/IndexSecions/SectionTop.vue'
import SectionMap from '../components/IndexSecions/SectionMap.vue'
import SectionRoadmap from '../components/IndexSecions/SectionRoadmap.vue'
import SectionFuture from '../components/IndexSecions/SectionFuture.vue'
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
