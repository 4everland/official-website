<template>
  <div id="home">
    <div class="top-alert">
      <v-alert
        v-model="alert"
        close-text="Close Alert"
        color="#e5e0fe"
        dark
        dismissible
        dense
        tile
        max-width="100%"
      >
        <a
          href="https://forms.gle/CrCVBoWFaA4V3RiB6"
          target="_blank"
          rel="noopener noreferrer"
          class="anima"
        >
          <v-icon color="#8272d1" dense class="mb-1 mr-2"
            >mdi-volume-high</v-icon
          >
          4EVERLAND MSP I is now live! A $15k bonus and vouchers are included in
          this 3-month program designed to empower Web3 developers and projects.
          Apply today.
        </a>
      </v-alert>
    </div>

    <section-top />
    <section-universe />
    <section-about />
    <section-help />
    <section-explore />
    <section-globe />
    <section-Partners />
    <section-milestones />
    <section-new />
    <section-footer />
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
import SectionMilestones from '@/components/IndexSections/SectionMilestones.vue'
import SectionFooter from '@/components/IndexSections/SectionFooter.vue'

export default {
  components: {
    SectionTop,
    SectionUniverse,
    SectionAbout,
    SectionHelp,
    SectionExplore,
    SectionGlobe,
    SectionPartners,
    SectionNew,
    SectionMilestones,
    SectionFooter,
  },
  data() {
    return {
      alert: true,
    }
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
<style lang="less" scoped>
#home {
  position: relative;
  .top-alert {
    position: sticky;
    top: 80px;
    z-index: 89;
    text-align: center;
    overflow: hidden;
    display: none;
    /deep/ .v-alert__content {
      overflow: hidden;
    }
    a {
      display: inline-block;
      color: #8272d1;
      text-decoration: none;
      font-family: 'Ubuntu', sans-serif !important;
      white-space: nowrap;
    }
  }
}

@media (max-width: 960px) {
  .anima {
    animation-name: move;
    animation-direction: normal;
    animation-timing-function: linear;
    animation-delay: 2s;
    animation-iteration-count: infinite;
    animation-duration: 20s;
  }
}

@keyframes move {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(calc(200px - 100%), 0);
  }
}
</style>
