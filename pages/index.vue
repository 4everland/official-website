<template>
  <div id="home">
    <section-top />
    <section-universe />
    <section-about />
    <section-help />
    <section-explore />
    <section-globe />
    <section-Partners />

    <section-new />
  </div>
</template>

<script>
import SectionTop from '@/components/IndexSections/SectionTop.vue'
import SectionUniverse from '@/components/IndexSections/SectionUniverse.vue'
import SectionAbout from '@/components/IndexSections/SectionAbout.vue'
import SectionHelp from '@/components/IndexSections/SectionHelp.vue'
import SectionExplore from '@/components/IndexSections/SectionExplore.vue'
import SectionGlobe from '@/components/IndexSections/SectionGlobe.vue'
import SectionPartners from '@/components/IndexSections/SectionPartners.vue'

import SectionNew from '@/components/IndexSections/SectionNew.vue'

export default {
  components: {
    SectionTop,
    SectionUniverse,
    SectionAbout,
    SectionHelp,
    SectionExplore,
    SectionGlobe,
    SectionNew,
    SectionPartners,
  },
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
      setTimeout(() => this.$nuxt.$loading.finish(), 1000)
    })
  },
  methods: {},
}
</script>
