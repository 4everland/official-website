<template>
  <div id="home">
    <section-top />
    <section-universe />
    <section-new />
  </div>
</template>

<script>
import SectionTop from '@/components/IndexSections/SectionTop.vue'
import SectionNew from '@/components/IndexSections/SectionNew.vue'
import SectionUniverse from '@/components/IndexSections/SectionUniverse.vue'

export default {
  components: {
    SectionTop,
    SectionUniverse,
    SectionNew,
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
